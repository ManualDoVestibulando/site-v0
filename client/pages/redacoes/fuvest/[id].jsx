import React from 'react';
import MainNavbar from '../../../components/MainNavbar';
import { Container, Row, Col } from 'react-bootstrap';
import axios from '../../../lib/axios';

function RedacaoFuvest({ redacao, url }) {
  return (
    <div>
      <MainNavbar />
      <Container>
        <h1 className="text-center mt-2 mb-2">{redacao.ano}</h1>
        <img
          className="mx-auto d-block"
          src={'https://api.manualdovestibulando.com.br' + url}
        ></img>
        <h1 className="text-center mb-2">Nota: {redacao.nota}</h1>
      </Container>
    </div>
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
