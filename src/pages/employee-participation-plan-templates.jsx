// @flow

import React from 'react';
import { Trans, withI18n } from '@lingui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { ContentBody } from '../components/Content';
import { HeaderLayout } from '../components/HeaderLayout';
import { Title } from '../layouts/utils';
import { targetBlank, appUrl, trackSignupGoogleAnalytics } from '../helpers';
import {
  TemplateFAQs,
  Testimonials,
  Instructions,
  CallToAction,
  SignaturesComingSoon,
  Video
} from '../components/templates';
import { ProductHuntButton } from '../components/ProductHuntButton';

const EquityPlans = (props: Props) => {
  const { i18n, data, lang } = props;
  const title = i18n.t`Employee Participation Plan Templates`;
  const description = i18n.t`Get free templates from top Swiss and German law firms for your employee participation plans. Use the Ledgy term sheet guide to easily draft a document with the conditions of your participation plans.`;
  const { siteUrl } = data.site.siteMetadata;
  const buttonOne = {
    props: {
      href: `${appUrl}/templates`,
      onClick: () => trackSignupGoogleAnalytics('clickTemplates'),
      ...targetBlank
    },
    text: <Trans>Get started</Trans>
  };
  const productHuntLaunchButton = (
    <ProductHuntButton
      productHuntLink="https://www.producthunt.com/posts/employee-participation-plan-templates?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-startup-fundraising-calculator"
      trackSignupKey="clickProductHuntESOP"
      postId="175968"
      altText="Free Employee Participation Plan Templates - Using Ledgy! | Product Hunt Embed"
    />
  );
  const isGerman = lang === 'de';
  return (
    <>
      <Title
        title={title}
        description={description}
        thumbnailUrl={`${siteUrl}/banners/employee-participation-plans.png`}
      />
      <HeaderLayout
        title={title}
        subtitle={description}
        buttonOne={buttonOne}
        customButton={productHuntLaunchButton}
        image={
          <div id="mac-templates" data-aos="fade-up">
            <Img {...(isGerman ? data.templatesDe : data.templates)} alt="Templates" />
          </div>
        }
      />
      <ContentBody>
        <>
          <Instructions />
          <CallToAction />
          <Testimonials data={data} i18n={i18n} />
          <Video />
          <TemplateFAQs {...props} />
          <SignaturesComingSoon data={data} />
        </>
      </ContentBody>
    </>
  );
};

export default withI18n()(EquityPlans);

export const PageQuery = graphql`
  query {
    templates: imageSharp(fluid: { originalName: { regex: "/mac-templates.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    templatesDe: imageSharp(fluid: { originalName: { regex: "/mac-templates-de.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    signatures: imageSharp(fluid: { originalName: { regex: "/signatures-coming-soon.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    bakertilly: imageSharp(fluid: { originalName: { regex: "/bakertilly/" } }) {
      fixed(width: 190) {
        ...GatsbyImageSharpFixed
      }
    }
    taylorwessing: imageSharp(fluid: { originalName: { regex: "/taylorwessing/" } }) {
      fixed(width: 190) {
        ...GatsbyImageSharpFixed
      }
    }
    notoptional: imageSharp(fluid: { originalName: { regex: "/notoptional/" } }) {
      fixed(width: 190) {
        ...GatsbyImageSharpFixed
      }
    }
    johannesreck: imageSharp(fluid: { originalName: { regex: "/johannesreck/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    christianreber: imageSharp(fluid: { originalName: { regex: "/christianreber/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    tamazgeorgadze: imageSharp(fluid: { originalName: { regex: "/tamazgeorgadze/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    janinamutze: imageSharp(fluid: { originalName: { regex: "/janinamutze/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
