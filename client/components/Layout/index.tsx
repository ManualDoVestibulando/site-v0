import Head from 'next/head';
import React from 'react';
import { Container } from 'react-bootstrap';
import MainNavbar from '../MainNavbar';

const Layout = ({ children }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <header>
      <MainNavbar />
    </header>
    <main>{children}</main>
  </>
);

export default Layout;
