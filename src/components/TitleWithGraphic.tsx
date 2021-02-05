import React from 'react';
import Img from 'gatsby-image';
import { DynamicTrans } from './DynamicTrans';
import { getUnderlineHtml } from './lib';

export const TitleWithGraphic = ({
  title,
  motivationText,
  graphic,
  description,
}: TitleWithGraphicProps) => {
  const { childImageSharp } = graphic?.localFile || {};

  return (
    <div className="tilted-background my-9">
      <div className="bg-primary text-secondary py-8 ">
        <div className="container my-5">
          <div className="row justify-content-center counter-tilted-background">
            <div className="col-8 col-lg-3">
              {!!childImageSharp && <Img {...childImageSharp} />}
            </div>

            <div className="col-8 col-lg-5">
              <p className="text-uppercase">{motivationText}</p>
              <h1
                className="custom-underline my-4 font-weight-bold"
                dangerouslySetInnerHTML={{ __html: getUnderlineHtml(title) }}
              />
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={'tilted-background-deco-one'}></div>
      <div className={'tilted-background-deco-two'}></div>
    </div>
  );
};
