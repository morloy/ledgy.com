// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';

import { Title } from '../layouts/utils';
import {
  LawyerCTABanner,
  SwissPartners,
  CollaborationBanner,
  UniqueSellingPropositions
} from '../components/partners';

import { PageHeader } from '../components/PageHeader';

const PartnersPage = ({ ...props }: Props) => (
  <>
    <Title
      title={props.i18n.t`Partners`}
      description={props.i18n.t`Our trusted law firm partners are here to help`}
    />
    <PageHeader title={<Trans>Our trusted law firm partners are here to help</Trans>} />

    <div className="py-0">
      <SwissPartners {...props} />
      <CollaborationBanner />
      <UniqueSellingPropositions {...props} />
    </div>
    <LawyerCTABanner />
  </>
);

export default withI18n()(PartnersPage);

export const pageQuery = graphql`
  query {
    kellerhalsCarrard: imageSharp(fluid: { originalName: { regex: "/kellerhals-carrard.png/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    smartup: imageSharp(fluid: { originalName: { regex: "/smartuplaw.png/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    lexr: imageSharp(fluid: { originalName: { regex: "/lexr.png/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    wengerVieli: imageSharp(fluid: { originalName: { regex: "/wenger-vieli.png/" } }) {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
