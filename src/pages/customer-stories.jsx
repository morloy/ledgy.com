// @flow

import React from 'react';
import { withI18n } from '@lingui/react';
import { graphql } from 'gatsby';

import { ContentBody } from '../components/Content';
import { DefaultHeader } from '../components/Header';

import { CustomerStoryLink } from '../components/customerStories';
import { Title } from '../layouts/utils';

export default withI18n()(({ i18n, prefix, data }: Props) => {
  return (
    <div>
      <Title
        title={i18n.t`Customer Stories`}
        description={i18n.t`Insights on how customers use Ledgy to solve their problems`}
      />

      <DefaultHeader title={i18n.t`Ledgy Customer Stories`} />

      <ContentBody>
        {data.allContentfulCustomerStory.edges.map(({ node }) => (
          <CustomerStoryLink key={node.id} customerStory={node} prefix={prefix} />
        ))}
      </ContentBody>
    </div>
  );
});

export const pageQuery = graphql`
  query {
    ...DefaultCover
    allContentfulCustomerStory(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          slug
          title
          subtitle
          date
          company {
            cover {
              fluid(maxWidth: 150) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
