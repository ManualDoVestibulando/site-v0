import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import Search from '../../components/Search';
import axios from '../../lib/axios';
import * as S from '../../styles/notas-style';

const Home = ({ options }) => (
  <Layout>
    <S.Wrapper>
      <S.Title>Procure seu futuro curso aqui:</S.Title>
      <S.WrapperSearch>
        <Search
          placeholder="Selecione seu futuro curso aqui"
          options={options}
        ></Search>
      </S.WrapperSearch>
    </S.Wrapper>
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
          href: `#/${instituto.slug_}/${curso.slug_}/fuvest`,
          value: `/${instituto.slug_}/${curso.slug_}`,
          label: curso.nome,
        })),
      })),
    },
  };
};

export default Home;
