// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';

import { Title } from '../layouts/utils';
import { DefaultHeader } from '../components/Header';
import { Feature } from '../components/Feature';

import { getHumanResourcesFeatures } from '../helpers';

export default withI18n()(({ i18n, data }: Props) => {
  return (
    <div>
      <Title
        title={i18n.t`Features for HR`}
        description={i18n.t`Discover how Ledgy can easily integrate in your HR department`}
      />

      <DefaultHeader
        title={<Trans>Features for HR</Trans>}
        subtitle={
          <Trans>
            Save time with document templating and signing flows. Enjoy streamlined equity
            processes, allowing you to batch create any number of employee grants with just a few
            clicks. Employees with love their personal dashboard with live vesting visualization,
            making their upside in your company’s success transparent
          </Trans>
        }
      />

      {getHumanResourcesFeatures(data).map(({ title, description, imgProps, imgFirst = false }) => (
        <Feature title={title} description={description} imgProps={imgProps} imgFirst={imgFirst} />
      ))}
    </div>
  );
});

export const PageQuery = graphql`
  query {
    signingAutomation: imageSharp(fluid: { originalName: { regex: "/signing-automation.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    vestingChart: imageSharp(fluid: { originalName: { regex: "/vesting-chart.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    employeeDashboard: imageSharp(fluid: { originalName: { regex: "/employee-dashboard.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    uploadDocument: imageSharp(fluid: { originalName: { regex: "/upload-document.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    holdingConfirmation: imageSharp(
      fluid: { originalName: { regex: "/holding-confirmation.png/" } }
    ) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
