import React, { useState, useEffect } from 'react';
import axios from '../../lib/axios';
import { Row, Container } from 'react-bootstrap';
import Layout from '../../components/Layout';
import ListaRedacoes from '../../components/ListaRedacoes';

const Redacoes = () => {
  const [redacoes, setRedacoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [postsPorPagina, setPostsPorPagina] = useState(10);

  useEffect(() => {
    const fetchRedacoes = async () => {
      setLoading(true);
      const query = `
        query Querry {
          redacaos {
            id
            titulo
          }
        }
      `;

      const res = await axios.post('/graphql', {
        query,
      });

      const data = res.data.data;
      setRedacoes(data.redacaos);
      setLoading(false);
    };

    fetchRedacoes();
  }, []);

  console.log(redacoes);

  return (
    <Layout>
      <Container className="mt-5">
        <h2 className="text-center mb-3">Lista de Redações</h2>
        <ListaRedacoes redacoes={redacoes} loading={loading} />
      </Container>
    </Layout>
  );
};

export default Redacoes;
