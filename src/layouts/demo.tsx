import { graphql } from 'gatsby';
import { Trans } from '@lingui/macro';
import React from 'react';

import { DemoForm } from '../components/forms';
import { ExternalLogoRow } from '../components/ExternalLogoRow';
import { SellingProp } from '../components/SellingProp';
import { CTABanner } from '../components/CTABanner';
import { formatUrl } from '../components/lib';
import { dynamicI18n, DynamicTrans } from '../components/DynamicTrans';
import logoInvertedCompact from '../img/logo-inverted-compact.png';
import { targetBlank } from '../helpers';

import { Title } from './utils';

const Logo = () => <img width={80} src={logoInvertedCompact} alt="Ledgy" />;

const Quote = ({ name, quote }: ContentfulIndexEntry) =>
  name && quote ? (
    <div className="container text-center py-7 line-height-lg">
      <h3 className="mb-3">“{quote}”</h3>
      <h6>— {name}</h6>
    </div>
  ) : null;

const DecoShapes = () => (
  <>
    <div className="one-pager-deco-shape one-pager-deco-shape--one" />
    <div className="one-pager-deco-shape one-pager-deco-shape--two" />
  </>
);

const DemoPage = (props: LayoutProps) => {
  const { data, prefix } = props;
  const {
    title,
    description,
    formTitle,
    formButtonText,
    content,
    type,
  } = data.contentfulSignupPage; // TODO rename in Contentful
  console.log('demo', content);
  return (
    <>
      <Title title={dynamicI18n(title)} description={dynamicI18n(description)} />
      <header className="header d-flex home-banner px-1 text-left bg-primary overflow-hidden">
        <div className="container my-4 my-md-auto position-relative z-index-base">
          <div className="row mt-4 mt-lg-2 pb-4 pb-md-6">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="mt-lg-n4 mb-md-4 mr-md-4">
                <Logo />
                <h1 className="text-white mt-5 mb-2 mb-sm-3">
                  <DynamicTrans>{title}</DynamicTrans>
                </h1>
                <div className="text-lg line-height-lg text-white font-weight-light pb-3">
                  <DynamicTrans>{description}</DynamicTrans>
                </div>
              </div>
            </div>
            <div className="text-dark col-lg-6 d-flex flex-column justify-content-center mt-4 mt-lg-0">
              <DemoForm
                title={dynamicI18n(formTitle)}
                buttonText={dynamicI18n(formButtonText)}
                contentfulRequesterType={type}
              />
            </div>
          </div>
        </div>
        <DecoShapes />
      </header>
      <div className="position-relative bg-white z-index-base">
        {(content as ContentfulIndexEntry[]).map((entry, i) => {
          const { __typename, id } = entry;

          if (__typename === 'ContentfulQuote') {
            return <Quote key={id} {...entry} />;
          }
          if (__typename === 'ContentfulExternalLogos') {
            return <ExternalLogoRow key={id} {...entry} />;
          }
          if (__typename === 'ContentfulSellingProposition') {
            return (
              <SellingProp key={id} {...entry} prefix={prefix} imgFirst={i % 2 === 0} hideLink />
            );
          }
          return null;
        })}
        <CTABanner {...props} />
      </div>
      <footer className="footer d-flex align-items-center justify-content-center text-white bg-primary p-2">
        <a
          {...targetBlank}
          className="nav-link mx-1 mx-md-5"
          href={formatUrl(prefix, 'legal/privacy-policy')}
        >
          <Trans>Privacy policy</Trans>
        </a>
        <a
          {...targetBlank}
          className="nav-link mx-1 mx-md-5"
          href={formatUrl(prefix, 'data-protection')}
        >
          <Trans>Data protection</Trans>
        </a>
      </footer>
    </>
  );
};

export default DemoPage;

export const demoQuery = graphql`
  query($id: String!) {
    contentfulSignupPage(id: { eq: $id }) {
      id
      slug
      title
      description
      formTitle
      formButtonText
      type
      content {
        ... on ContentfulExternalLogos {
          id
          title
          logos {
            title
            description
            localFile {
              childImageSharp {
                fixed(width: 120) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        ... on ContentfulSellingProposition {
          id
          title
          description
          link
          linkTo
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        ... on ContentfulQuote {
          id
          quote
          name
        }
      }
    }
  }
`;
