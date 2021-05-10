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
  background: string,
  color: string,
};

export const Highlight = ({
  children,
  background = '--color-red-10',
  color = '--color-red-60',
}: HighlightProps) => (
  <span
    className="lh-copy pa1 tracked-tight br1"
    style={{ color: `var(${color})`, background: `var(${background})` }}>
    {children}
  </span>
);

export default Text;
