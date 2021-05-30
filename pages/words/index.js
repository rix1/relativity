// @flow
import Link from 'next/link';
import React from 'react';
import PageLayout from '../../components/PageLayout';

import { meta } from './lifetime.mdx';

type Props = {
  children: ReactNode,
};

const ArticleOverview = ({ children }: Props) => {
  return (
    <PageLayout>
      <section className="flex-auto relative">
        <div className="f1 measure-narrow center mb4 relative">
          <article className="w-100 pa2-ns mb3">
            <Link href="/words/lifetime">
              <a className="ph2 ph0-ns link db">
                <time className="mb0 f3 mr3">
                  {meta.createdAt && new Date(meta.createdAt).toDateString()}
                </time>
                {meta.isDraft && (
                  <span className="f6 fw6 dim br-pill ph2 pv1 dib black-60 bg-black-10">
                    draft
                  </span>
                )}
                <h3 className="mv0 black-90">{meta.title}</h3>
                <h3 className="f2 mt2 black-60">{meta.description}</h3>
              </a>
            </Link>
          </article>
        </div>
      </section>
    </PageLayout>
  );
};

export default ArticleOverview;
