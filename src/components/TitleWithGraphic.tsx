import React from 'react';
import Img from 'gatsby-image';
import { dynamicI18n, DynamicTrans } from './DynamicTrans';
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
      <div className="bg-primary text-secondary py-9 ">
        <div className="container my-9">
          <div className="row justify-content-center counter-tilted-background">
            <div className="col-8 col-lg-3">
              <div className="float-lg-right">
                {!!childImageSharp && <Img {...childImageSharp} />}
              </div>
            </div>

            <div className="col-8 col-lg-5">
              <p>
                <DynamicTrans>{motivationText.toUpperCase()}</DynamicTrans>
              </p>
              <h1
                className="custom-underline my-4 font-weight-bold"
                dangerouslySetInnerHTML={{ __html: getUnderlineHtml(dynamicI18n(title)) }}
              />
              <p>
                <DynamicTrans>{description}</DynamicTrans>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={'tilted-background-deco-one'}></div>
      <div className={'tilted-background-deco-two'}></div>
    </div>
  );
};
