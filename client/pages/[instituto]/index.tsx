import React from 'react';
import { initializeApollo } from '../../lib/apollo';
import gql from 'graphql-tag';
import Layout from '../../components/Layout';

const Instituto = ({ instituto }) => {
  console.log(instituto);
  return (
    <Layout>
      <main>
        <h2> {instituto.nome} </h2>
      </main>
    </Layout>
  );
};

const pathsQuery = gql`
  {
    institutos {
      sigla
    }
  }
`;

const queryData = gql`
  {
    institutos(where: { sigla: "poli" }) {
      nome
    }
  }
`;

export const getStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();
  const sigla = params.instituto // É o parametro do request
  console.log(sigla)

  await apolloClient.query({
    query: queryData,
    variables: { sigla },
  });

  const data = apolloClient.cache.extract().ROOT_QUERY;
  const instituto = Object.values(data)[1][0];

  return {
    props: {
      instituto,
    },
  };
};

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: pathsQuery });

  const data = apolloClient.cache.extract().ROOT_QUERY;
  const institutos = data.institutos as Array<{ sigla: string }>;

  return {
    paths: institutos.map((instituto) => ({
      params: {
        instituto: instituto.sigla,
      },
    })),
    fallback: false,
  };
};

export default Instituto;
