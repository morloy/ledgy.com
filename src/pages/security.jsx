// @flow

import React from 'react';
import { Link } from 'gatsby';
import { withI18n, Trans } from '@lingui/react';
import {
  faDesktop,
  faShieldAlt,
  faDatabase,
  faUserSecret,
  faExchangeAlt,
  faUserPlus,
  faLock,
  faKey,
  faGlobeEurope,
  faBug
} from '@fortawesome/free-solid-svg-icons';

import { PrivacyElement } from '../components/Privacy';
import { Title } from '../layouts/utils';
import { targetBlank } from '../helpers';

const Header = ({ i18n }: Props) => (
  <header className="header text-white">
    <Title
      title={i18n.t`Security`}
      description={i18n.t`At Ledgy we take your security seriously. Strong passwords, robust encryption, two-factor authentication, and permanent code reviews are among our high safety standards. Find out more about why you can have peace-of-mind while managing your cap table with Ledgy.`}
    />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>
            <Trans>Security</Trans>
          </h1>
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
                We understand how sensitive equity information is for any business. That’s why your
                privacy and your data’s security is crucial to us. Here is what we do to protect
                your data.
              </Trans>
            </p>

            <div className="row gap-y my-5">
              <PrivacyElement
                icon={faGlobeEurope}
                title={i18n.t`Swiss data protection`}
                body={<Trans>All data is stored in a secure Swiss data center</Trans>}
                size="6"
              />

              <PrivacyElement
                icon={faKey}
                title={i18n.t`Strong passwords`}
                body={
                  <Trans>
                    Users have to set a{' '}
                    <a
                      {...targetBlank}
                      href="https://blogs.dropbox.com/tech/2012/04/zxcvbn-realistic-password-strength-estimation/"
                    >
                      secure password
                    </a>
                  </Trans>
                }
                size="6"
              />

              <PrivacyElement
                icon={faLock}
                title={i18n.t`Password encryption`}
                body={
                  <Trans>
                    Stored encrypted with the battle-tested{' '}
                    <a {...targetBlank} href="https://codahale.com/how-to-safely-store-a-password/">
                      bcrypt algorithm
                    </a>{' '}
                    at 13 rounds
                  </Trans>
                }
                size="6"
              />

              <PrivacyElement
                icon={faShieldAlt}
                title={i18n.t`Two-factor authentication`}
                body={
                  <Trans>
                    For even better protection of accounts. And our implementation is{' '}
                    <a
                      {...targetBlank}
                      href="https://blog.meteor.com/tutorial-two-factor-authentication-with-meteor-and-totp-21d4a2f9ee51"
                    >
                      open source
                    </a>
                    !
                  </Trans>
                }
                size="6"
              />

              <PrivacyElement
                icon={faUserPlus}
                title={i18n.t`Peer-reviewed code`}
                body={i18n.t`The code is always reviewed by at least one other engineer`}
                size="6"
              />

              <PrivacyElement
                icon={faExchangeAlt}
                title={i18n.t`Server call rate limit`}
                body={i18n.t`The frequency of server calls is limited to prevent brute-force attacks`}
                size="6"
              />

              <PrivacyElement
                icon={faUserSecret}
                title={i18n.t`Encrypted connection`}
                body={
                  <Trans>
                    The site is accessible only through HTTPS (
                    <a
                      {...targetBlank}
                      href="https://www.ssllabs.com/ssltest/analyze?d=app.ledgy.com"
                    >
                      A+ rating
                    </a>
                    )
                  </Trans>
                }
                size="6"
              />

              <PrivacyElement
                icon={faDesktop}
                title={i18n.t`Content-Security-Policy`}
                body={
                  <Trans>
                    HTTP headers prevent cross-site scripting and code injection (
                    <a
                      {...targetBlank}
                      href="https://observatory.mozilla.org/analyze.html?host=app.ledgy.com"
                    >
                      A+ rating
                    </a>
                    )
                  </Trans>
                }
                size="6"
              />

              <PrivacyElement
                icon={faDatabase}
                title={i18n.t`Backups`}
                body={i18n.t`Regular encrypted backups ensure nothing is ever lost`}
                size="6"
              />

              <PrivacyElement
                icon={faBug}
                title={i18n.t`Bug bounty`}
                body={
                  <Trans>
                    We operate a{' '}
                    <a {...targetBlank} href="https://www.federacy.com/ledgy">
                      bug bounty
                    </a>{' '}
                    program on Federacy. Write us a message for an invitation.
                  </Trans>
                }
                size="6"
              />
            </div>

            <p>
              <Trans>
                If you have any questions or discover anything suspicious, please{' '}
                <Link href to={`${props.prefix}/contact/`}>
                  get in touch
                </Link>
                .
              </Trans>
            </p>
          </header>
        </div>
      </div>
    </main>
  </div>
);

export default withI18n()(IndexPage);
