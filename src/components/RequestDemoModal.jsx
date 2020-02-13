// @flow

import React, { useState } from 'react';
import { Trans } from '@lingui/react';

import { Modal } from './Modal';
import { RequestDemoForm } from './RequestDemoForm';
import { Button } from './Button';
import { useModal } from './lib';

export const RequestDemoModal = () => {
  const [isDemoRequested, setDemoRequested] = useState(false);
  const [isOpen, toggle] = useModal();
  return (
    // <Modal
    //   title={
    //     isDemoRequested ? (
    //       <Trans>Thank you for your interest!</Trans>
    //     ) : (
    //       <Trans>Request a demo</Trans>
    //     )
    //   }
    //   buttonText={<Trans>Get a Demo</Trans>}
    //   buttonProps={{ className: 'd-inline btn-xl mx-1 my-2 my-sm-0', inverted: true }}
    // >
    //   <RequestDemoForm setDemoRequested={setDemoRequested} />
    // </Modal>
    <>
      <Button onClick={toggle} className="d-inline btn-xl mx-1 my-2 my-sm-0" inverted>
        <Trans>Get a Demo</Trans>
      </Button>
      <Modal isOpen={isOpen} close={toggle}>
        <div>Modal ready</div>
      </Modal>
    </>
  );
};
