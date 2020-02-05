// @flow

import React from 'react';
import { Link } from 'gatsby';
import { withI18n, Trans } from '@lingui/react';
import {
  faDesktop,
  faShieldAlt,
  faChartPie,
  faChartBar,
  faUser
} from '@fortawesome/free-solid-svg-icons';

import { PrivacyElement, PrivacyRow } from '../components/Privacy';
import Section from '../components/Section';
import { Title, ChevronRight } from '../layouts/utils';

const Header = ({ i18n }: Props) => (
  <header className="header text-white">
    <Title
      title={i18n.t`Privacy`}
      description={i18n.t`Privacy made in Switzerland. Because your equity data is not for everyone.`}
    />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>
            <Trans>Privacy</Trans>
          </h1>
        </div>
      </div>
    </div>
  </header>
);

const IndexPage = ({ i18n, ...props }: Props) => (
  <>
    <Header i18n={i18n} {...props} />

    <main className="main-content">
      <div className="section">
        <Section>
          <p>
            <Trans>
              Privacy made in Switzerland. Because your equity data is not for everyone.
            </Trans>
          </p>
          <p>
            <Trans>
              We comply with the Swiss Federal Act on Data Protection (FADP) and the General Data
              Protection Regulation (GDPR). Read more about{' '}
              <Link href to={`${props.prefix}/legal/gdpr/`}>
                GDPR compliance
              </Link>
              .
            </Trans>
          </p>

          <p>
            <Trans>
              This is a brief summary of the privacy policy. For the details, please read our{' '}
              <Link href to={`${props.prefix}/legal/privacy-policy/`}>
                Privacy Policy
              </Link>
              .
            </Trans>
          </p>
        </Section>

        <Section>
          <h2>
            <Trans>What we may collect and why</Trans>
          </h2>

          <PrivacyRow>
            <PrivacyElement
              icon={faChartPie}
              title={i18n.t`Equity data`}
              body={i18n.t`Stakeholder information, company information, share ledger transaction history, other cap table details. Equity data and all related information is used exclusively for the provision of the services`}
              size="6"
            />
            <PrivacyElement
              icon={faUser}
              title={i18n.t`Identity and contact data`}
              body={i18n.t`Name, email, address and any other details you provide. Provision of our services and management of your subscription. Providing you with updates about our services`}
              size="6"
            />
            <PrivacyElement
              icon={faChartBar}
              title={i18n.t`Usage statistics and usage profile`}
              body={i18n.t`Information about your website and service usage and communication preferences, to personalize and improve our service`}
              size="6"
            />
            <PrivacyElement
              icon={faDesktop}
              title={i18n.t`Technical data`}
              body={i18n.t`Browser type and version, time zone setting, location data, operating system, and platform. Analysis and improvement of our Services and communications and to prevent and fix problems`}
              size="6"
            />
          </PrivacyRow>
        </Section>

        <Section>
          <h2>
            <Trans>How we protect your information</Trans>
          </h2>
          <PrivacyRow>
            <PrivacyElement
              icon={faShieldAlt}
              title={i18n.t`Security`}
              body={
                <Trans>
                  We live up to highest security standards. We improve them continuously.{' '}
                  <Link href to={`${props.prefix}/security/`}>
                    See here what we do
                    <ChevronRight />
                  </Link>
                </Trans>
              }
              size="12"
            />
            <PrivacyElement
              icon={faDesktop}
              title={i18n.t`Contact data, usage statistics, and technical data`}
              body={i18n.t`We limit access and sharing as much as reasonably possible. Some information is shared with third party contractors we use to run and improve our service for you`}
              size="6"
            />
            <PrivacyElement
              icon={faChartPie}
              title={i18n.t`Equity data`}
              body={i18n.t`Nobody has any access to the equity data you provide. Data is stored in Switzerland, a country with the highest privacy standards. Your stakeholders have no access and get no emails until you explicitly invite them.`}
              size="6"
            />
          </PrivacyRow>
        </Section>
      </div>
    </main>
  </>
);

export default withI18n()(IndexPage);
