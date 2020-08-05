import React from 'react';
// import DisChart from '../../../../components/Chart';
import NotasTable from '../../../../components/NotasTable';
import Layout from '../../../../components/Layout';
import axios from '../../../../lib/axios';;

const Curso = ({ curso }) => {
  console.log(curso.notas)
  return (
    <Layout>
      <h2> {curso.nome} - {curso.instituto.nome}</h2>
      <article>
        <h1>Notas</h1>
        <NotasTable notas={curso.notas}/>
      </article>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const query = `
    query Querry($instituto: String!, $curso: String!) {
      cursos(where: { slug_: $curso, instituto: {slug_: $instituto} }) {
        nome
        instituto {
          nome
        }
        notas(sort: "classificacao"){
          fase1
          fase2dia1
          fase2dia2
          redacao
          classificacao
        }
      }
    }
  `;

  const response = await axios.post('/graphql', {
    query,
    variables: {
      instituto: params.instituto,
      curso: params.curso,
    }
  });

  const data = response.data.data;
  const curso = data.cursos[0];
  //TODO: calcular total direito
  curso.notas.forEach(nota => {
    nota.total = nota.fase1*100/90
  })

  return {
    props: {
      curso,
    },
  };
};

export const getStaticPaths = async () => {
  const query = `
    {
      cursos {
        slug_
        instituto {
          slug_
        }
      }
    }
  `;

  const response = await axios.post('/graphql', {
    query,
  });

  const data = response.data.data;

  return {
    paths: data.cursos.map((curso) => ({
      params: {
        curso: curso.slug_,
        instituto: curso.instituto.slug_
      },
    })),
    fallback: false,
  };
};

export default Curso;
