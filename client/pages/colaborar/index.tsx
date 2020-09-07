import React from 'react';
import Layout from '../../components/Layout';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NextSeo } from 'next-seo';

export default function Colaborar() {
  const SEO = {
    title: 'Enviar Notas - Manual do Vestibulando',

    openGraph: {
      title: 'Enviar Notas - Manual do Vestibulando',
    },
  };

  return (
    <Layout>
      <NextSeo {...SEO} />
      <div className="fundo">
        <Container className="">
          <Row className="mt-2">
            <Col xs="12" className="d-flex justify-content-center">
              <img className="mt-3 logo-usp" src="enviar.png" />
            </Col>
          </Row>
          <Row className="pt-1">
            <Col xs="12">
              <p className="mt-4 texto-introducao bloco-texto">
                Se você é estudante da USP e ainda não enviou sua nota pra
                gente, a hora é agora! Clicando no botão abaixo você será levado
                para um google forms para o envio das notas e da redação.
                Lembre-se de estar logado no seu email USP.
              </p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs="12" className="d-flex justify-content-center">
              <Button
                size="lg"
                className="mb-auto"
                onClick={() => {
                  location.href = 'https://forms.gle/RN7GvUAnQM9S2mzW8';
                }}
              >
                ENVIE SUAS NOTAS
              </Button>
            </Col>
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
          height: 216px;
        }
      `}</style>
    </Layout>
  );
}
