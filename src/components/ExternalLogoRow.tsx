

import React from "react";
import Img from "gatsby-image";

import { DynamicTrans } from "../components/DynamicTrans";
import { targetBlank } from "../helpers";

export const ExternalLogoRow = ({
  title,
  logos
}: {title: string;logos: Image[];}) => <div className="bg-light position-relative p-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="text-gray-neutral text-center mb-4 font-weight-light">
          <DynamicTrans>{title}</DynamicTrans>
        </div>
      </div>
      <div className="row w-100 justify-content-between align-items-center">
        {logos.map(({
        title: alt,
        localFile,
        description: url
      }) => {
        const image = <Img {...localFile?.childImageSharp} alt={alt} />;
        const hasUrl = !!url && url.startsWith('https://');
        const className = 'm-4 d-flex align-items-center';
        return <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center align-items-center" key={alt}>
              {hasUrl ? <a href={url} {...targetBlank} className={className}>
                  {image}
                </a> : <div className={className}>{image}</div>}
            </div>;
      })}
      </div>
    </div>
  </div>;