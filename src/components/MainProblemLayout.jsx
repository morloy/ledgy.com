// @flow

import React, { type Node } from 'react';
import Img from 'gatsby-image';

export const MainProblemLayout = ({
  title,
  subtitle,
  imgProps
}: {|
  title: Node,
  subtitle: Node,
  imgProps: any
|}) => (
  <div className="container text-center p-4 p-lg-7 my-4 position-relative z-index-base">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
        <h2 className="custom-underline mb-4">{title}</h2>
        <p className="text-lg my-4">{subtitle}</p>
        <div className="px-md-4 px-lg-7">
          <Img {...imgProps} />
        </div>
      </div>
    </div>
  </div>
);
