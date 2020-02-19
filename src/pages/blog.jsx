// @flow

import React from 'react';
import { withI18n } from '@lingui/react';
import { graphql } from 'gatsby';

import { ContentBody, PostLink } from '../components/Content';
import { Title } from '../layouts/utils';
import { DefaultHeader } from '../components/Header';

export default withI18n()(({ i18n, data, prefix }: Props) => (
  <div>
    <Title
      title={i18n.t`Blog`}
      description={i18n.t`Thoughts on cap tables, financing rounds, and legal issues around running and managing a startup.`}
    />

    <DefaultHeader title={i18n.t`The Ledgy Blog`} />

    <ContentBody>
      {data.allContentfulPage.edges.map(edge => {
        const { node } = edge;
        const { id, slug, description } = node;
        return (
          <PostLink
            key={id}
            to={`${prefix}/blog/${slug}`}
            post={node}
            defaultImage={data.ledgy}
            description={description}
          />
        );
      })}
    </ContentBody>
  </div>
));

export const pageQuery = graphql`
  query {
    ...DefaultCover
    allContentfulPage(
      filter: { namespace: { eq: "/blog/" } }
      sort: { order: DESC, fields: [date] }
    ) {
      edges {
        node {
          id
          slug
          title
          description
          language
          date(formatString: "DD MMM YYYY")
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
