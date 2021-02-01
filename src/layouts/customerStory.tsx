import React from 'react';
import { graphql } from 'gatsby';

import { LongText } from '../components/LongText';
import { PageHeader } from '../components/PageHeader';
import { CompanySummary, OtherCustomerStories } from '../components/customerStories';
import { Title, Hr } from '../layouts/utils';

export default ({
  data,
  lang,
  prefix,
}: Props & {
  data: {
    contentfulCustomerStory: CustomerStory;
    allContentfulCustomerStory: {
      [key: string]: any;
    };
  };
}) => {
  const { id, title, subtitle, language, content, company } = data.contentfulCustomerStory;
  const otherUserStories = data.allContentfulCustomerStory.edges
    .filter(({ node }) => node.id !== id)
    .map(({ node }) => node);
  const hasOtherCustomerStories = otherUserStories.length > 0;
  return (
    <div>
      <Title title={title} description={subtitle} />
      <PageHeader lang={lang} documentLang={language} title={title} subtitle={subtitle} />
      <main className="main-content">
        <section className="section ">
          <div className="container container-medium">
            <div className="customer-story-section row">
              <div className="col-md-4 mb-6">
                <CompanySummary company={company} prefix={prefix} />
              </div>
              <div className="col-md-8">
                <div className="px-3">
                  <LongText content={content} prefix={prefix} />
                </div>
              </div>
            </div>
            {hasOtherCustomerStories && (
              <>
                <Hr />
                <div className="row pb-6">
                  <div className="col-md-12">
                    <OtherCustomerStories customerStories={otherUserStories} prefix={prefix} />
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    contentfulCustomerStory(id: { eq: $id }) {
      id
      slug
      title
      subtitle
      language
      content {
        childMdx {
          body
        }
      }
      company {
        name
        contactName
        contactTitle
        logo {
          localFile {
            childImageSharp {
              fluid(maxWidth: 150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        mainQuote {
          childMdx {
            body
          }
        }
        yearFounded
        employeeCount
        sector
        location
        stage
      }
    }
    allContentfulCustomerStory(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          slug
          company {
            logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            cover {
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
