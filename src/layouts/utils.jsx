// @flow

import React, { type Node } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Trans } from '@lingui/react';

export const name = 'Ledgy';
export const appUrl = 'https://app.ledgy.com';
export const demoUrl = 'https://demo.ledgy.com';
export const githubUrl = 'https://github.com/morloy/ledgy.com/';
export const forbesUrl = 'https://www.forbesdach.com/30-under-30.html';
export const economistUrl =
  'https://www.economist.com/business/2019/07/06/new-firms-help-startups-keep-track-of-their-owners';
export const wirtschaftswocheUrl =
  'https://gruender.wiwo.de/ledgy-plattform-fuer-beteiligungsmanagement-erhaelt-anschubfinanzierung/';

export const targetBlank = { target: '_blank', rel: 'noopener noreferrer' };

export const isBrowser = typeof window !== 'undefined';

export const loadScript = (path: string): Promise<*> =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = path;
    script.async = true;
    script.onload = resolve;
    return (document.body && document.body.appendChild(script)) || reject();
  });

export const trackSignup = (type: string) => {
  if (window.ga) window.ga('send', 'event', 'signup', type);
};

export const Title = (props: {
  title: string,
  section?: string,
  description?: string,
  thumbnailUrl?: string
}) => (
  <Helmet>
    <title>
      {props.title} {props.section && `| ${props.section}`} | {name}
    </title>
    {props.description && <meta name="description" content={props.description} />}

    <meta property="og:title" content={props.title} />
    {props.description && <meta property="og:description" content={props.description} />}
    {props.thumbnailUrl && <meta property="og:image" content={props.thumbnailUrl} />}

    <meta name="twitter:title" content={props.title} />
    {props.description && <meta name="twitter:description" content={props.description} />}
    {props.thumbnailUrl && <meta name="twitter:image" content={props.thumbnailUrl} />}
  </Helmet>
);
Title.defaultProps = { section: '', description: '', thumbnailUrl: '' };

export const Li = ({ children }: { children: Node }) => (
  <li className="media mb-1">
    <FontAwesomeIcon icon={faCheck} className="text-success mr-1 mt-1" />
    <div className="media-body ml-3">{children}</div>
  </li>
);

export const ChevronRight = () => (
  <FontAwesomeIcon icon={faChevronRight} className="fs-12 ml-2 adjust-bottom swinging" />
);

export const Hr = ({ marginX }: { marginX?: number }) => (
  <hr className={`my-5 my-md-7 ${marginX ? `mx-md-${marginX}` : ''}`} />
);
Hr.defaultProps = { marginX: 0 };

export const animateTablet = () => {
  let scrolling = false;
  window.onscroll = () => {
    scrolling = true;
  };
  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      const tablet = document.getElementById('tablet-ledgy');
      const banner = document.querySelector('header');
      const { scrollY } = window;
      if (tablet && banner && scrollY <= banner.clientHeight) {
        tablet.style.transform = `rotateZ(${scrollY / -70}deg) translateY(${scrollY /
          35}%) skew(-${scrollY / 140}deg)`;
      }
    }
  }, 50);
};

export const callToActionExperiments = [
  { name: 'freeForever', title: <Trans>Free forever with 50 MB storage</Trans> },
  { name: 'stakeholders', title: <Trans>Help your stakeholders stay up to date</Trans> },
  { name: 'peaceOfMind', title: <Trans>Find peace of mind with a better cap table tool</Trans> },
  { name: 'yourCapTable', title: <Trans>Your cap table, free forever</Trans> }
];

export const Header = ({ text, children }: { text: Node | string, children?: Node }) => (
  <header className="header text-white bg-ledgy">
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>{text}</h1>
          {children}
        </div>
      </div>
    </div>
  </header>
);
