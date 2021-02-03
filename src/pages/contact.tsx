import React from 'react';
import { Trans, t } from '@lingui/macro';

import { Title } from '../layouts/utils';
import { PageHeader } from '../components';
import { helpUrl, targetBlank } from '../helpers';

const Contact = () => (
  <div>
    <Title
      title={t`Contact`}
      description={t`Contact the Ledgy team by phone, email, or mailing address to learn more about cap table management, equity plans, and investor relations`}
    />
    <PageHeader
      title={t`Let’s get in touch`}
      subtitle={t`Here are the ways you can contact us with any questions you have`}
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
            <div className="d-flex flex-column flex-lg-row">
              <div className="col-6 p-0 mb-3 text-nowrap">
                <div className="mb-4">
                  <h6>
                    <Trans>Support Questions</Trans>
                  </h6>
                  <a href={helpUrl} {...targetBlank} className="kb__text-link">
                    <Trans>Help Center</Trans>
                  </a>
                  <br />
                  <a href="mailto:support@ledgy.com">support@ledgy.com</a>
                </div>
                <div className="mb-4">
                  <h6>
                    <Trans>Sales Inquiries</Trans>
                  </h6>
                  <a href="mailto:sales@ledgy.com">sales@ledgy.com</a>
                </div>
                <div>
                  <h6>
                    <Trans>General Inquiries</Trans>
                  </h6>
                  <a href="mailto:contact@ledgy.com">contact@ledgy.com</a>
                </div>
              </div>
              <div className="col-6 p-0 text-nowrap">
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
    </div>
  </div>
);

export default Contact;
