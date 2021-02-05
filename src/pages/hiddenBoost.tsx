import React from 'react';
import {
  CallToAction,
  ContentWithChecklist,
  FeatureGrid,
  TitleWithGraphic,
  TestimonialCards,
} from '../components';

const HiddenBoostPage = (props: Props) => {
  const { data, prefix } = props;
  const {
    allContentfulFeatureGrid,
    allContentfulCallToAction2021,
    allContentfulTestimonialCards,
    allContentfulContentWithChecklist,
    allContentfulTitleWithGraphic,
  } = data;
  console.log(allContentfulTitleWithGraphic);
  const featureGridContent: FeatureGridContentProps = allContentfulFeatureGrid.edges[0].node;
  const callToActionContent: CallToActionProps = allContentfulCallToAction2021.edges[0].node;
  const { cards }: { cards: TestimonialCardProps[] } = allContentfulTestimonialCards.edges[0].node;
  const contentWithChecklist: ContentWithChecklistProps =
    allContentfulContentWithChecklist.edges[0].node;
  const titleWithGraphicContent: TitleWithGraphicProps =
    allContentfulTitleWithGraphic.edges[0].node;

  return (
    <>
      <FeatureGrid featureGridContent={featureGridContent} />
      <TestimonialCards cards={cards} />
      <TitleWithGraphic {...titleWithGraphicContent} />;
      <FeatureGrid featureGridContent={featureGridContent} />
      <ContentWithChecklist {...contentWithChecklist} />
      <CallToAction prefix={prefix} {...callToActionContent} />
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
    allContentfulTitleWithGraphic {
      edges {
        node {
          title
          motivationText
          description
          graphic {
            localFile {
              childImageSharp {
                fixed(height: 200) {
                  ...GatsbyImageSharpFixed
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
