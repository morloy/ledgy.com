import React from 'react';
import { t } from '@lingui/macro';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ContentBody, PostLink, PageHeader } from '../components';

import { Title } from '../layouts/utils';

const Webinars = ({ data }: Props) => (
  <div>
    <Title
      title={t`Webinars`}
      description={t`Webinars on cap tables, financing rounds, and legal issues around running and managing a startup.`}
    />

    <PageHeader title={t`Ledgy Webinars`} />

    <ContentBody>
      {data.allContentfulWebinar.edges.map((edge: UntypedObject) => {
        const { node } = edge;
        const { id, youtube, description } = node;
        return (
          <PostLink
            external
            key={id}
            to={youtube}
            post={node}
            description={<MDXRenderer>{description.childMdx.body}</MDXRenderer>}
          />
        );
      })}
    </ContentBody>
  </div>
);

export default Webinars;

export const webinarsPageQuery = graphql`
  query {
    ...DefaultCover
    allContentfulWebinar(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          title
          date(formatString: "DD MMM YYYY")
          youtube
          description {
            childMdx {
              body
            }
          }
          cover {
            localFile {
              childImageSharp {
                ...CoverImage
              }
            }
          }
        }
      }
    }
  }
`;
