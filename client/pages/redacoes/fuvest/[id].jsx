import React from 'react';
import { Container } from 'react-bootstrap';
import axios from '../../../lib/axios';
import { NextSeo } from 'next-seo';
import Layout from '../../../components/Layout';

function RedacaoFuvest({ redacao, url }) {
  const SEO = {
    title: 'Redações FUVEST - MDV',
    description:
      'O Manual do Vestibulando surge da inquietação de diversas estudantes calouros durante seus anos de vestibulandas com ' +
      'a falta de informações sobre como alcançar uma vaga na Universidade de São Paulo. Em um processo tão pouco transparente, aliados ' +
      'aos Centros Acadêmicos (com destaque especial aos centrinhos politécnicos), os estudantes, em iniciativa própria, reuniram a métrica ' +
      'de desempenho dos vestibulares de ingresso (Fuvest e Enem), bem como redações e depoimentos diversos, para democratizar o acesso ' +
      'a esse tipo de informação. ' +
      'Nessa seção, é possível explorar redações da FUVEST, com a variedade de notas, estilos de escrita e argumentações' +
      'de diversos candidatos, proporcionando uma visão mais ampla sobre como a capacidade de argumentação é cobrada.',

    openGraph: {
      title: 'Redações FUVEST - MDV',
      description:
        'O Manual do Vestibulando surge da inquietação de diversas estudantes calouros durante seus anos de vestibulandas com ' +
        'a falta de informações sobre como alcançar uma vaga na Universidade de São Paulo. Em um processo tão pouco transparente, aliados ' +
        'aos Centros Acadêmicos (com destaque especial aos centrinhos politécnicos), os estudantes, em iniciativa própria, reuniram a métrica ' +
        'de desempenho dos vestibulares de ingresso (Fuvest e Enem), bem como redações e depoimentos diversos, para democratizar o acesso ' +
        'a esse tipo de informação. ' +
        'Nessa seção, é possível explorar redações da FUVEST, com a variedade de notas, estilos de escrita e argumentações' +
        'de diversos candidatos, proporcionando uma visão mais ampla sobre como a capacidade de argumentação é cobrada.',
    },
  };

  return (
    <Layout>
      <NextSeo {...SEO} />
      <div>
        <Container>
          <h2 className="text-center mt-2 mb-2">Ano: {redacao.ano}</h2>
          <img
            className="mx-auto d-block imagem-redacao"
            src={'https://api.manualdovestibulando.com.br' + url}
          ></img>
          <h2 className="text-center mb-2">Nota: {redacao.nota}</h2>
        </Container>
        <style jsx>{`
          .imagem-redacao {
            max-width: 100%;
          }
        `}</style>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const query = `
        query Querry($id: String!) {
          redacaos(where: { id: $id} ) {
            nota
            foto
            ano
          }
        }
      `;

  const res = await axios.post('/graphql', {
    query,
    variables: {
      id: id,
    },
  });

  const redacao = res.data.data.redacaos[0];

  const res2 = await axios.get(
    'https://api.manualdovestibulando.com.br/upload/files?name=' + redacao.foto
  );

  const url = res2.data[0].url;

  return {
    props: {
      redacao,
      url,
    },
  };
}

export default RedacaoFuvest;
