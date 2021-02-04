import React from 'react';
import { CallToAction, FeatureGrid } from '../components';

const CTA_DUMMY_DATA = {
  header: 'Ready to get started?',
  description:
    'Get a personal demo to learn exactly how Ledgy can solve your needs and get a custom offer for your company. Or continue exploring cap table, equity plans, or document automation features.',
  demoButtonText: 'Book a demo',
  tourLinkText: 'Take the tour',
  secondaryHeader: 'Know what you’ll get',
  secondaryDescription: 'Explore pricing plans available for different company sizes',
  secondaryLinkText: 'Explore pricing',
  icon: 'map' as IconType,
};

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

const HiddenBoostPage = (props: Props) => {
  const { data, prefix } = props;
  console.log({ data });

  return (
    <>
      <CallToAction prefix={prefix} {...CTA_DUMMY_DATA} />
      <FeatureGrid featureGridContent={GF_DUMMY_DATA} />
    </>
  );
};

export const indexPageQuery = graphql`
  query {
    allContentfulTestimonialCards {
      edges {
        node {
          cards {
            id
            signature
            text {
              childMdx {
                body
              }
            }
            logo {
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
    }
  }
`;

export default HiddenBoostPage;
