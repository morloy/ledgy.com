// @flow

import React from 'react';
import Img from 'gatsby-image';
import { withI18n } from '@lingui/react';

import { DynamicTrans, dynamicI18n } from '../components/DynamicTrans';
import { getUnderlineHtml } from './lib';

export const MainProblemLayout = withI18n()(
  ({ title, description, image }: {| title: string, description: string, image: Image |}) => {
    return (
      <div className="container p-4 p-lg-7 my-4 my-lg-7 position-relative z-index-base">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h2
              className="custom-underline mb-4"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: getUnderlineHtml(dynamicI18n(title)) }}
            />
            <p className="text-lg my-4">
              <DynamicTrans>{description}</DynamicTrans>
            </p>
            <div className="px-4 px-sm-6 px-lg-7 px-xl-9">
              <Img {...image.localFile?.childImageSharp} />
            </div>
          </div>
        </div>
      </div>
    );
  }
);
