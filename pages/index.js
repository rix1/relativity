// @flow
import React from 'react';
import Link from 'next/link';

import Range from '../components/Range/Range';
import Quote from '../components/Quote';
import Text, { Highlight } from '../components/Text';
import Heading from '../components/Heading';
import Sidenote from '../components/Sidenote';
import PageLayout from '../components/PageLayout';

// const shortCodes = {
//   p: Text,
//   quote: Quote,
//   h2: Heading.H2,
//   LifeSlider,
//   sidenote: Sidenote,
// };

const projects = [
  {
    title: '46brew',
    description: 'A coffee timer for the 4:6 brewing method.',
    link: 'https://46brew.app',
    repo: 'http://github.com/rix1/46brew',
  },
  {
    title: 'Nearme',
    description: 'A tool to help you track your lockdown-encounters.',

    link: 'http://nearme.rix1.dev',
    repo: 'https://github.com/rix1/nearme',
  },
  {
    title: 'Auth now',
    description:
      'We created a simple passwordless authentication service ✨ (not live)',
    // link: 'https://github.com/rix1/auth-now',
    repo: 'https://github.com/rix1/auth-now',
  },
  {
    title: 'Feriekolonien.no',
    description:
      'A site for a childrens camp where I cook and play during summer.',
    link: 'https://www.feriekolonien.no',
    // repo: 'https://github.com/feriekolonien/web',
  },
  {
    title: 'Plugformac.com',
    description: (
      <span>
        I try my best to give a helping hand out to the awesome people at{' '}
        <a href="https://wulkano.com">Wulkano</a> 💜
      </span>
    ),
    link: 'https://www.plugformac.com',
  },
  {
    title: 'Meeting timer',
    description: 'A stupid tool that wont help you do meetings better.',
    link: 'https://rix1-meeting-timer-kxtvp0psu.now.sh',
    repo: 'https://github.com/rix1/meeting-timer',
  },
  {
    title: 'Gradient mixer',
    description:
      'A simple tool that help you mix a bunch of colors to find nice gradients 💅',
    link: 'http://rix1.github.io/gradient-mixer/',
    repo: 'https://github.com/rix1/gradient-mixer',
  },
];

const Index = () => {
  return (
    <PageLayout header={false}>
      <section className="flex-auto relative">
        <div className="f1 measure-narrow center mb4 relative">
          <blockquote className="ph0 f4 f1-ns measure-narrow center mt0">
            <p className="fw9 lh-copy lh-title-ns">
              Among other things, <a href="https://twitter.com/rix1">@rix1</a>{' '}
              is a <a href="https://github.com/rix1">product developer</a> at{' '}
              <a href="https://twitter.com/@otovosolar">Otovo</a>. I&apos;m also
              a brother and mother to Sam, an old belgian shepard full of
              wisdom.
            </p>
            <p className="fw9 lh-copy lh-title-ns">
              I occationally{' '}
              <Link href="/words">
                <a>write</a>
              </Link>
              , but not as often as I aspire to.
            </p>
          </blockquote>
        </div>
      </section>
      <hr className="mv5 bb-0 b--black-10" />
      <section className="cf w-100">
        <h2 className="f4 f1-ns fw6 tc mb3">Sometimes, I make stuff:</h2>
        <p className="tc mt0 mb5">But not all the time</p>
        <div className="flex flex-wrap ph0 ph0-m mw9-l center">
          {projects.map((project) => (
            <article
              key={project.title}
              className="w-100 w-50-m w-25-ns pa2-ns mb3">
              <a href={project.link} className="ph2 ph0-ns db">
                <h3 className="f5 f4-ns mb0 black-90">{project.title}</h3>
              </a>
              <h3 className="f4 fw4 mt2 black-60">{project.description} </h3>
              {project.repo && (
                <a href={project.repo}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="v-mid mr1">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                  Repository
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
