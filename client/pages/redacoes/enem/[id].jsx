import React from 'react';
import MainNavbar from '../../../components/MainNavbar';
import { Container, Row, Col } from 'react-bootstrap';
import axios from '../../../lib/axios';

function RedacaoEnem({ redacao, url }) {
  return (
    <div>
      <MainNavbar />
      <Container>
        <h1 className="text-center mt-2 mb-2">{redacao.ano}</h1>
        <img
          className="mx-auto d-block imagem-redacao"
          src={'https://api.manualdovestibulando.com.br' + url}
        ></img>
        <h2 className="text-center mb-2">Nota: {redacao.nota_total}</h2>
        <h4 className="text-center mb-2">
          Competência 1: {redacao.competencia_1}
        </h4>
        <h4 className="text-center mb-2">
          Competência 2: {redacao.competencia_2}
        </h4>
        <h4 className="text-center mb-2">
          Competência 3: {redacao.competencia_3}
        </h4>
        <h4 className="text-center mb-2">
          Competência 4: {redacao.competencia_4}
        </h4>
        <h4 className="text-center mb-2">
          Competência 5: {redacao.competencia_5}
        </h4>
        <style jsx>{`
          .imagem-redacao {
            max-width: 100%;
          }
        `}</style>
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const query = `
        query Querry($id: String!) {
          redacaoEnems(where: { id: $id} ) {
            nota_total
            foto
            ano
            competencia_1
            competencia_2
            competencia_3
            competencia_4
            competencia_5
          }
        }
      `;

  const res = await axios.post('/graphql', {
    query,
    variables: {
      id: id,
    },
  });

  const redacao = res.data.data.redacaoEnems[0];

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

export default RedacaoEnem;
