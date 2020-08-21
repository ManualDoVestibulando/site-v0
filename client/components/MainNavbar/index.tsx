import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const MainNavbar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="logo_laranja_manual_semfundo.svg"
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="Manual do Vestibulando"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/">
            <Nav.Link href="#home" className="ml-lg-5">
              Início
            </Nav.Link>
          </Link>
          <Link href="/notas">
            <Nav.Link href="#notas" className="ml-lg-5">
              Pesquisar Notas
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
      </Navbar.Collapse>
      <style jsx>{`
        .home {
          color: black;
          background-color: coral;
        }
      `}</style>
    </Navbar>
  );
};

export default MainNavbar;
