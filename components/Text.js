// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
};

const Text = ({ children }: Props) => {
  return <p className="f6 f4-ns lh-copy measure center">{children}</p>;
};

type HighlightProps = {
  children: React.Node,
};

export const Highlight = ({ children }: HighlightProps) => (
  <span className="bg-black-90 lh-copy white pa1 tracked-tight">
    {children}
  </span>
);

export default Text;
