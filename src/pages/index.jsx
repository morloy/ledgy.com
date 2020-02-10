// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';

import { forbesUrl, economistUrl, wirtschaftswocheUrl, top100Url } from '../helpers';
import { HomePageHeader } from '../components/HomePageHeader';
import { MainSellingProp } from '../components/MainSellingProp';
import { ExternalLogoRow } from '../components/ExternalLogoRow';

const getFeaturedIn = (props: Props) => {
  const { forbes, wirtschaftsWoche, theEconomist, top100 } = props.data;
  return [
    { url: forbesUrl, imgProps: forbes, alt: 'Forbes DACH' },
    { url: wirtschaftswocheUrl, imgProps: wirtschaftsWoche, alt: 'Wirtschafts Woche' },
    { url: economistUrl, imgProps: theEconomist, alt: 'The Economist' },
    { url: top100Url, imgProps: top100, alt: 'TOP 100 Swiss Startup Award' }
  ];
};

const IndexPage = (props: Props) => (
  <main>
    <HomePageHeader {...props} />
    <MainSellingProp
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

    <ExternalLogoRow title={<Trans>As featured in</Trans>} sources={getFeaturedIn(props)} />
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
    cryptofinance: imageSharp(fluid: { originalName: { regex: "/cryptofinance/" } }) {
      fixed(width: 180) {
        ...GatsbyImageSharpFixed
      }
    }
    xeltis: imageSharp(fluid: { originalName: { regex: "/xeltis/" } }) {
      fixed(width: 150) {
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
    allthings: imageSharp(fluid: { originalName: { regex: "/allthings/" } }) {
      fixed(width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
    yamo: imageSharp(fluid: { originalName: { regex: "/yamo/" } }) {
      fixed(width: 70) {
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
  }
`;
