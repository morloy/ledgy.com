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
    <div className="container text-center py-4 py-lg-6 my-7">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-7 d-flex flex-column text-left">
          <h2 className="feature-title-decoration mb-3">{title}</h2>
          <ul className="p-0 list-style-none">
            {description.map(point => (
              <li className="feature-list-item-decoration mb-1">{point}</li>
            ))}
          </ul>
        </div>
        <div className={`col-12 col-md-5 py-3 px-2 px-md-4 ${imgFirst ? 'order-md-first' : ''}`}>
          <Img {...imgProps} />
        </div>
      </div>
    </div>
  );
};
