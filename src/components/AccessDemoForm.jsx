// @flow

import React from 'react';
import { Trans } from '@lingui/react';

import Modal from './Modal';

export const AccessDemoForm = () => (
  <Modal
    id="demo-access"
    titleClassNames="text-white"
    title={<Trans>Access the demo</Trans>}
    buttonText={<Trans>See the Demo</Trans>}
    buttonClassName="btn-outline-light d-sm-inline btn-xl mx-1"
    hideFooter
  >
    <p className="text-dark my-4">
      <Trans>Please fill out the information below to access the demo</Trans>
    </p>
    <div>Ye</div>
  </Modal>
);
