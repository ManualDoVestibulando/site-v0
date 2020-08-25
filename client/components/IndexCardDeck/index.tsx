import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
import Link from 'next/link';

const MainNavbar = () => {
  return (
    <CardDeck>
      <Card bg="light" border="secondary">
        <Card.Img
          className="p-3 teste"
          style={{ height: '250px' }}
          variant="top"
          src="/index_buscar.svg"
        />
        <Card.Body>
          <Card.Title>Descobrir cursos</Card.Title>
          <Card.Text>
            Nessa seção, é possível conhecer os cursos ofertados pela
            Universidade de São Paulo sob a visão de seus alunos ou Centros
            Acadêmicos, desde o foco do aprendizado até mesmo porque aquela
            carreira é a dos seus sonhos.
          </Card.Text>
          <Link href="/notas">
            <Button className="botao-card texto-botao" variant="warning">
              Ir para cursos
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card bg="light" border="secondary">
        <Card.Img
          className="p-3"
          style={{ height: '250px' }}
          variant="top"
          src="/index_notas.svg"
        />
        <Card.Body>
          <Card.Title>Notas dos anos anteriores</Card.Title>
          <Card.Text>
            Nessa seção, é possível encontrar os boletins de desempenho
            referentes à cada curso, com classificação do candidato no
            vestibular.
          </Card.Text>
          <Link href="/notas">
            <Button className="botao-card texto-botao" variant="warning">
              Ir para notas
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <Card bg="light" border="secondary">
        <Card.Img
          className="p-3"
          style={{ height: '250px' }}
          variant="top"
          src="/index_redacoes.svg"
        />
        <Card.Body>
          <Card.Title>Explorar Redações</Card.Title>
          <Card.Text className="mb-4">
            Nessa seção, é possível explorar redações dos vestibulares de
            ingresso, com a variedade de notas, estilos de escrita e
            argumentações de diversos candidatos, proporcionando uma visão mais
            ampla sobre como a capacidade de argumentação é cobrada.
          </Card.Text>
          <Link href="/redacoes">
            <Button className="botao-card texto-botao" variant="warning">
              Ir para redações
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <style jsx global>{`
        .botao-card {
          background-color: #ff8a00;
          border-color: #ff8a00;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
        }
        .botao-card:hover {
          border-color: #a6a6a6;
          background-color: #d97707;
        }
        .texto-botao {
          font-weight: bold;
          font-size: 18px;
        }
      `}</style>
    </CardDeck>
  );
};

export default MainNavbar;
