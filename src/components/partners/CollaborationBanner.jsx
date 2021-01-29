// @flow

import React from 'react';
import { Trans } from "@lingui/macro";

import { FullWidthBanner } from '../FullWidthBanner';

export const CollaborationBanner = () => (
  <FullWidthBanner>
    <div className="container">
      <div className="col col-8 col-lg-6 offset-2 offset-lg-3">
        <p className="text-center">
          <Trans>
            Startup law is a unique maze, and getting the advice you need is <b>crucial</b> to avoid
            costly legal mistakes.
          </Trans>
        </p>
        <p className="text-center">
          <Trans>
            Our partners will collaborate with you on Ledgy and have special offers for Ledgy
            clients.
          </Trans>
        </p>
      </div>
    </div>
  </FullWidthBanner>
);
