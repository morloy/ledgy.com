import React from 'react';
import {
  CallToAction,
  ContentWithChecklist,
  FeatureGrid,
  TitleWithGraphic,
  TestimonialCards,
  LogoBanner,
  SelectableCardsWithScreenshots,
} from '../components';

const HiddenBoostPage = (props: Props) => {
  const { data, prefix } = props;
  const {
    allContentfulFeatureGrid,
    allContentfulCallToAction2021,
    allContentfulTestimonialCards,
    allContentfulContentWithChecklist,
    allContentfulTitleWithGraphic,
    allContentfulLogoBanner,
    allContentfulSelectableCardsWithScreenshots,
  } = data;

  const featureGridContent: FeatureGridContentProps = allContentfulFeatureGrid.edges[0].node;
  const callToActionContent: CallToActionProps = allContentfulCallToAction2021.edges[0].node;
  const { cards }: { cards: TestimonialCardProps[] } = allContentfulTestimonialCards.edges[0].node;
  const contentWithChecklist: ContentWithChecklistProps =
    allContentfulContentWithChecklist.edges[0].node;
  const titleWithGraphicContent: TitleWithGraphicProps =
    allContentfulTitleWithGraphic.edges[0].node;
  const logoBannerContent: LogoBannerProps = allContentfulLogoBanner.edges[0].node;
  const selectableCardsWithScreenshots: SelectableCardsWithScreenshotsProps =
    allContentfulSelectableCardsWithScreenshots.edges[0].node;

  return (
    <main className="overflow-hidden">
      <LogoBanner logoBannerContent={logoBannerContent} />
      <FeatureGrid featureGridContent={featureGridContent} />
      <SelectableCardsWithScreenshots {...selectableCardsWithScreenshots} />
      <TestimonialCards cards={cards} />
      <TitleWithGraphic {...titleWithGraphicContent} />
      <FeatureGrid featureGridContent={featureGridContent} />
      <ContentWithChecklist {...contentWithChecklist} />
      <CallToAction prefix={prefix} {...callToActionContent} />
    </main>
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
    allContentfulTitleWithGraphic {
      edges {
        node {
          title
          motivationText
          description
          graphic {
            localFile {
              childImageSharp {
                fixed(height: 225) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    allContentfulLogoBanner {
      edges {
        node {
          logos {
            title
            description
            localFile {
              childImageSharp {
                fixed(width: 130) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    allContentfulSelectableCardsWithScreenshots {
      edges {
        node {
          title
          content {
            id
            header
            description
            screenshot {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1500, quality: 100) {
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
