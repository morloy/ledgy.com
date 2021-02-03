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
import { CallToAction } from '../components';
import { FeatureGrid } from '../components/FeatureGridCard';

const DecoShapes = () => (
  <>
    <div className="top-deco-shape top-deco-shape--one" />
    <div className="top-deco-shape top-deco-shape--two" />
  </>
);

const CTA_DUMMY_DATA = {
  header: 'Ready to get started?',
  description:
    'Get a personal demo to learn exactly how Ledgy can solve your needs and get a custom offer for your company. Or continue exploring cap table, equity plans, or document automation features.',
  demoButtonText: 'Book a demo',
  tourLinkText: 'Take the tour',
  secondaryHeader: 'Know what you’ll get',
  secondaryDescription: 'Explore pricing plans available for different company sizes',
  secondaryLinkText: 'Explore pricing',
};

const GF_DUMMY_DATA = {
  header: 'Feature packed flatform for company owners',
  sections: [
    {
      icon: '',
      title: 'Employee equity plans',
      description: 'Attract retain and empower your employees with ownership',
    },
    {
      icon: '',
      title: 'Scenario modeling',
      description:
        'Predict the future in just a few clicks, with robust scenario and exit modelling ',
    },
    {
      icon: '',
      title: 'Investor relations',
      description: 'Impress investors with accurate financial models and transparent dashboard',
    },
    {
      icon: '',
      title: 'Flexible data reports',
      description: 'Customize yourt tables to your needs and export what you want',
    },
  ],
};

const IndexPage = (props: Props) => {
  const { data, prefix } = props;
  const [content] = data.page.edges;
  const { title, entries } = content.node;
  const callToActionProps = {
    ...CTA_DUMMY_DATA,
    icon: data.countriesIcon,
  };
  console.log({ data });

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
      <CallToAction prefix={prefix} {...callToActionProps} />
      <G2AndCapterraStrip />
      <FeatureGrid FeatureGridContent={GF_DUMMY_DATA} icon={data.countriesIcon} />
    </main>
  );
};

export default IndexPage;

export const indexPageQuery = graphql`
  query {
    countriesIcon: imageSharp(fluid: { originalName: { regex: "/countries.png/" } }) {
      fixed(width: 50, height: 50) {
        ...GatsbyImageSharpFixed
      }
    }
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
