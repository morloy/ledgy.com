// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';

import { Title } from '../layouts/utils';
import { PageHeader } from '../components/PageHeader';
import { Feature } from '../components/Feature';

import { getDataProtectionText } from '../helpers';

export default withI18n()(({ i18n, data }: Props) => {
  return (
    <div>
      <Title
        title={i18n.t`Data Protection`}
        description={i18n.t`Data security and privacy are a top priority at Ledgy`}
      />

      <PageHeader
        title={<Trans>Best-in-class data protection</Trans>}
        subtitle={
          <Trans>
            Your data’s security and privacy is Ledgy’s top priority. Our technical and
            organizational measures, compliance, and privacy-focused features let you control who
            receives what information.
          </Trans>
        }
      />

      {getDataProtectionText(data).map(({ title, description, imgProps, imgFirst = false }) => (
        <Feature title={title} description={description} imgProps={imgProps} imgFirst={imgFirst} />
      ))}
    </div>
  );
});

export const PageQuery = graphql`
  query {
    dataProtection: imageSharp(fluid: { originalName: { regex: "/data-protection.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    swissData: imageSharp(fluid: { originalName: { regex: "/swiss-data.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    gdprCompliance: imageSharp(fluid: { originalName: { regex: "/gdpr-compliance.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    privacyFirst: imageSharp(fluid: { originalName: { regex: "/privacy-first.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
