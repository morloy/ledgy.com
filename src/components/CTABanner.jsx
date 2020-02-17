// @flow

import React, { type Node } from 'react';

import sample from 'lodash/sample';
import { Trans } from '@lingui/react';
import { callToActionExperiments } from '../layouts/utils';
import { isBrowser, appUrl, track } from '../helpers';

import { Button } from './Button';

const Banner = (props: { title: Node, url: string, trackingName: Node, CTAText: Node }) => {
  const { title, url, trackingName, CTAText } = props;
  return (
    <div className="container p-4 p-lg-7 my-7">
      <div className="row m-0 w-100 flex-column justify-content-center align-items-center">
        <h3 className="mb-4 text-center font-weight-bold">{title}</h3>
        <Button
          cta
          href={url}
          onClick={() => {
            if (window.ga) window.ga('set', 'dimension2', { trackingName });
            track('click.signup');
          }}
          className="text-lg px-4 py-2"
        >
          {CTAText}
        </Button>
      </div>
    </div>
  );
};

export const CTABanner = ({ location }: LayoutProps) => {
  if (location.pathname.includes('/employee-participation-plan-templates/')) {
    return (
      <Banner
        title={<Trans>Free employee participation plan templates</Trans>}
        url="https://app.ledgy.com/templates"
        trackingName="clickPsopFooter"
        CTAText={<Trans>Get now</Trans>}
      />
    );
  }

  const experiment = isBrowser ? sample(callToActionExperiments) : callToActionExperiments[0];
  return (
    <Banner
      title={experiment.title}
      url={`${appUrl}/signup`}
      trackingName={experiment.name}
      CTAText={<Trans>Get started</Trans>}
    />
  );
};
