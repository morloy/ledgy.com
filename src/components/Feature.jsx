// @flow

import React, { type Node } from 'react';
import Img from 'gatsby-image';

export const Feature = ({
  title,
  description,
  imgProps,
  imgFirst = false
}: {
  title: Node,
  description: Node[],
  imgProps: Object,
  imgFirst?: boolean
}) => {
  return (
    <div className="container text-center p-4 p-lg-6 my-7">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-7 col-lg-6 d-flex flex-column text-left">
          <h2>{title}</h2>
          <ul>
            {description.map(point => (
              <li>{point}</li>
            ))}
          </ul>
        </div>
        <div
          className={`col-12 col-md-5 col-lg-6 py-3 px-2 px-md-5 ${
            imgFirst ? 'order-md-first' : ''
          }`}
        >
          <Img {...imgProps} />
        </div>
      </div>
    </div>
  );
};
