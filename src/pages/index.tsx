import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import {
  HomePageHeader,
  MainProblemLayout,
  ExternalLogoRow,
  SellingProp,
  dynamicI18n,
  G2AndCapterraStrip,
} from '../components';

const DecoShapes = () => (
  <>
    <div className="top-deco-shape top-deco-shape--one" />
    <div className="top-deco-shape top-deco-shape--two" />
  </>
);

const IndexPage = (props: Props) => {
  const { data, prefix } = props;
  const [content] = data.page.edges;
  const { title, entries } = content.node;

  return (
    <main className="position-relative overflow-hidden">
      {!!title && (
        <Helmet>
          <title>{`Ledgy: ${dynamicI18n(title)}`}</title>
        </Helmet>
      )}
      <DecoShapes />
      <HomePageHeader {...props} />

      {(entries as ContentfulIndexEntry[]).map((entry, index) => {
        const { __typename, id } = entry;

        if (index === 0) {
          return <MainProblemLayout key={id} {...entry} />;
        }
        if (__typename === 'ContentfulExternalLogos') {
          return <ExternalLogoRow key={id} {...entry} />;
        }
        if (__typename === 'ContentfulSellingProposition') {
          return <SellingProp key={id} {...entry} prefix={prefix} imgFirst={index % 2 === 0} />;
        }
        return null;
      })}
      <G2AndCapterraStrip />
    </main>
  );
};

export default IndexPage;

export const indexPageQuery = graphql`
  query {
    page: allContentfulFrontPage {
      edges {
        node {
          title
          mainHeader
          bannerImage {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
          description
          entries {
            ... on ContentfulExternalLogos {
              id
              title
              logos {
                title
                description
                localFile {
                  childImageSharp {
                    fixed(width: 120) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
            ... on ContentfulSellingProposition {
              id
              title
              description
              link
              linkTo
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 400) {
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
  }
`;
