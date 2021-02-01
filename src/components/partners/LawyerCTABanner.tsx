import React from 'react';
import { Trans } from '@lingui/macro';

import { targetBlank } from '../../helpers';
import { FullWidthBanner } from '../FullWidthBanner';

export const LawyerCTABanner = () => (
  <FullWidthBanner>
    <div className="container py-4">
      <div className="row m-0 w-100 justify-content-center align-items-center">
        <h5 className="m-3 text-center">Are you a lawyer wanting to partner with us?</h5>
        <a
          className="cta-button m-3 btn btn-lg btn-round btn-primary align-self-center"
          href="mailto:contact@ledgy.com?subject=Law Firm Collaboration"
          {...targetBlank}
        >
          <Trans>Apply</Trans>
        </a>
      </div>
    </div>
  </FullWidthBanner>
);
