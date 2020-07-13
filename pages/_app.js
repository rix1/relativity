// @flow
import React from 'react';
import '../styles/base.css';

const App = ({ Component, pageProps }: any) => (
  <div className="flex flex-column vh-100 athelas">
    <header className="tc">
      <h1 className="f3 fw7  relative dib">Words by Rikard</h1>
    </header>
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </div>

    <footer className="tc f5 moon-gray mb3 mt7">
      Created by{' '}
      <a
        className="fw4 dim link near-black pv1 underline silver"
        href="https://twitter.com/rix1">
        @rix1
      </a>
    </footer>
  </div>
);

export default App;
