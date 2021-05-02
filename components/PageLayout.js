// @flow
import Link from 'next/link';
import * as React from 'react';

type HeaderProps = {};

const Header = ({}: HeaderProps) => (
  <header className="tc pv4 pv5-ns">
    <Link href="/">
      <a className="link">
        <img
          src="/first-thursday.jpg"
          className="br-100 pa1 ba b--black-10 h3 w3 cover"
          alt="avatar"
        />
        <h1 className="f5 f4-ns fw6 mid-gray ">Rix1</h1>
        <h2 className="f6 gray fw2 ttu tracked">Oslo, Norway</h2>
      </a>
    </Link>
  </header>
);

const Footer = () => (
  <footer className="tc f5 black-50 mb3 mt7">
    Created by{' '}
    <a
      className="fw4 dim link near-black pv1 underline silver"
      href="https://twitter.com/rix1">
      @rix1
    </a>
  </footer>
);

type Props = {
  children: React.Node,
  header?: React.Node,
  footer?: React.Node,
};

const PageLayout = ({
  children,
  header = <Header />,
  footer = <Footer />,
}: Props) => {
  return (
    <div className="flex flex-column athelas pa5-ns pa3">
      {header}
      <div>{children}</div>
      {footer}
    </div>
  );
};

export default PageLayout;
