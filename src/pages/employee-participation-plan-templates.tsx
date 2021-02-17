import React from 'react';
import { t } from '@lingui/macro';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Title } from '../layouts/utils';
import { appUrl, track } from '../helpers';
import {
  TemplateFAQs,
  Testimonials,
  Instructions,
  CallToActionEsop,
  DigitalSignatures,
  Video,
  Button,
  ContentBody,
  ProductHuntButton,
  DynamicTrans,
  TopBannerLayout,
} from '../components';

const esopTemplates = (props: Props) => {
  const { data, lang } = props;
  const title = t`Employee Participation Plan Templates`;
  const description = t`Get free templates from top Swiss and German law firms for your employee participation plans. Use the Ledgy term sheet guide to easily draft a document with the conditions of your participation plans.`;
  const { siteUrl } = data.site.siteMetadata;
  const isGerman = lang === 'de';

  const buttonOne = (
    <Button
      href={`${appUrl}/templates`}
      onClick={() => track('click.templates')}
      className="mr-2 mb-2"
    >
      <DynamicTrans>Get started</DynamicTrans>
    </Button>
  );

  const productHuntLaunchButton = (
    <ProductHuntButton
      productHuntLink="https://www.producthunt.com/posts/employee-participation-plan-templates?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-startup-fundraising-calculator"
      trackSignupKey="clickProductHuntESOP"
      postId="175968"
      altText="Free Employee Participation Plan Templates - Using Ledgy! | Product Hunt Embed"
    />
  );

  return (
    <>
      <Title
        title={title}
        description={description}
        thumbnailUrl={`${siteUrl}/banners/employee-participation-plans.png`}
      />
      <TopBannerLayout
        title={<DynamicTrans>{title}</DynamicTrans>}
        subtitle={<DynamicTrans>{description}</DynamicTrans>}
        buttonOne={buttonOne}
        buttonTwo={productHuntLaunchButton}
        componentRight={<Img {...(isGerman ? data.templatesDe : data.templates)} alt="Templates" />}
      />
      <ContentBody>
        <Instructions />
        <CallToActionEsop />
        <Testimonials data={data} />
        <Video />
        <TemplateFAQs />
        <DigitalSignatures data={data} />
      </ContentBody>
    </>
  );
};

export default esopTemplates;

export const esopTemplatesPageQuery = graphql`
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
    digitalSignatures: imageSharp(
      fluid: { originalName: { regex: "/signatures-coming-soon.png/" } }
    ) {
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
