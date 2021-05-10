// @flow
import React from 'react';

type Props = {
  children: ReactNode,
};

const Footnote = ({ children }: Props) => {
  return (
    <aside
      role="doc-footnote"
      className="bg-light-gray br2 gray pa3 f6 f4-ns lh-copy measure center">
      {/* <a href="#footnote-1" role="doc-backlink" title="Go to note reference">
        1
      </a> */}
      <p className="f6 mv0">{children}</p>
    </aside>
  );
};

export default Footnote;
