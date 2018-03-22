// @flow

import * as React from 'react';
import Link from 'gatsby-link';
import { withI18n, Trans } from '@lingui/react';

import { Title, PrivacyElement } from '../layouts/utils';

const Header = ({ i18n }: Props) => (
  <header className="header text-white bg-ledgy">
    <Title title={i18n.t`Privacy`} />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1><Trans>Privacy</Trans></h1>
        </div>
      </div>
    </div>
  </header>
);

const IndexPage = ({ i18n, ...props }: Props) => (
  <div>
    <Header i18n={i18n} {...props} />

    <main className="main-content">

      <div className="section">
        <div className="container">

          <header className="section-header text-left">
            <p>
              <Trans>
                We understand how sensitive cap table information is for any business.
                That’s why your privacy and your data’s security is extremely important to us.
                And we also know how little anyone likes to read long and difficult to
                understand privacy policies. So we give you a human-readable overview up-front.
              </Trans>
            </p>


            <h2><Trans>What we collect</Trans></h2>

            <div className="row gap-y my-5">
              <PrivacyElement
                icon="fa fa-sign-in"
                title={i18n.t`Your login information`}
                body={i18n.t`Name, email, encrypted password`}
              />

              <PrivacyElement
                icon="fa fa-users"
                title={i18n.t`Company information`}
                body={i18n.t`Names, addresses, and stakes of each shareholder`}
              />

              <PrivacyElement
                icon="fa fa-bar-chart"
                title={i18n.t`General activity`}
                body={i18n.t`Name, time, and which action you perform when using the app to understand and improve our service`}
              />

              <PrivacyElement
                icon="fa fa-desktop "
                title={i18n.t`Device and browser specs`}
                body={i18n.t`In case a crash happens, which helps us to fix it as fast as possible`}
              />
            </div>


            <h2><Trans>Who we share it with</Trans></h2>

            <div className="row gap-y my-5">

              <PrivacyElement
                icon="fa fa-user text-success"
                title={
                  <span>
                    <i className="fa fa-check mr-2 text-success" />
                    <Trans>Your shareholders</Trans>
                  </span>
                }
                body={i18n.t`In case you add them with an email address, shareholders can see their own stake in your company. No further details.`}
              />

              <PrivacyElement
                icon="fa fa-plug text-success"
                title={
                  <span>
                    <i className="fa fa-check mr-2 text-success" />
                    <Trans>Third-party integrations</Trans>
                  </span>
                }
                body={i18n.t`Which we use to run and improve our service for you.
                  It contains no cap table or other sensitive data.`}
              />

              <PrivacyElement
                icon="fa fa-sitemap text-muted"
                title={
                  <span>
                    <i className="fa fa-times mr-2 text-muted" />
                    <Trans>Ad networks</Trans>
                  </span>
                }
                body={i18n.t`We don’t sell any data for ads`}
              />

              <PrivacyElement
                icon="fa fa-shopping-cart text-muted"
                title={
                  <span>
                    <i className="fa fa-times mr-2 text-muted" />
                    <Trans>Data resellers</Trans>
                  </span>
                }
                body={i18n.t`We don’t sell any data in general`}
              />

            </div>


            <h2><Trans>How we treat your data</Trans></h2>

            <div className="row gap-y my-5">

              <PrivacyElement
                icon="fa fa-cloud"
                title={i18n.t`Stored in the EU`}
                body={
                  <Trans>
                    Your cap table data is stored at
                    an <a target="_blank" rel="noopener noreferrer" href="https://www.clever-cloud.com/">independent provider</a> in Paris, France
                  </Trans>
                }
              />

              <PrivacyElement
                icon="fa fa-database"
                title={i18n.t`Backups`}
                body={i18n.t`Regular backups ensure nothing is ever lost`}
              />

              <PrivacyElement
                icon="fa fa-lock"
                title={i18n.t`Security`}
                body={
                  <Trans>
                    Highest security standards give you peace of
                    mind. <Link href to={`${props.prefix}/security/`}>Read more  <i className="ti-angle-right fs-10 ml-1" /></Link>
                  </Trans>
                }
              />

              <PrivacyElement
                icon="fa fa-question-circle"
                title={i18n.t`Want to delete your data?`}
                body={
                  <Trans>
                    Please <Link href to={`${props.prefix}/contact/`}>get in touch with us</Link>
                  </Trans>
                }
              />

            </div>

          </header>

        </div>
      </div>
    </main>
  </div>
);

export default withI18n()(IndexPage);
