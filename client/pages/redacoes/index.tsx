import React, { useState, useEffect } from 'react';
import axios from '../../lib/axios';
import { Container } from 'react-bootstrap';
import Layout from '../../components/Layout';
import ListaRedacoes from '../../components/ListaRedacoes';
import ListaRedacoesEnem from '../../components/ListaRedacoesEnem';
import Paginacao from '../../components/Paginacao';

const Redacoes = () => {
  const [redacoes, setRedacoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [redacoesPorPagina, setRedacoesPorPagina] = useState(5);

  const [redacoesEnem, setRedacoesEnem] = useState([]);
  const [loadingEnem, setLoadingEnem] = useState(false);
  const [paginaAtualEnem, setPaginaAtualEnem] = useState(1);
  const [redacoesPorPaginaEnem, setRedacoesPorPaginaEnem] = useState(5);

  useEffect(() => {
    const fetchRedacoes = async () => {
      setLoading(true);
      const query = `
        query Querry {
          redacaos {
            id
            titulo
            nota
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

    const fetchRedacoesEnem = async () => {
      setLoadingEnem(true);
      const query = `
        query Querry {
          redacaoEnems {
            id
            nota_total
            ano
          }
        }
      `;

      const res = await axios.post('/graphql', {
        query,
      });

      const data = res.data.data.redacaoEnems;
      setRedacoesEnem(data);
      setLoadingEnem(false);
      console.log(data);
    };

    fetchRedacoes();
    fetchRedacoesEnem();
  }, []);

  // Achar as redacoes atuais
  const indexUltimaRedacao = paginaAtual * redacoesPorPagina;
  const indexPrimeiraRedacao = indexUltimaRedacao - redacoesPorPagina;
  const redacoesAtuais = redacoes.slice(
    indexPrimeiraRedacao,
    indexUltimaRedacao
  );

  const indexUltimaRedacaoEnem = paginaAtualEnem * redacoesPorPaginaEnem;
  const indexPrimeiraRedacaoEnem =
    indexUltimaRedacaoEnem - redacoesPorPaginaEnem;
  const redacoesAtuaisEnem = redacoesEnem.slice(
    indexPrimeiraRedacaoEnem,
    indexUltimaRedacaoEnem
  );

  //Muda de pagina
  const paginar = (numeroPagina) => setPaginaAtual(numeroPagina);
  const paginarEnem = (numeroPagina) => setPaginaAtual(numeroPagina);

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

        <h2 className="text-center mb-3">Lista de Redações Enem</h2>
        <ListaRedacoesEnem
          redacoes={redacoesAtuaisEnem}
          loading={loadingEnem}
        />
        <Paginacao
          itensPorPagina={redacoesPorPaginaEnem}
          itensTotal={redacoesEnem.length}
          paginar={paginar}
        />
      </Container>
    </Layout>
  );
};

export default Redacoes;
