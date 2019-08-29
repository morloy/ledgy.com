// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';

import { Title, Header, targetBlank } from '../layouts/utils';

const SocialMediaContest = ({ i18n }: Props) => (
  <>
    <Title
      title={i18n.t`Follow us`}
      description={i18n.t`Follow us on social media for a chance to get awesome discounts on Ledgy Premium`}
    />
    <Header text={<Trans>Social media contest</Trans>} />

    <main className="main-content">
      <div className="section">
        <div className="container">
          <div className="bg-gray h-full p-5 imprint">
            <div className="d-flex flex-column align-items-center text-center w-md-75">
              <p>
                Quarterly, one user among all of our Twitter followers is randomly selected and
                given a 50% discount code to enjoy Ledgy Premium. The discount can be applied at any
                time and will have a validity of 12 months from the moment it’s introduced. The
                winner is announced both public and personally on Twitter. Shall the winner refuse
                the discount, a new raffle will be done to select a new winner.
              </p>
              <a
                className="btn btn-round btn-outline-primary btn-xl mr-md-1 mb-3 mb-md-0"
                href="https://twitter.com/Ledgy"
                {...targetBlank}
              >
                Go to Ledgy’s Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default withI18n()(SocialMediaContest);
