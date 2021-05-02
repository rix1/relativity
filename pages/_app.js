// @flow
import Head from 'next/head';
import React from 'react';
import '../styles/base.css';

const App = ({ Component, pageProps }: any) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export default App;
