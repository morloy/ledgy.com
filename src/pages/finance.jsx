// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';

import { Title } from '../layouts/utils';
import { PageHeader } from '../components/PageHeader';
import { Feature } from '../components/Feature';

import { getFinanceFeatures } from '../helpers';

export default withI18n()(({ i18n, data }: Props) => {
  return (
    <div>
      <Title
        title={i18n.t`Features for finance`}
        description={i18n.t`Discover how Ledgy can take care of your companies' financial needs`}
      />

      <PageHeader
        title={<Trans>Features for finance</Trans>}
        subtitle={
          <Trans>
            A scalable all-in-one solution for your company’s employee participation plan, cap
            table, modeling, investor relations, due diligence, and document signing automation.
          </Trans>
        }
      />

      {getFinanceFeatures(data).map(({ title, description, imgProps, imgFirst = false }) => (
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
    kpisAndReports: imageSharp(fluid: { originalName: { regex: "/kpis-reports.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    uploadDocument: imageSharp(fluid: { originalName: { regex: "/upload-document.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    exitModeling: imageSharp(fluid: { originalName: { regex: "/exit-modeling.png/" } }) {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    createCaptable: imageSharp(fluid: { originalName: { regex: "/create-captable.png/" } }) {
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
