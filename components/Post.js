// @flow
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';
import React, { Node } from 'react';
import Heading from './Heading';
import PageLayout from './PageLayout';
import Quote from './Quote';
import Footnote from './Footnote';
import Text from './Text';
import Link from 'next/link';

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
  hr: () => <hr className="" />,
};

const Post = ({ children, meta }: Props = {}) => (
  <PageLayout>
    {/* <MDXProvider components={components}> */}
    <section className="">
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

      <article className="mx-auto prose prose-red prose-lg lg:prose-xl font-serif">
        <h2>{meta.title}</h2>
        <p className="">
          Words by {meta.author} |{' '}
          <time>
            {meta.createdAt && new Date(meta.createdAt).toDateString()}
          </time>
          {meta.isDraft && (
            <div className="ml-3 rounded-full px-2 py-1 inline-block bg-gray-200 text-gray-500 text-xs">
              <span className="">draft</span>
            </div>
          )}
        </p>

        <p className="lead font-bold">{meta.description}</p>

        <div className="mt-8">{children}</div>
        <hr />
        <p>
          Got any feedback? Hit me up on Twitter,{' '}
          <Link href="https://twitter.com/rix1">
            <a>@rix1</a>
          </Link>
          . Thanks for reading!
        </p>
      </article>
    </section>
    {/* </MDXProvider> */}
  </PageLayout>
);

export default Post;
