import React from 'react';
import { graphql } from 'gatsby';

import { PageHeader, dynamicI18n, Feature } from '../components';
import { Title } from '../layouts/utils';

declare type FeatureProps = {
  id: string;
  title: string;
  description: string[];
  image: Image;
};

type FeaturePageProps = {
  id: string;
  title: string;
  description: string;
  features: FeatureProps[];
  startOnRight?: boolean;
};

const FeaturePage = ({
  data,
}: Props & {
  data: {
    contentfulFeaturePage: FeaturePageProps;
    allContentfulFeaturePage: UnknownObject;
  };
}) => {
  const { title, description, features, startOnRight } = data.contentfulFeaturePage;

  return (
    <div>
      <Title title={dynamicI18n(title)} description={dynamicI18n(description)} />

      <PageHeader title={dynamicI18n(title)} subtitle={dynamicI18n(description)} />
      {features.map(
        ({ id, title: featureTitle, description: featureDescription, image }, index) => (
          <Feature
            key={id}
            title={featureTitle}
            description={featureDescription}
            imgProps={image?.localFile?.childImageSharp}
            imgFirst={index % 2 !== Number(startOnRight)}
          />
        )
      )}
    </div>
  );
};

export default FeaturePage;

export const featurePageQuery = graphql`
  query($id: String!) {
    contentfulFeaturePage(id: { eq: $id }) {
      id
      slug
      title
      description
      startOnRight
      features {
        id
        title
        description
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
