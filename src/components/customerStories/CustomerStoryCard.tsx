

import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

export const CustomerStoryCard = ({
  customerStory: {
    slug,
    company
  },
  prefix
}: {
  customerStory: CustomerStory;
  prefix: string;
}) => {
  const pagePath = `${prefix}/customer-stories/${slug}/`;
  const {
    logo,
    cover
  } = company;
  const logoImage = <Img {...logo.localFile?.childImageSharp} />;
  const coverImage = cover ? <Img {...cover.localFile?.childImageSharp} /> : null;
  return <Link href to={pagePath}>
      <div className="card card-more-stories mb-4 mx-auto px-4">
        <div className="h-50 d-table">
          <div className="card-image-wrapper">{logoImage}</div>
        </div>
        <div className="h-50 d-table">
          <div className="card-image-wrapper">{coverImage}</div>
        </div>
      </div>
    </Link>;
};