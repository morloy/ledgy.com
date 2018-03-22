// @flow

import * as React from 'react';
import Link from 'gatsby-link';
import { withI18n, Trans } from '@lingui/react';

import { Title, PrivacyElement } from '../layouts/utils';

const Header = ({ i18n }: Props) => (
  <header className="header text-white bg-ledgy">
    <Title
      title={i18n.t`Security`}
      description={i18n.t`At Ledgy we take your security seriously. Strong passwords, solid encryption, two-factor authentication, and permanent code reviews are among our high safety standards. Find out more about why you can have peace-of-mind while managing your cap table with Ledgy.`}
    />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1><Trans>Security</Trans></h1>
        </div>
      </div>
    </div>
  </header>
);

const IndexPage = ({ i18n, ...props }: Object) => (
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
                Here is what we do to protect your data.
              </Trans>
            </p>

            <div className="row gap-y my-5">

              <PrivacyElement
                icon="fa fa-key"
                title={i18n.t`Strong passwords`}
                body={
                  <Trans>
                    Users have to set a <a target="_blank" rel="noopener noreferrer" href="https://blogs.dropbox.com/tech/2012/04/zxcvbn-realistic-password-strength-estimation/">very strong password</a>
                  </Trans>
                }
              />

              <PrivacyElement
                icon="fa fa-lock"
                title={i18n.t`Password encryption`}
                body={
                  <Trans>
                    Stored encrypted with the battle-tested <a target="_blank" rel="noopener noreferrer" href="https://codahale.com/how-to-safely-store-a-password/">bcrypt algorithm</a>
                  </Trans>
                }
              />

              <PrivacyElement
                icon="fa fa-shield"
                title={i18n.t`Two-factor authentication`}
                body={i18n.t`For an even better protection of accounts`}
              />

              <PrivacyElement
                icon="fa fa-exchange"
                title={i18n.t`Peer-reviewed code`}
                body={i18n.t`The code is always reviewed by at least one other engineer`}
              />

              <PrivacyElement
                icon="fa fa-user-plus"
                title={i18n.t`Server call rate limit`}
                body={i18n.t`The frequency of server calls is limited to prevent brute-force attacks`}
              />

              <PrivacyElement
                icon="fa fa-user-secret"
                title={i18n.t`Encrypted connection`}
                body={
                  <Trans>
                    The site is accessible only through HTTPS (<a target="_blank" rel="noopener noreferrer" href="https://www.ssllabs.com/ssltest/analyze?d=app.ledgy.com">A+ rating</a>)
                  </Trans>
                }
              />

              <PrivacyElement
                icon="fa fa-desktop"
                title={i18n.t`Content-Security-Policy`}
                body={
                  <Trans>
                    HTTP headers prevent cross-site scripting and code injection (<a target="_blank" rel="noopener noreferrer" href="https://observatory.mozilla.org/analyze.html?host=app.ledgy.com">A+ rating</a>)
                  </Trans>
                }
              />

              <PrivacyElement
                icon="fa fa-database"
                title={i18n.t`Backups`}
                body={i18n.t`Daily backups ensure nothing is ever lost`}
              />

            </div>

            <p>
              <Trans>
                If you have any questions or discover anything suspicious, please <Link href to={`${props.prefix}/contact/`}>get in touch with us</Link>.
              </Trans>
            </p>

          </header>

        </div>
      </div>
    </main>
  </div>
);

export default withI18n()(IndexPage);
