import React from 'react';
import { graphql } from 'gatsby';
import { ComponentPicker } from '../components/ComponentPicker';

const HiddenBoostPage = (props: Props) => {
  const { data, prefix } = props;
  const [content] = data.page.edges;
  const { entries }: { entries: MainPageEntryProps[] } = content.node;

  return (
    <main className="main-wrapper-1 overflow-hidden">
      <div className="main-wrapper-2">
        {entries.map((entry, i) => (
          <ComponentPicker entry={entry} prefix={prefix} key={`${entry.id}-${i}`} />
        ))}
      </div>
    </main>
  );
};

export default HiddenBoostPage;

export const hiddenBoostQuery = graphql`
  query {
    page: allContentfulFrontPage2021 {
      edges {
        node {
          entries {
            ... on ContentfulTopBanner {
              id
              mainHeader
              description
              firstButtonText
              firstButtonUrl
              secondButtonText
              secondButtonUrl
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            ... on ContentfulFeatureGrid {
              id
              header
              sections {
                icon
                title
                description
              }
            }
            ... on ContentfulTestimonialCards {
              id
              cards {
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
            ... on ContentfulContentWithChecklist {
              id
              header
              description
              linkText
              linkUrl
              checklist
            }
            ... on ContentfulTitleWithGraphic {
              id
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
            ... on ContentfulLogoBanner {
              id
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
            ... on ContentfulSelectableCardsWithScreenshots {
              id
              title
              content {
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
            ... on ContentfulCallToAction2021 {
              id
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
      }
    }
  }
`;
