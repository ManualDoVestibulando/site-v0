import React from 'react';
import Layout from '../../components/Layout';
import axios from '../../lib/axios';

const Instituto = ({ instituto }) => {
  return (
    <Layout>
      <main>
        <h2> {instituto.nome} </h2>
      </main>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const query = `
    query Querry($instituto: String!) {
      institutos(where: { slug_: $instituto }) {
        slug_
        nome
      }
    }
  `;

  const response = await axios.post('/graphql', {
    query,
    variables: {
      instituto: params.instituto
    }
  });

  const data = response.data.data;

  return {
    props: {
      instituto: data.institutos[0],
    },
  };
};

export const getStaticPaths = async () => {
  const query = `
    {
      institutos {
        slug_
      }
    }
  `;

  const response = await axios.post('/graphql', {
    query,
  });

  const data = response.data.data;

  return {
    paths: data.institutos.map((instituto) => ({
      params: {
        instituto: instituto.slug_,
      },
    })),
    fallback: false,
  };
};

export default Instituto;
