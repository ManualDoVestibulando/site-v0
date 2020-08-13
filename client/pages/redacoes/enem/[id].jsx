import React from 'react';
import MainNavbar from '../../../components/MainNavbar';
import { Container, Row, Col } from 'react-bootstrap';
import axios from '../../../lib/axios';

function RedacaoEnem({ redacao, url }) {
  console.log(redacao);
  console.log(url);

  return (
    <div>
      <MainNavbar />
      <Container>
        <h1 className="text-center mt-2 mb-2">{redacao.ano}</h1>
        <img
          className="mx-auto d-block"
          src={'https://api.manualdovestibulando.digital' + url}
        ></img>
        <h1 className="text-center mb-2">Nota: {redacao.nota_total}</h1>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  console.log(id);

  const query = `
        query Querry($id: String!) {
          redacaoEnems(where: { id: $id} ) {
            titulo
            nota_total
            foto
            ano
          }
        }
      `;

  console.log(query);

  const res = await axios.post('/graphql', {
    query,
    variables: {
      id: id,
    },
  });

  const redacao = res.data.data.redacaoEnems[0];

  const res2 = await axios.get(
    'https://api.manualdovestibulando.digital/upload/files?name=' + redacao.foto
  );

  const url = res2.data[0].url;

  return {
    props: {
      redacao,
      url,
    },
  };
}

export default RedacaoEnem;
