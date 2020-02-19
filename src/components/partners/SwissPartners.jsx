// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import { PartnerCard } from './PartnerCard';

export const SwissPartners = (props: Props) => (
  <div className="container pb-4">
    <h5 className="text-center pb-6">
      <Trans>Swiss Law Partners</Trans>
    </h5>
    <div className="container">
      <div className="row">
        <PartnerCard
          logo={props.data.kellerhalsCarrard}
          email="startup-desk@kellerhals-carrard.ch"
          website="https://kellerhals-carrard.ch"
        />
        <PartnerCard
          logo={props.data.smartup}
          email="walder@smartuplaw.ch"
          website="https://smartuplaw.ch"
        />
        <PartnerCard logo={props.data.lexr} email="contact@lexr.ch" website="https://lexr.ch" />
        <PartnerCard
          logo={props.data.wengerVieli}
          email="m.baier@wengervieli.ch"
          website="https://www.wengervieli.ch/en-us/home"
        />
      </div>
    </div>
  </div>
);
