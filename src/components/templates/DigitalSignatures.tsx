import React from 'react';
import { Trans } from '@lingui/macro';
import Img from 'gatsby-image';
import { CircleBadge } from '../Badge';

const STEPS = [
  { key: 1, text: <Trans>Upload the document</Trans> },
  { key: 2, text: <Trans>Select signatories</Trans> },
  { key: 3, text: <Trans>Send and receive valid signatures in a matter of seconds</Trans> },
];

export const DigitalSignatures = ({ data }: UntypedObject) => (
  <div id="signatories-coming-soon" className="row justify-content-between py-6">
    <div className="col-lg-5 text-center text-md-left d-flex flex-column justify-content-center align-items-center mb-4 mb-lg-0">
      <h4 className="w-100 text-center">
        <Trans>Sign grants online in seconds</Trans>
      </h4>
      <div className="row row-small mx-auto text-left flex-column">
        {STEPS.map(({ key, text }) => (
          <div className="d-flex align-items-start my-3" key={key}>
            <CircleBadge>{key}</CircleBadge>
            <div className="flex-1">
              <div>{text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="col-lg-7 d-flex justify-content-center align-items-center">
      <Img {...data.digitalSignatures} alt="Ledgy signatures, powered by skribble" />
    </div>
  </div>
);
