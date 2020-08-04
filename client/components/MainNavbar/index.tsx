import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import Link from 'next/link';

const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Manual do Vestibulando</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/">
            <Nav.Link href="#home" className="ml-lg-5">
              Início
            </Nav.Link>
          </Link>
          <Link href="/cursos">
            <Nav.Link href="#cursos" className="ml-lg-5">
              Procurar Curso
            </Nav.Link>
          </Link>
          <Link href="/redacoes">
            <Nav.Link href="#redacoes" className="ml-lg-5">
              Redações
            </Nav.Link>
          </Link>
          <Link href="/sobre">
            <Nav.Link href="#sobre" className="ml-lg-5">
              Sobre
            </Nav.Link>
          </Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Qual curso você procura?"
            className="mr-sm-2 ml-lg-3"
          />
          <Button variant="outline-warning">Procurar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavbar;
