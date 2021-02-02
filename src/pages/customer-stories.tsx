import React from 'react';
import { graphql } from 'gatsby';
import { t } from '@lingui/macro';

import { ContentBody } from '../components/Content';
import { PageHeader } from '../components/PageHeader';

import { CustomerStoryLink } from '../components/customerStories';
import { Title } from '../layouts/utils';

const CustomerStories = ({ prefix, data }: Props) => {
  const title = t`Customer Stories`;
  const description = t`Insights on how customers use Ledgy to solve their problems`;
  return (
    <div>
      <Title title={title} description={description} />
      <PageHeader title={title} subtitle={description} />

      <ContentBody>
        {data.allContentfulCustomerStory.edges.map(({ node }: { node: CustomerStoryBaseProps }) => (
          <CustomerStoryLink key={node.id} customerStory={node} prefix={prefix} />
        ))}
      </ContentBody>
    </div>
  );
};

export default CustomerStories;

export const customerStoriesPageQuery = graphql`
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
            logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
