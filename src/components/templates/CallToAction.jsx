// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/macro';
import { targetBlank } from '../../helpers';

export const CallToAction = (): Node => {
  return (
    <div className="text-center my-6">
      <a
        className="cta-button m-3 btn btn-lg btn-round btn-primary align-self-center"
        href="https://app.ledgy.com/templates"
        {...targetBlank}
      >
        <Trans>Start Now</Trans>
      </a>
    </div>
  );
};
