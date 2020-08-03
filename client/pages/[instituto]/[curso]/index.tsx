import React from 'react';
import { initializeApollo } from '../../../lib/apollo';
import gql from 'graphql-tag';
import Layout from '../../../components/Layout';

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

const pathsQuery = gql`
  {
    cursos {
      nome
      instituto {
        sigla
      }
    }
  }
`;

const queryData = gql`
  query Curso($sigla: String!, $curso: String!) {
    cursos(
      where: { nome: $curso, instituto: { sigla: $sigla } }
    ) {
      nome
      instituto {
        nome
        sigla
      }
    }
  }
`;

export const getStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();
  const sigla = params.instituto; // É o parametro do request
  const cursoName = decodeURI(params.curso);

  await apolloClient.query({
    query: queryData,
    variables: { sigla, curso: cursoName },
  });

    const data = apolloClient.cache.extract().ROOT_QUERY;
    const curso = Object.values(data)[1][0];

  return {
    props: {
      curso: curso,
    },
  };
};

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: pathsQuery });

  const data = apolloClient.cache.extract().ROOT_QUERY;
  const cursos = data.cursos as Array<{
    nome: string;
    instituto: { sigla: string };
  }>;

  return {
    paths: cursos.map((curso) => ({
      params: {
        instituto: curso.instituto.sigla,
        curso: encodeURI(curso.nome),
      },
    })),
    fallback: false,
  };
};

export default Curso;
