

import React from "react";
import Img from "gatsby-image";

import { CardLink } from "../CardLink";

export const CustomerStoryLink = ({
  customerStory,
  prefix
}: {
  customerStory: CustomerStory;
  prefix: string;
}) => {
  const {
    title,
    subtitle,
    slug,
    company
  } = customerStory;
  const to = `${prefix}/customer-stories/${slug}`;
  const image = <Img {...company.logo.localFile?.childImageSharp} />;
  const cardTitle = <h5>{title}</h5>;
  return <CardLink title={cardTitle} type="customer-story" description={subtitle} to={to} image={image} />;
};