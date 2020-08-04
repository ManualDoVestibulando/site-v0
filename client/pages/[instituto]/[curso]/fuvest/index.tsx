import React from 'react';
import DisChart from '../../../../components/Chart';
import Layout from '../../../../components/Layout';
import axios from '../../../../lib/axios';;

const Curso = ({ curso }) => {
  console.log(curso)
  return (
    <Layout>
      <h2> {curso.instituto.nome} </h2>
      <h3> {curso.nome} </h3>
      <h4>Fuvest</h4>
      <article>
        <h1>Notas</h1>
        {/* <DisChart/> */}
        <table>
            <thead>
                <tr>
                    <td>Primeira fase</td>
                    <td>Segunda fase - Dia 1</td>
                    <td>Segunda fase - Dia 2</td>
                    <td>Redaçaõ</td>
                    <td>Classificação</td>
                </tr>
            </thead>
            <tbody>
                {curso.notas.map(nota => (
                    <tr key={nota.classificacao}>
                        <td>{nota.fase1}</td>
                        <td>{nota.fase2dia1}</td>
                        <td>{nota.fase2dia2}</td>
                        <td>{nota.redacao}</td>
                        <td>{nota.classificacao}</td>
                    </tr>
                ))}
            </tbody>
        </table>
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

  return {
    props: {
      curso: data.cursos[0],
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
