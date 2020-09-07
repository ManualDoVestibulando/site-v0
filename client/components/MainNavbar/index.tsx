import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const MainNavbar = () => {
  return (
    <React.Fragment>
      <Navbar expand="lg" className="barra-superior">
        <Link href="/">
          <Navbar.Brand href="#home" className="m-2 p-0">
            <img
              src="/logo_transparente.png"
              width="140"
              className="d-inline-block align-top"
              alt="MDV"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/">
              <Nav.Link href="#home" className="ml-lg-5 my-2 my-lg-0">
                INÍCIO
              </Nav.Link>
            </Link>
            <Link href="/notas">
              <Nav.Link href="#notas" className="ml-lg-5 my-2 my-lg-0">
                PESQUISAR NOTAS
              </Nav.Link>
            </Link>
            <Link href="/redacoes">
              <Nav.Link href="#redacoes" className="ml-lg-5 my-2 my-lg-0">
                REDAÇÕES
              </Nav.Link>
            </Link>
            <Link href="/depoimentos">
              <Nav.Link href="#depoimentos" className="ml-lg-5 my-2 my-lg-0">
                DEPOIMENTOS
              </Nav.Link>
            </Link>
            <Link href="/colaborar">
              <Nav.Link href="#colaborar" className="ml-lg-5 my-2 my-lg-0">
                ENVIAR NOTAS
              </Nav.Link>
            </Link>
            <Link href="/sobre">
              <Nav.Link href="#sobre" className="ml-lg-5 my-2 my-lg-0">
                SOBRE
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <style jsx global>{`
        .barra-superior {
          background-color: rgba(255, 138, 0, 1);
          font-weight: bold;
        }
      `}</style>
    </React.Fragment>
  );
};

export default MainNavbar;
