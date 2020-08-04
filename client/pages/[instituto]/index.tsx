import React from 'react';
import { initializeApollo } from '../../lib/apollo';
import gql from 'graphql-tag';
import Layout from '../../components/Layout';
import InstitutoRepository from '../../lib/institutoRepository'

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
  console.log('Start getStaticProps')
  const instituto = await InstitutoRepository.findBySlug(params.instituto)
  console.log(instituto)
  return {
    props: {
      instituto,
    },
  };
};

export const getStaticPaths = async () => {
  console.log('Start getStaticPaths')
  let institutos = await InstitutoRepository.getAll()
  institutos = InstitutoRepository.addSlug(institutos)
  console.log(institutos)
  return ({
    paths: institutos.map((instituto) => ({
      params: {
        instituto: instituto.slug,
      },
    })),
    fallback: false,
  });
}


export default Instituto;
