// @flow
import React from 'react';

type Props = {
  children: ReactNode,
};

const H2 = ({ children }: Props) => (
  <h2 className="ph0 f4 f2-ns measure-narrow center">{children}</h2>
);

export default { H2 };
