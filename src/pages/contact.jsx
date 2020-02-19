// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';

import { Title } from '../layouts/utils';
import { DefaultHeader } from '../components/Header';

const IndexPage = (props: Object) => (
  <div>
    <Title
      title={props.i18n.t`Contact`}
      description={props.i18n
        .t`Contact the Ledgy team by phone, email, or mailing address to learn more about cap table management, equity plans, and investor relations`}
    />
    <DefaultHeader
      title={<Trans>Let’s get in touch</Trans>}
      subtitle={<Trans>Here are the ways you can contact us with any questions you have</Trans>}
    />

    <div className="container">
      <div className="bg-gray h-full p-5 imprint">
        <div className="row">
          <div className="col-md-6">
            <h6>Ledgy AG</h6>
            <p>
              Forchstrasse 60
              <br />
              8008 Zürich
              <br />
              <Trans>Switzerland</Trans>
            </p>
            <h6>
              <Trans>VAT number</Trans>
            </h6>
            <p>CHE‑261.454.963 MWST</p>
          </div>
          <div className="col-md-6">
            <h6>
              <Trans>Contact</Trans>
            </h6>
            <p>
              <a href="mailto:contact@ledgy.com">contact@ledgy.com</a>
              <br />
              +41 (0) 44 585 21 23
            </p>
            <h6>
              <Trans>Managing directors</Trans>
            </h6>
            <p>
              Yoko Spirig
              <br />
              Ben-Elias Brandt
              <br />
              Timo Horstschäfer
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withI18n()(IndexPage);
