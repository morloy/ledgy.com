// @flow

import React, { type Node } from 'react';
import Img from 'gatsby-image';

import { targetBlank } from '../helpers';

type Source = {| url?: string, imgProps: any, alt: string |};

export const ExternalLogoRow = ({ title, sources }: { title: Node, sources: Source[] }) => (
  <div className="bg-light position-relative py-7">
    <small className="position-absolute-top-center my-4 text-gray-neutral">{title}</small>
    <div className="container d-flex justify-content-center">
      <div className="row w-100 justify-content-between align-items-center">
        {sources.map(({ url, imgProps, alt }) => (
          <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center align-items-center">
            <a href={url} {...targetBlank} className="m-4 d-flex align-items-center">
              <Img {...imgProps} alt={alt} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);
