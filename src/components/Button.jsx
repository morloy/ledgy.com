// @flow

import React, { type Node } from 'react';
import { targetBlank } from '../helpers';

export const Button = ({
  children,
  outline = false,
  cta = false,
  inverted = false,
  className = '',
  onClick,
  href,
  id = ''
}: {|
  children: Node,
  outline?: boolean,
  cta?: boolean,
  inverted?: boolean,
  className?: string,
  onClick?: () => void,
  href?: string,
  id?: string
|}) => {
  const color =
    (cta && 'btn-red') ||
    (outline && 'btn-primary border border-white') ||
    (inverted && 'btn-light') ||
    'btn-primary';
  const classes = `btn ${color} ${className}`;
  const props = { onClick, className: classes };
  return href ? (
    <a href={href} id={id} {...props} {...targetBlank}>
      {children}
    </a>
  ) : (
    <button id={id} {...props}>
      {children}
    </button>
  );
};
