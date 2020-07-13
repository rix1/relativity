// @flow
import React, { useState, memo, useCallback } from 'react';
import { MDXProvider } from '@mdx-js/react';

import Content from '../articles/2020-07-09-lifetime.mdx';

import Page from '../components/Page';
import Range from '../components/Range/Range';

type PProps = {
  children: React$Node,
};

const P = ({ children }: PProps) => (
  <p className="f6 f4-ns lh-copy measure center">{children}</p>
);
const Quote = ({ children, fontSize }: PProps) => (
  <blockquote className={`ph0 measure-wide center ${fontSize}`}>
    <p className="fw9 lh-copy lh-title-ns">{children}</p>
  </blockquote>
);

const H2 = ({ children }: PProps) => (
  <h2 className="ph0 f4 f2-ns measure-narrow center">{children}</h2>
);

const LifeSlider = () => {
  const [age, setAge] = useState(30);
  const handleChange = useCallback((val) => setAge(val), []);

  return (
    <div className="measure-wide f3 center mv5">
      <pre className="silver f5">Age: {age}</pre>
      <Range
        value={30}
        sliderIcons={[
          '👶',
          '🧑',
          '🧓',
          '🧓',
          '🧓',
          '🧓',
          '🧓',
          '👴',
          '👴',
          '⚰️',
        ]}
        hasChanged
        onChange={handleChange}
        value={age}
        max={100}
        min={0}
      />
      <div className="flex silver f6">
        <pre className="w-25">Birth</pre>
        <pre className="ml4 mr-auto">Today</pre>
        <pre className="w-10">Death</pre>
      </div>
    </div>
  );
};

const shortCodes = { P, Quote, H2, LifeSlider };

const Index = () => {
  return (
    <MDXProvider components={shortCodes}>
      <Page title="Time, life, relativity and infinity">
        <article className="pa4">
          <Content />
        </article>
      </Page>
    </MDXProvider>
  );
};

export default Index;
