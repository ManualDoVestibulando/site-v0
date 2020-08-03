import Head from 'next/head';
import React from 'react';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Notas USP</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Notas USP</h1>
    {children}
  </>
);

export default Layout;
