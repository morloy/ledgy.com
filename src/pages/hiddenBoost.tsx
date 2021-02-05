import React from 'react';
import { CallToAction, ContentWithChecklist, FeatureGrid, TestimonialCards } from '../components';

const HiddenBoostPage = (props: Props) => {
  const { data, prefix } = props;
  const {
    allContentfulFeatureGrid,
    allContentfulCallToAction2021,
    allContentfulTestimonialCards,
    allContentfulContentWithChecklist,
  } = data;
  const featureGridContent: FeatureGridContentProps = allContentfulFeatureGrid.edges[0].node;
  const callToActionContent: CallToActionProps = allContentfulCallToAction2021.edges[0].node;
  const { cards }: { cards: TestimonialCardProps[] } = allContentfulTestimonialCards.edges[0].node;
  const contentWithChecklist: ContentWithChecklistProps =
    allContentfulContentWithChecklist.edges[0].node;

  return (
    <>
      <CallToAction prefix={prefix} {...callToActionContent} />
      <FeatureGrid featureGridContent={featureGridContent} />
      <TestimonialCards cards={cards} />
      <ContentWithChecklist {...contentWithChecklist} />
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
            linkText
            linkPath
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
    allContentfulContentWithChecklist {
      edges {
        node {
          header
          description
          linkText
          linkUrl
          checklist
        }
      }
    }
  }
`;

export default HiddenBoostPage;
