import React from 'react';
import Layout from '../components/Layout';
import Search from '../components/Search';
import axios from '../lib/axios';

const Home = ({ options }) => (
  <Layout>
    <main>
      <Search options={options} />
    </main>
  </Layout>
);

export const getStaticProps = async () => {
  const query = `
        query Querry {
          institutos(sort: "nome") {
            nome
            slug_
            cursos(sort: "nome") {
              nome
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
    props: {
      options: data.institutos.map((instituto) => ({
        label: instituto.nome,
        options: instituto.cursos.map((curso) => ({
          value: `/${instituto.slug_}/${curso.slug_}`,
          label: curso.nome,
        })),
      })),
    },
  };
};

export default Home;
