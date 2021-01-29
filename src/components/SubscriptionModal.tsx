

import React from "react";
import { Trans } from "@lingui/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { useModal } from "./lib";
import { Modal } from "./Modal";
import { Button } from "./Button";
import { SubscriptionForm } from "./forms";

export const SubscriptionModal = ({
  buttonClass = ''
}: {buttonClass?: string;}) => {
  const [isOpen, toggle] = useModal();
  return <>
      <Button onClick={toggle} className={`d-inline px-3 mb-3 ${buttonClass}`} inverted>
        <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
        <Trans>Newsletter</Trans>
      </Button>
      <Modal isOpen={isOpen} close={toggle} title={<Trans>Sign up for the Ledgy newsletter</Trans>} className="d-flex align-items-start mt-3 mt-md-4 mt-lg-7 justify-content-center">
        <div className="p-4">
          <p className="text-dark mt-4 mb-0 mx-1">
            <Trans>
              Receive important feature updates, exclusive webinar invitations, and
              promotions/offers
            </Trans>
          </p>
          <SubscriptionForm toggle={toggle} trackingEvent="newsletter" />
        </div>
      </Modal>
    </>;
};