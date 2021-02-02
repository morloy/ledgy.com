import React from 'react';
import Img from 'gatsby-image';

import { CardLink } from '../CardLink';

export const CustomerStoryLink = ({
  customerStory,
  prefix,
}: {
  customerStory: CustomerStoryBaseProps;
  prefix: string;
}) => {
  const { title, subtitle, slug, company } = customerStory;
  const { childImageSharp } = company.logo.localFile || {};
  const to = `${prefix}/customer-stories/${slug}`;
  const image = childImageSharp ? <Img {...childImageSharp} /> : null;
  const cardTitle = <h5>{title}</h5>;
  return (
    <CardLink
      title={cardTitle}
      type="customer-story"
      description={subtitle}
      to={to}
      image={image}
    />
  );
};
