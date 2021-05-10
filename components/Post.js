// @flow
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import React, { Node } from 'react';
import Heading from './Heading';
import PageLayout from './PageLayout';
import Quote from './Quote';
import Footnote from './Footnote';
import Text from './Text';

type Props = {
  children: Node,
  title: string,
  description?: string,
};

const components = {
  p: Text,
  blockquote: Quote,
  h2: Heading.H2,
  footnote: Footnote,
  hr: () => <hr className="mv5 measure bb-0 b--black-10" />,
};

const Post = ({ children, meta }: Props = {}) => (
  <PageLayout>
    <MDXProvider components={components}>
      <section className="flex-auto relative overflow-hidden">
        <Head>
          <title>{meta.title}</title>
          <meta key="og:title" property="og:title" content={meta.title} />
          <meta
            key="description"
            property="description"
            content={meta.description}
          />
          <meta
            key="og:description"
            property="og:description"
            content={meta.description}
          />
        </Head>

        <div className="f1 measure-narrow center mb4">
          <h2>{meta.title}</h2>
          <div className="f6 ttu tracked gray">
            {meta.isDraft && (
              <div className="mb2">
                <span className="f6 fw6 dim br-pill ph2 pv1 dib black-60 bg-black-10">
                  draft
                </span>
              </div>
            )}
            Words by {meta.author} |{' '}
            <time>
              {meta.createdAt && new Date(meta.createdAt).toDateString()}
            </time>
          </div>
          <blockquote className="ph0 f4 f2-ns mh0 lh-copy lh-title-ns mv0">
            <p className="fw9 mb0">{meta.description}</p>
          </blockquote>
        </div>

        <article className="ph4 pb4">{children}</article>
      </section>
    </MDXProvider>
  </PageLayout>
);

export default Post;
