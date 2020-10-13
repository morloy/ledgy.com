// @flow

import React, { type Node } from 'react';

import sample from 'lodash/sample';
import { Trans } from '@lingui/react';
import { callToActionExperiments } from '../layouts/utils';
import { isBrowser } from '../helpers';
import { RequestDemoButton } from './RequestDemoButton';

const Banner = ({
  title,
  prefix,
  location,
}: {|
  title: Node,
  prefix: string,
  location?: LocationProps,
|}) => (
  <div className="container p-4 p-lg-7 my-7">
    <div className="row m-0 w-100 flex-column justify-content-center align-items-center">
      <h3 className="mb-4 text-center font-weight-bold">{title}</h3>
      <RequestDemoButton
        buttonClassName="btn-red text-lg px-4 py-2"
        prefix={prefix}
        location={location}
      />
    </div>
  </div>
);

export const CTABanner = ({ location, prefix }: LayoutProps) => {
  if (location.pathname.includes('/employee-participation-plan-templates/')) {
    return (
      <Banner title={<Trans>Free employee participation plan templates</Trans>} prefix={prefix} />
    );
  }

  const experiment = isBrowser ? sample(callToActionExperiments) : callToActionExperiments[0];
  return <Banner title={experiment.title} prefix={prefix} location={location} />;
};
