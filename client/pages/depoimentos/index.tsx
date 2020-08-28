import React, { useState, useEffect } from 'react';
import axios from '../../lib/axios';
import { Container } from 'react-bootstrap';
import Layout from '../../components/Layout';
import ListaRedacoes from '../../components/ListaRedacoes';
import ListaRedacoesEnem from '../../components/ListaRedacoesEnem';
import Paginacao from '../../components/Paginacao';
import ListaDepoimentos from '../../components/ListaDepoimentos';

const Depoimentos = () => {
  const [depoimentos, setDepoimentos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [depoimentosPorPagina, setDepoimentosPorPagina] = useState(8);

  useEffect(() => {
    const fetchDepoimentos = async () => {
      setLoading(true);
      const query = `
        query Querry {
          depoimentos {
            id
            titulo
            link
          }
        }
      `;

      const res = await axios.post('/graphql', {
        query,
      });

      const data = res.data.data.depoimentos;
      console.log(data);
      setDepoimentos(data);
      setLoading(false);
    };

    fetchDepoimentos();
  }, []);

  // Achar as redacoes atuais
  const indexUltimoDepoimento = paginaAtual * depoimentosPorPagina;
  const indexPrimeiroDepoimento = indexUltimoDepoimento - depoimentosPorPagina;
  const depoimentosAtuais = depoimentos.slice(
    indexPrimeiroDepoimento,
    indexUltimoDepoimento
  );

  //Muda de pagina
  const paginar = (numeroPagina) => setPaginaAtual(numeroPagina);

  return (
    <Layout>
      <div className="fundo">
        <div className="p-3"></div>
        <Container>
          <div className="bloco-red">
            <h2 className="text-center mb-3">DEPOIMENTOS</h2>
            <ListaDepoimentos
              depoimentos={depoimentosAtuais}
              loading={loading}
            />
            <Paginacao
              itensPorPagina={depoimentosPorPagina}
              itensTotal={depoimentos.length}
              paginar={paginar}
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

export default Depoimentos;
