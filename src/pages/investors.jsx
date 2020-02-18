// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';

import { Title } from '../layouts/utils';
import { DefaultHeader } from '../components/Header';
import { Feature } from '../components/Feature';

import { getInvestorFeatures } from '../helpers';

export default withI18n()(({ i18n, data }: Props) => {
  return (
    <div>
      <Title
        title={i18n.t`Features for investors`}
        description={i18n.t`Discover how to manage your investor portfolio with Ledgy`}
      />

      <DefaultHeader
        title={<Trans>Features for investors</Trans>}
        subtitle={
          <Trans>
            Enjoy flexible reporting and portfolio management solutions for business angels,
            professional investors and funds. Give your portfolio startups the freedom to streamline
            their equity processes as they scale with a suite of dedicated startup features.
          </Trans>
        }
      />

      {getInvestorFeatures(data).map(({ title, description, imgProps, imgFirst = false }) => (
        <Feature title={title} description={description} imgProps={imgProps} imgFirst={imgFirst} />
      ))}
    </div>
  );
});

export const PageQuery = graphql`
  query {
    multiplePortfolios: imageSharp(
      fluid: { originalName: { regex: "/multiple-portfolios.png/" } }
    ) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    signatureFlow: imageSharp(fluid: { originalName: { regex: "/signature-flow.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    kpisAndReports: imageSharp(fluid: { originalName: { regex: "/kpis-reports.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    scalable: imageSharp(fluid: { originalName: { regex: "/scalable.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
