// @flow

import React, { type Node } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Trans } from '@lingui/react';
import { name } from '../helpers';

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

export const callToActionExperiments = [
  { name: 'freeForever', title: <Trans>Free forever with 50 MB storage</Trans> },
  { name: 'stakeholders', title: <Trans>Help your stakeholders stay up to date</Trans> },
  { name: 'peaceOfMind', title: <Trans>Find peace of mind with a better cap table tool</Trans> },
  { name: 'yourCapTable', title: <Trans>Your cap table, free forever</Trans> }
];

export const Header = ({ text, children }: { text: Node | string, children?: Node }) => (
  <header className="header text-white">
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

export const Button = ({
  children,
  outline = false,
  cta = false,
  inverted = false,
  className = '',
  onClick,
  href
}: {
  children: Node,
  outline?: boolean,
  cta?: boolean,
  inverted?: boolean,
  className?: string,
  onClick?: () => void,
  href?: string
}) => {
  const color =
    (cta && 'btn-red') ||
    (outline && 'btn-primary border border-white') ||
    (inverted && 'btn-light') ||
    'btn-primary';
  const classes = `btn ${color} ${className}`;
  const props = { onClick, className: classes };
  return href ? (
    <a href={href} {...props}>
      {children}
    </a>
  ) : (
    <button {...props}>{children}</button>
  );
};
