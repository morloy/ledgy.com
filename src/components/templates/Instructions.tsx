import React, { Node } from 'react';
import { Trans } from '@lingui/macro';
import { CircleBadge } from '../Badge';

const STEPS = [
  [1, <Trans>Sign up for a free account</Trans>],
  [
    2,
    <Trans>
      Our interactive guide will help you understand and select terms for your employee
      participation plan
    </Trans>,
  ],
  [
    3,
    <Trans>
      Send your customized template and term sheet to your lawyer – or to one of our trusted
      partners
    </Trans>,
  ],
  [
    4,
    <Trans>
      As a bonus, you can keep track of your new employee participation plan and grants in Ledgy
    </Trans>,
  ],
];

export const Instructions = (): Node => (
  <>
    <div className="row text-center justify-content-center mt-7 mb-4">
      <h2 className="pb-0">
        <Trans>The fastest way to set up your employee participation plan</Trans>
      </h2>
      <p className="pt-0 w-100">
        <Trans>Made with love and accuracy by Ledgy and our partnering lawyers</Trans>
      </p>
    </div>
    <div className="row row-small mx-auto">
      {STEPS.map(([step, text]) => (
        <div className="media my-4" key={step}>
          <CircleBadge>{step}</CircleBadge>
          <div className="media-body">
            <div>{text}</div>
          </div>
        </div>
      ))}
    </div>
  </>
);
