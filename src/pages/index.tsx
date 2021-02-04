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
  TestimonialGrid,
  FeatureGrid,
} from '../components';

const DecoShapes = () => (
  <>
    <div className="top-deco-shape top-deco-shape--one" />
    <div className="top-deco-shape top-deco-shape--two" />
  </>
);

const GF_DUMMY_DATA = {
  header: 'Feature packed flatform for company owners',
  sections: [
    {
      icon: 'hr' as IconType,
      title: 'Employee equity plans',
      description: 'Attract retain and empower your employees with ownership',
    },
    {
      icon: 'chart' as IconType,
      title: 'Scenario modeling',
      description:
        'Predict the future in just a few clicks, with robust scenario and exit modelling ',
    },
    {
      icon: 'rocket' as IconType,
      title: 'Investor relations',
      description: 'Impress investors with accurate financial models and transparent dashboard',
    },
    {
      icon: 'calculator' as IconType,
      title: 'Flexible data reports',
      description: 'Customize yourt tables to your needs and export what you want',
    },
  ],
};

const TTMN_DUMMY_DATA = [
  {
    icon: 'rocket' as IconType,
    description:
      'Employee participation plans are key to taking a startup to the next level. Ledgy provides us with the tools and services we need to really make use of it. It reduces our time and money spend significantly and our employees now report seeing much higher value in their participation plan.',
    name: 'Fabian Wesemann',
    position: 'CFO',
    link: 'Customer Story',
    url: 'ledgy.com',
  },
];

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
      <FeatureGrid featureGridContent={GF_DUMMY_DATA} />
      <TestimonialGrid testimonialContent={TTMN_DUMMY_DATA} />
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
