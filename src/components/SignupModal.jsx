// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { useModal } from './lib';
import { Modal } from './Modal';
import { Button } from './Button';
import { SignupForm } from './SignupForm';

export const SignupModal = ({ buttonClass = '', i18n }: { buttonClass?: string, i18n: I18n }) => {
  const [isOpen, toggle] = useModal();
  return (
    <>
      <Button onClick={toggle} className={`d-inline w-100 px-1 mb-3 ${buttonClass}`} inverted>
        <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
        <Trans>Newsletter</Trans>
      </Button>
      <Modal isOpen={isOpen} close={toggle} title={<Trans>Sign up for the Ledgy newsletter</Trans>}>
        <p className="text-dark mt-4 mb-0 mx-1">
          <Trans>
            Receive important feature updates, exclusive webinar invitations, and promotions/offers
          </Trans>
        </p>
        <SignupForm toggle={toggle} trackingEvent="newsletter" i18n={i18n} />
      </Modal>
    </>
  );
};
