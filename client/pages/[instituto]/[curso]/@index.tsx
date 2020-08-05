import React from 'react';
import Layout from '../../../components/Layout';
import axios from '../../../lib/axios';

const Curso = ({ curso }) => {
  console.log(curso);
  return (
    <Layout>
      <main>
        <h2> {curso.instituto.nome} </h2>
        <h3> {curso.nome} </h3>
      </main>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const query = `
    query Querry($instituto: String!, $curso: String!) {
      cursos(where: { slug_: $curso, instituto: {slug_: $instituto} }) {
        slug_
        nome
        instituto {
          nome
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
