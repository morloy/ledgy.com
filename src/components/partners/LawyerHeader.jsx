// @flow

import React from 'react';
import { Trans } from '@lingui/react';

import { Title } from '../../layouts/utils';

export const LawyerHeader = ({ i18n }: Props) => (
  <header className="header text-white">
    <Title
      title={i18n.t`Partners`}
      description={i18n.t`Our trusted law firm partners are here to help`}
    />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>
            <Trans>Our trusted law firm partners are here to help</Trans>
          </h1>
        </div>
      </div>
    </div>
  </header>
);
