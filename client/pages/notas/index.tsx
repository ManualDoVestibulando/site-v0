import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import Search from '../../components/Search';
import axios from '../../lib/axios';
import * as S from '../../styles/notas-style';
import { NextSeo } from 'next-seo';

const Home = ({ options }) => {
  const SEO = {
    title: 'Notas - Manual do Vestibulando',
    description:
      'O Manual do Vestibulando surge da inquietação de diversas estudantes calouros durante seus anos de vestibulandas com ' +
      'a falta de informações sobre como alcançar uma vaga na Universidade de São Paulo. Em um processo tão pouco transparente, aliados ' +
      'aos Centros Acadêmicos (com destaque especial aos centrinhos politécnicos), os estudantes, em iniciativa própria, reuniram a métrica ' +
      'de desempenho dos vestibulares de ingresso (Fuvest e Enem), bem como redações e depoimentos diversos, para democratizar o acesso ' +
      'a esse tipo de informação. ' +
      'Nessa seção, é possível conhecer os cursos ofertados pela Universidade de São Paulo sob a visão de seus alunos ou Centros Acadêmicos, ' +
      'desde o foco do aprendizado até mesmo porque aquela carreira é a dos seus sonhos. Também é possível encontrar os boletins de ' +
      'desempenho referentes à cada curso, com classificação do candidato no vestibular.',

    openGraph: {
      title: 'Notas - Manual do Vestibulando',
      description:
        'O Manual do Vestibulando surge da inquietação de diversas estudantes calouros durante seus anos de vestibulandas com ' +
        'a falta de informações sobre como alcançar uma vaga na Universidade de São Paulo. Em um processo tão pouco transparente, aliados ' +
        'aos Centros Acadêmicos (com destaque especial aos centrinhos politécnicos), os estudantes, em iniciativa própria, reuniram a métrica ' +
        'de desempenho dos vestibulares de ingresso (Fuvest e Enem), bem como redações e depoimentos diversos, para democratizar o acesso ' +
        'a esse tipo de informação. ' +
        'Nessa seção, é possível conhecer os cursos ofertados pela Universidade de São Paulo sob a visão de seus alunos ou Centros Acadêmicos, ' +
        'desde o foco do aprendizado até mesmo porque aquela carreira é a dos seus sonhos. Também é possível encontrar os boletins de ' +
        'desempenho referentes à cada curso, com classificação do candidato no vestibular.',
    },
  };

  return (
    <Layout>
      <NextSeo {...SEO} />
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
};

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
