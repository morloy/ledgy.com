import React from 'react';
import Img from 'gatsby-image';
import { DynamicTrans } from './DynamicTrans';

export const TitleWithGraphic = ({
  title,
  motivationText,
  graphic,
  description,
}: TitleWithGraphicProps) => {
  const { childImageSharp } = graphic?.localFile || {};

  return (
    <div>
      <div className="container bg-dark text-white p-4">
        <div className="row">
          <div className="col-xl-4">{!!childImageSharp && <Img {...childImageSharp} />}</div>

          <div className="col-xl-8">
            <p className="text-uppercase">{motivationText}</p>
            <h2 className="mb-4">
              <DynamicTrans>{title}</DynamicTrans>
            </h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
