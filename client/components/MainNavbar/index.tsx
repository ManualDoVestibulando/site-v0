import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const MainNavbar = () => {
  return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Manual do Vestibulando</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/">
              <Nav.Link href="#home" className="ml-lg-5">
                Início
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
      </Navbar>
  );
};

export default MainNavbar;
