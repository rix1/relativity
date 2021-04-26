// @flow
import React from 'react';
import '../styles/base.css';

// eslint-disable-next-line react/jsx-props-no-spreading
const App = ({ Component, pageProps }: any) => <Component {...pageProps} />;

export default App;
