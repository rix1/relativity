// @flow
import React from 'react';

type Props = {
  children: ReactNode,
};

const Quote = ({ children }: Props) => {
  return (
    <blockquote className="ph0 f1 measure-narrow center tc i fw9 lh-copy lh-title-ns">
      {(children?.props?.children && children?.props?.children) || children}
    </blockquote>
  );

  // return (
  //   <blockquote className="ph0 measure-wide center f2 i tc">
  //     <p className="fw9 lh-copy lh-title-ns">{children}</p>
  //   </blockquote>
  // );
};

export default Quote;
