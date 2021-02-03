import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImageFluidProps } from 'gatsby-image';

import {
  PublishDate,
  dynamicI18n,
  Author,
  LongText,
  PageHeader,
  CalculatorHeader,
} from '../components';
import { Title } from '../layouts/utils';

const CALCULATOR_SLUG = 'calculator';

const ContentfulPage = ({
  data,
  lang,
  prefix,
}: Props & {
  data: {
    contentfulPage: ContentfulPageProps;
    site: { siteMetadata: { siteUrl: string } };
    calculator: GatsbyImageFluidProps;
  };
}) => {
  if (!data) return null;

  const { slug, title, description, language, content, author, date, cover } = data.contentfulPage;
  const { siteUrl } = data.site.siteMetadata;
  const showCalculatorHeader = slug === CALCULATOR_SLUG;
  const { childImageSharp } = cover?.localFile || {};
  const src =
    childImageSharp && 'fixed' in childImageSharp && 'src' in childImageSharp.fixed
      ? childImageSharp.fixed.src
      : '';
  const thumbnailUrl = cover && cover.localFile && src ? `${siteUrl}${src}` : '';

  return (
    <div>
      <Title
        title={dynamicI18n(title)}
        description={dynamicI18n(description)}
        thumbnailUrl={thumbnailUrl}
      />
      {showCalculatorHeader ? (
        <CalculatorHeader data={data} />
      ) : (
        <PageHeader
          lang={lang}
          documentLang={language}
          title={dynamicI18n(title)}
          subtitle={dynamicI18n(description)}
          textCenter
        />
      )}
      <div className="container container-small">
        <LongText content={content} prefix={prefix} />
        <PublishDate date={date} />
        {author && <Author prefix={prefix} name={author} />}
      </div>
    </div>
  );
};

export default ContentfulPage;

export const contentfulPageQuery = graphql`
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
