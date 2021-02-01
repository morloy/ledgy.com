import React from 'react';
import { t } from '@lingui/macro';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ContentBody, PostLink } from '../components/Content';
import { PageHeader } from '../components/PageHeader';

import { Title } from '../layouts/utils';

const Webinars = ({ data }: Props) => {
  console.log({ data });
  return (
    <div>
      <Title
        title={t`Webinars`}
        description={t`Webinars on cap tables, financing rounds, and legal issues around running and managing a startup.`}
      />

      <PageHeader title={t`Ledgy Webinars`} />

      <ContentBody>
        {data.allContentfulWebinar.edges.map((edge: DisableTypeScript) => {
          const { node } = edge;
          const { id, youtube, description } = node;
          return (
            <PostLink
              external
              key={id}
              to={youtube}
              post={node}
              defaultImage={data.ledgy}
              description={<MDXRenderer>{description.childMdx.body}</MDXRenderer>}
            />
          );
        })}
      </ContentBody>
    </div>
  );
};

export default Webinars;

export const pageQuery = graphql`
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
