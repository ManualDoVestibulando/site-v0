import React from 'react';
import MainNavbar from '../components/MainNavbar';
import IndexCardDeck from '../components/IndexCardDeck';
import Layout from '../components/Layout';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Index() {
  return (
    <Layout>
      <div className="fundo">
        <Container>
          <Row className="pt-3">
            <Col md lg="8">
              <p className="mt-4 texto-introducao bloco-texto">
                Bem vindo ao Manual do Vestibulando! Aqui você encontra as
                principais informações sobre os cursos de ingresso da
                Universidade de São Paulo: temos as notas dos ingressantes; um
                banco com mais de 300 redações da Fuvest e do Enem; depoimentos
                de alunos sobre experiências de vestibular, sobre o início da
                vida na faculdade; e temos textos de grupos acadêmicos sobre a
                estrutura do curso para ajudar você a escolher a carreira dos
                seus sonhos na melhor faculdade!
              </p>
            </Col>
            <Col md lg="4" className="d-flex">
              <img className="mt-3 logo-usp" src="logo_usp.png" />
            </Col>
          </Row>
          <Row className="mt-4">
            <IndexCardDeck />
          </Row>
        </Container>
      </div>
      <style jsx>{`
        .texto-introducao {
          font-size: 18px;
          line-height: 160%;
        }
        .fundo {
          background-image: url('fundo_branco.png');
          min-height: 100vh;
          height: 100%;
          background-position: center;
          background-size: cover;
          background-attachment: fixed;
        }
        .bloco-texto {
          background-color: rgba(255, 255, 255, 1);
          padding: 20px;
          border-radius: 5px;
          border-color: #6c757d !important;
          border: 1px solid rgba(0, 0, 0, 0.125);
        }
        .logo-usp {
          align-self: center;
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </Layout>
  );
}
