import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap';
import MainNavbar from '../MainNavbar';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Notas USP</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainNavbar />
    <Container>
      <h1>Notas USP</h1>
      {children}
    </Container>
  </>
);

export default Layout;
