// @flow

import React from 'react';
import { graphql } from 'gatsby';
import { PublishDate } from '../components/Content';
import { Author } from '../components/Markdown';
import { LongText } from '../components/LongText';
import { PageHeader } from '../components/PageHeader';
import { CalculatorHeader } from '../components/CalculatorHeader';
import { Title } from '../layouts/utils';

const CALCULATOR_SLUG = 'calculator';

export default ({
  data,
  lang,
  prefix
}: {|
  ...Props,
  data: {| contentfulPage: Page, site: { siteMetadata: { siteUrl: string } } |}
|}) => {
  const { slug, title, description, language, content, author, date, cover } = data.contentfulPage;
  const { siteUrl } = data.site.siteMetadata;
  const showCalculatorHeader = slug === CALCULATOR_SLUG;

  return (
    <div>
      <Title
        title={title}
        description={description}
        thumbnailUrl={cover ? `${siteUrl}${cover.localFile.childImageSharp.fixed.src}` : ''}
      />
      {showCalculatorHeader ? (
        <CalculatorHeader data={data} />
      ) : (
        <PageHeader lang={lang} documentLang={language} title={title} textCenter />
      )}
      <div className="container container-small">
        <LongText content={content} />
        <PublishDate date={date} />
        {author && <Author prefix={prefix} name={author} />}
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    contentfulPage(id: { eq: $id }) {
      id
      slug
      title
      description
      language
      date(formatString: "DD MMM YYYY")
      author
      content {
        childMdx {
          body
        }
      }
      cover {
        localFile {
          childImageSharp {
            fixed(width: 1024, height: 536) {
              src
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    calculator: imageSharp(fluid: { originalName: { regex: "/calculator.png/" } }) {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;
