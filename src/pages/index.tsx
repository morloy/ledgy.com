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

const FeatureGridCard = ({ title, text }: { title: string; text: string }) => (
  <div className="col-12 col-sm-6 col-md-3 container-fluid">
    <img
      src="https://images.g2crowd.com/uploads/report_medal/image/1239/medal.svg"
      width={50}
      alt="super good icon"
    />
    <h5 className="my-4">{title}</h5>
    <p className="my-4 ">{text}</p>
  </div>
);

const FeatureGrid = ({ header }: { header: string }) => (
  <div className="container p-4 p-lg-7 selling-prop">
    <h2 className="text-left text-weight-bold">{header}</h2>
    <div className="row my-4 align-top">
      <FeatureGridCard
        title="Employee equity plans"
        text="Attract retain and empower your employees with ownership"
      />
      <FeatureGridCard title="Scenario modeling" text="Predict the future in just a few clicks" />
      <FeatureGridCard
        title="Investor relations"
        text="Impress investors with accurate financial models and transparent dashboard"
      />
      <FeatureGridCard
        title="Flexible data reports"
        text="Customize yourt tables to your needs and export what you want"
      />
    </div>
  </div>
);

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
      <FeatureGrid header={'Feature packed platform for company owners'} />
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
