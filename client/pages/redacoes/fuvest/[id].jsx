import React from 'react';
import MainNavbar from '../../../components/MainNavbar';
import { Container, Row, Col } from 'react-bootstrap';
import axios from '../../../lib/axios';

function RedacaoFuvest({ redacao }) {
  console.log(redacao);

  return (
    <div>
      <MainNavbar />
      <Container>
        <h1 className="text-center mt-2 mb-2">{redacao.titulo}</h1>
        <img
          className="mx-auto d-block"
          src={'https://api.manualdovestibulando.digital' + redacao.foto.url}
        ></img>
        <h1 className="text-center mb-2">Nota: {redacao.nota}</h1>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  console.log(id);

  const query = `
        query Querry($id: String!) {
          redacaos(where: { id: $id} ) {
            titulo
            nota
            foto{
              url
            }
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

  const redacao = res.data.data.redacaos[0];

  return {
    props: {
      redacao,
    },
  };
}

export default RedacaoFuvest;
