import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
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
          <Card.Text>
            Nessa seção, é possível explorar redações dos vestibulares de
            ingresso, com a variedade de notas, estilos de escrita e
            argumentações de diversos candidatos, proporcionando uma visão mais
            ampla sobre como a capacidade de argumentação é cobrada.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default MainNavbar;
