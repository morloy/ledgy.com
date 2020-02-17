// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';

import { HomePageHeader } from '../components/HomePageHeader';
import { MainProblemLayout } from '../components/MainProblemLayout';
import { ExternalLogoRow } from '../components/ExternalLogoRow';
import { SellingProp } from '../components/SellingProp';

import {
  getTopLedgyClients,
  getFeaturedIn,
  getFirstTwoSellingProps,
  getSecondTwoSellingProps
} from '../helpers';

const IndexPage = (props: Props) => (
  <main>
    <HomePageHeader {...props} />
    <MainProblemLayout
      title={
        <Trans>
          <u>Manual</u> Excel-based processes just <u>don’t work</u> for a growing company
        </Trans>
      }
      subtitle={
        <Trans>
          When companies scale, their equity plan management becomes a full-time job, cap tables
          start being very error-prone, which increases legal and accounting costs
          disproportionally. Signing processes and creating specific data reports start slowing
          finance and HR down a lot.
        </Trans>
      }
      imgProps={{ ...props.data.excel }}
    />

    <ExternalLogoRow
      title={<Trans>The CEOs and CFOs of hundreds of companies already trust Ledgy</Trans>}
      sources={getTopLedgyClients(props)}
    />

    {getFirstTwoSellingProps(props.data).map(
      ({ title, subtitle, imgProps, link, imgFirst = false }) => (
        <SellingProp
          title={title}
          subtitle={subtitle}
          imgProps={{ ...imgProps }}
          link={link}
          imgFirst={imgFirst}
          key={link.to}
        />
      )
    )}

    <ExternalLogoRow title={<Trans>As featured in</Trans>} sources={getFeaturedIn(props)} />

    {getSecondTwoSellingProps(props.data).map(
      ({ title, subtitle, imgProps, link, imgFirst = false }) => (
        <SellingProp
          title={title}
          subtitle={subtitle}
          imgProps={{ ...imgProps }}
          link={link}
          imgFirst={imgFirst}
          key={link.to}
        />
      )
    )}
  </main>
);

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...FeaturesFragment

    tablet: imageSharp(fluid: { originalName: { regex: "/tablet-dashboard.png/" } }) {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    viu: imageSharp(fluid: { originalName: { regex: "/viu/" } }) {
      fixed(width: 120) {
        ...GatsbyImageSharpFixed
      }
    }
    sherpany: imageSharp(fluid: { originalName: { regex: "/sherpany/" } }) {
      fixed(width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
    frontify: imageSharp(fluid: { originalName: { regex: "/frontify/" } }) {
      fixed(width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
    nakd: imageSharp(fluid: { originalName: { regex: "/nakd/" } }) {
      fixed(width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
    forbes: imageSharp(fluid: { originalName: { regex: "/forbes/" } }) {
      fixed(width: 130) {
        ...GatsbyImageSharpFixed
      }
    }
    theEconomist: imageSharp(fluid: { originalName: { regex: "/the-economist/" } }) {
      fixed(width: 140) {
        ...GatsbyImageSharpFixed
      }
    }
    wirtschaftsWoche: imageSharp(fluid: { originalName: { regex: "/wirtschafts-woche/" } }) {
      fixed(width: 130) {
        ...GatsbyImageSharpFixed
      }
    }
    top100: imageSharp(fluid: { originalName: { regex: "/top100/" } }) {
      fixed(width: 140) {
        ...GatsbyImageSharpFixed
      }
    }
    excel: imageSharp(fluid: { originalName: { regex: "/excel-illustration/" } }) {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    scalable: imageSharp(fluid: { originalName: { regex: "/scalable/" } }) {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    talent: imageSharp(fluid: { originalName: { regex: "/talent/" } }) {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    security: imageSharp(fluid: { originalName: { regex: "/security/" } }) {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
    trust: imageSharp(fluid: { originalName: { regex: "/trust/" } }) {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`;
