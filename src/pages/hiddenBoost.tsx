import React from 'react';
import { CallToAction, FeatureGrid, TestimonialCards } from '../components';

const HiddenBoostPage = (props: Props) => {
  const { data, prefix } = props;
  const {
    allContentfulFeatureGrid,
    allContentfulCallToAction2021,
    allContentfulTestimonialCards,
  } = data;
  const featureGridContent: FeatureGridContentProps = allContentfulFeatureGrid.edges[0].node;
  const callToActionContent: CallToActionProps = allContentfulCallToAction2021.edges[0].node;
  const { cards }: { cards: TestimonialCardProps[] } = allContentfulTestimonialCards.edges[0].node;
  return (
    <>
      <CallToAction prefix={prefix} {...callToActionContent} />
      <FeatureGrid featureGridContent={featureGridContent} />
      <TestimonialCards cards={cards} />
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
                  fixed(height: 60) {
                    ...GatsbyImageSharpFixed
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
