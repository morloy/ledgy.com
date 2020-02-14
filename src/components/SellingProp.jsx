// @flow

import React, { type Node } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

type LinkProps = {| to: string, text: Node |};

export const SellingProp = ({
  title,
  subtitle,
  link,
  imgProps,
  imgFirst = false
}: {|
  title: Node,
  subtitle: Node,
  link: LinkProps,
  imgProps: any,
  imgFirst?: boolean
|}) => (
  <div className="container text-center p-4 p-lg-7 my-7">
    <div className="row justify-content-center align-items-center">
      <div className="col-12 col-md-6 col-lg-7 d-flex flex-column text-left">
        <h2 className="custom-underline">{title}</h2>
        <p className="my-4">{subtitle}</p>
        <Link href to={link.to} className="d-flex align-items-center">
          <FontAwesomeIcon icon={faArrowCircleRight} className="fa-sm" />
          <span className="deco-link ml-2">{link.text}</span>
        </Link>
      </div>
      <div
        className={`col-12 col-md-6 col-lg-5 py-3 px-2 px-md-4 ${imgFirst ? 'order-md-first' : ''}`}
      >
        <Img {...imgProps} />
      </div>
    </div>
  </div>
);
