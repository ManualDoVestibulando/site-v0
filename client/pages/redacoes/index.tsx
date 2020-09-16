import React, { useState, useEffect } from 'react';
import axios from '../../lib/axios';
import { Container } from 'react-bootstrap';
import Layout from '../../components/Layout';
import ListaRedacoes from '../../components/ListaRedacoes';
import ListaRedacoesEnem from '../../components/ListaRedacoesEnem';
import Paginacao from '../../components/Paginacao';
import { NextSeo } from 'next-seo';

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

      const res = await axios.get('/redacaos?_limit=1000');

      const data = res.data;
      data.sort((item1, item2) => {
        if (item1.ano != item2.ano) return item2.ano - item1.ano;
        return item2.nota - item1.nota;
      });
      setRedacoes(data);
      setLoading(false);
    };

    const fetchRedacoesEnem = async () => {
      setLoadingEnem(true);

      const res = await axios.get('/redacao-enems?_limit=1000');

      const data = res.data;
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
  const paginar = (numeroPagina) => {
    if (numeroPagina < 1) {
      return setPaginaAtual(1);
    }
    if (numeroPagina > Math.ceil(redacoes.length / redacoesPorPagina)) {
      return setPaginaAtual(Math.ceil(redacoes.length / redacoesPorPagina));
    }
    setPaginaAtual(numeroPagina);
  };

  const paginarEnem = (numeroPaginaEnem) => {
    if (numeroPaginaEnem < 1) {
      return setPaginaAtualEnem(1);
    }
    if (
      numeroPaginaEnem > Math.ceil(redacoesEnem.length / redacoesPorPaginaEnem)
    ) {
      return setPaginaAtualEnem(
        Math.ceil(redacoesEnem.length / redacoesPorPaginaEnem)
      );
    }
    setPaginaAtualEnem(numeroPaginaEnem);
  };

  const SEO = {
    title: 'Redações - Manual do Vestibulando',
    description:
      'O Manual do Vestibulando surge da inquietação de diversas estudantes calouros durante seus anos de vestibulandas com ' +
      'a falta de informações sobre como alcançar uma vaga na Universidade de São Paulo. Em um processo tão pouco transparente, aliados ' +
      'aos Centros Acadêmicos (com destaque especial aos centrinhos politécnicos), os estudantes, em iniciativa própria, reuniram a métrica ' +
      'de desempenho dos vestibulares de ingresso (Fuvest e Enem), bem como redações e depoimentos diversos, para democratizar o acesso ' +
      'a esse tipo de informação. ' +
      'Nessa seção, é possível explorar redações dos vestibulares de ingresso, com a variedade de notas, estilos de escrita e argumentações' +
      'de diversos candidatos, proporcionando uma visão mais ampla sobre como a capacidade de argumentação é cobrada.',

    openGraph: {
      title: 'Redações - Manual do Vestibulando',
      description:
        'O Manual do Vestibulando surge da inquietação de diversas estudantes calouros durante seus anos de vestibulandas com ' +
        'a falta de informações sobre como alcançar uma vaga na Universidade de São Paulo. Em um processo tão pouco transparente, aliados ' +
        'aos Centros Acadêmicos (com destaque especial aos centrinhos politécnicos), os estudantes, em iniciativa própria, reuniram a métrica ' +
        'de desempenho dos vestibulares de ingresso (Fuvest e Enem), bem como redações e depoimentos diversos, para democratizar o acesso ' +
        'a esse tipo de informação. ' +
        'Nessa seção, é possível explorar redações dos vestibulares de ingresso, com a variedade de notas, estilos de escrita e argumentações' +
        'de diversos candidatos, proporcionando uma visão mais ampla sobre como a capacidade de argumentação é cobrada.',
    },
  };

  return (
    <Layout>
      <NextSeo {...SEO} />
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
              pagAtual={paginaAtual}
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
              pagAtual={paginaAtualEnem}
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
            background-color: rgba(255, 255, 255, 0.14);
            padding: 20px;
            border-radius: 40px;
          }
        `}
      </style>
    </Layout>
  );
};

export default Redacoes;
