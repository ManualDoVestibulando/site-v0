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
            nota
            ano
          }
        }
      `;

      const res = await axios.post('/graphql', {
        query,
      });

      const data = res.data.data.redacaos;
      data.sort((item1, item2) => {
        if (item1.ano != item2.ano) return item2.ano - item1.ano;
        return item2.nota - item1.nota;
      });
      setRedacoes(data);
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
      data.sort((item1, item2) => {
        if (item1.ano != item2.ano) return item2.ano - item1.ano;
        return item2.nota_total - item1.nota_total;
      });
      setRedacoesEnem(data);
      setLoadingEnem(false);
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
  const paginarEnem = (numeroPaginaEnem) =>
    setPaginaAtualEnem(numeroPaginaEnem);

  return (
    <Layout>
      <div className="fundo">
        <div className="p-3"></div>
        <Container>
          <div className="bloco-red">
            <h2 className="text-center mb-3">REDAÇÕES DA FUVEST</h2>
            <ListaRedacoes redacoes={redacoesAtuais} loading={loading} />
            <Paginacao
              itensPorPagina={redacoesPorPagina}
              itensTotal={redacoes.length}
              paginar={paginar}
            />
          </div>
          <div className="p-3"></div>
          <div className="bloco-red">
            <h2 className="text-center mb-3 mt-4">REDAÇÕES DO ENEM</h2>
            <ListaRedacoesEnem
              redacoes={redacoesAtuaisEnem}
              loading={loadingEnem}
            />
            <Paginacao
              itensPorPagina={redacoesPorPaginaEnem}
              itensTotal={redacoesEnem.length}
              paginar={paginarEnem}
            />
          </div>
          <div className="p-3"></div>
        </Container>
      </div>
      <style jsx>
        {`
          .fundo {
            background-image: url('fundo_vermelho.jpg');
            min-height: 100vh;
            height: 100%;
            background-position: center;
            background-size: cover;
            background-attachment: fixed;
          }
          .bloco-red {
            background-color: rgba(255, 255, 255, 0.2);
            padding: 20px;
            border-radius: 40px;
          }
        `}
      </style>
    </Layout>
  );
};

export default Redacoes;
