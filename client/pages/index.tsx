import React from 'react';
import MainNavbar from '../components/MainNavbar';
import IndexCardDeck from '../components/IndexCardDeck';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Index() {
  return (
    <div>
      <MainNavbar />
      <Container>
        <Row className="mt-3">
          <Col md lg="8">
            <p className="mt-4">
              Bem vindo ao Manual do Vestibulando! Aqui você encontra as
              principais informações sobre os cursos de ingresso da Universidade
              de São Paulo: temos as notas dos ingressantes; um banco com mais
              de 300 redações da Fuvest e do Enem; depoimentos de alunos sobre
              experiências de vestibular, sobre o início da vida na faculdade; e
              temos textos de grupos acadêmicos sobre a estrutura do curso para
              ajudar você a escolher a carreira dos seus sonhos na melhor
              faculdade!
            </p>
          </Col>
          <Col md lg="4">
            <Image className="mt-3" src="logo_usp.png" fluid />
          </Col>
        </Row>
        <Row className="mt-4">
          <IndexCardDeck />
        </Row>
      </Container>
    </div>
  );
}
