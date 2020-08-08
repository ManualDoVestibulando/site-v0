import React, { useState, useEffect } from 'react';
import axios from '../../lib/axios';
import { Row, Container } from 'react-bootstrap';
import Layout from '../../components/Layout';
import ListaRedacoes from '../../components/ListaRedacoes';
import Paginacao from '../../components/Paginacao';

const Redacoes = () => {
  const [redacoes, setRedacoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [redacoesPorPagina, setRedacoesPorPagina] = useState(5);

  useEffect(() => {
    const fetchRedacoes = async () => {
      setLoading(true);
      const query = `
        query Querry {
          redacaos {
            id
            titulo
            nota
            foto{
              url
            }
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

  // Achar as redacoes atuais
  const indexUltimaRedacao = paginaAtual * redacoesPorPagina;
  const indexPrimeiraRedacao = indexUltimaRedacao - redacoesPorPagina;
  const redacoesAtuais = redacoes.slice(
    indexPrimeiraRedacao,
    indexUltimaRedacao
  );

  //Muda de pagina
  const paginar = (numeroPagina) => setPaginaAtual(numeroPagina);

  return (
    <Layout>
      <Container className="mt-5">
        <h2 className="text-center mb-3">Lista de Redações</h2>
        <ListaRedacoes redacoes={redacoesAtuais} loading={loading} />
        <Paginacao
          itensPorPagina={redacoesPorPagina}
          itensTotal={redacoes.length}
          paginar={paginar}
        />
      </Container>
    </Layout>
  );
};

export default Redacoes;
