// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import Img from 'gatsby-image';
import { CircleBadge } from '../Badge';

const STEPS = [
  [1, <Trans>Upload the document</Trans>],
  [2, <Trans>Select signatories</Trans>],
  [3, <Trans>Send and receive valid signatures in a matter of seconds</Trans>]
];

export const SignaturesComingSoon = ({ data }: Object): Node => {
  return (
    <div className="row justify-content-between py-6">
      <div className="col-lg-5 text-center text-md-left d-flex flex-column justify-content-center align-items-center mb-4 mb-lg-0">
        <h6 className="w-100">
          <Trans>COMING SOON:</Trans>
        </h6>
        <h6 className="w-100">
          <Trans>Sign grants online in seconds</Trans>
        </h6>
        <div className="row row-small mx-auto text-left flex-column">
          {STEPS.map(([step, text]) => (
            <div className="media my-4" key={step}>
              <CircleBadge>{step}</CircleBadge>
              <div className="media-body">
                <div>{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-lg-7 d-flex flex-column justify-content-center align-items-center mb-4 mb-lg-0 mx-auto">
        <div className="d-flex align-items-center justify-content-center my-auto w-100">
          <Img {...data.signatures} alt="Ledgy signatures, powered by skribble" />
        </div>
      </div>
    </div>
  );
};
