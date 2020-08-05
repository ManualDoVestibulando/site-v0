import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import Link from 'next/link';

const MainNavbar = () => {
  return (
    <CardDeck>
      <Card bg="light" border="secondary">
        <Card.Img variant="top" src="/logo_usp.png" />
        <Card.Body>
          <Card.Title>Descobrir cursos</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg="light" border="secondary">
        <Card.Img variant="top" src="/logo_usp.png" />
        <Card.Body>
          <Card.Title>Notas dos anos anteriores</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg="light" border="secondary">
        <Card.Img variant="top" src="/logo_usp.png" />
        <Card.Body>
          <Card.Title>Explorar Redações</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat..
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default MainNavbar;
