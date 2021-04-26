// @flow
import React from 'react';

type Props = {
  children: ReactNode,
};

const Sidenote = ({ children }: Props) => {
  return (
    <div className="bg-light-gray br2 gray pa3 f6 f4-ns lh-copy measure center">
      <p className="f6 mv0">[Side note]: {children}</p>
    </div>
  );
};

export default Sidenote;
