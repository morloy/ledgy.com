import React from 'react';
import { FeatureGrid, CallToAction } from '../components';

const HiddenBoostPage = (props: Props) => {
  const { data, prefix } = props;
  const { allContentfulFeatureGrid, allContentfulCallToAction2021 } = data;
  console.log({ data });
  const featureGridContent = allContentfulFeatureGrid.edges[0].node as FeatureGridContentProps;
  const callToActionContent = allContentfulCallToAction2021.edges[0].node as CallToActionProps;

  return (
    <>
      <CallToAction prefix={prefix} {...callToActionContent} />
      <FeatureGrid featureGridContent={featureGridContent} />
    </>
  );
};

export const hiddenBoostQuery = graphql`
  query {
    allContentfulFeatureGrid {
      edges {
        node {
          header
          sections {
            id
            icon
            title
            description
          }
        }
      }
    }
    allContentfulCallToAction2021 {
      edges {
        node {
          header
          description
          buttonText
          buttonPath
          externalLinkText
          externalLinkUrl
          icon
          secondaryHeader
          secondaryDescription
          secondaryLinkText
          secondaryLinkPath
        }
      }
    }
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
                  fluid(maxWidth: 150) {
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
