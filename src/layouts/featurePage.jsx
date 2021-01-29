// @flow

import React from 'react';
import { graphql } from 'gatsby';
import { withI18n } from '@lingui/react';

import { PageHeader } from '../components/PageHeader';
import { Feature } from '../components/Feature';
import { Title } from '../layouts/utils';
import { dynamicI18n } from '../components/DynamicTrans';

const featurePage = ({
  data,
}: {|
  ...Props,
  data: {|
    contentfulFeaturePage: FeaturePage,
    allContentfulFeaturePage: Object,
  |},
|}) => {
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
            imgProps={image.localFile?.childImageSharp}
            imgFirst={index % 2 !== Number(startOnRight)}
          />
        )
      )}
    </div>
  );
};

export default withI18n()(featurePage);

export const pageQuery = graphql`
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
