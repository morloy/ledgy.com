// @flow

import React from 'react';
import { Trans } from '@lingui/react';

import { forbesUrl, economistUrl, wirtschaftswocheUrl, top100Url } from '../../helpers';

export const getTopLedgyClients = (props: Props) => {
  const { viu, frontify, nakd, sherpany } = props.data;
  return [
    { imgProps: viu, alt: 'VIU' },
    { imgProps: frontify, alt: 'Frontify' },
    { imgProps: nakd, alt: 'NAKD' },
    { imgProps: sherpany, alt: 'Sherpany' }
  ];
};

export const getFeaturedIn = (props: Props) => {
  const { forbes, wirtschaftsWoche, theEconomist, top100 } = props.data;
  return [
    { url: forbesUrl, imgProps: forbes, alt: 'Forbes DACH' },
    { url: wirtschaftswocheUrl, imgProps: wirtschaftsWoche, alt: 'Wirtschafts Woche' },
    { url: economistUrl, imgProps: theEconomist, alt: 'The Economist' },
    { url: top100Url, imgProps: top100, alt: 'TOP 100 Swiss Startup Award' }
  ];
};

export const getFirstTwoSellingProps = (data: Object) => [
  {
    title: (
      <Trans>
        A <u>scalable</u> infrastructure for your equity
      </Trans>
    ),
    subtitle: (
      <Trans>
        Ledgy puts your granting, exercising, termination, cap table and reporting tasks on
        autopilot with document signing automation, tracking of any vesting schedule, notifications,
        reporting templates and flexible data exports.
      </Trans>
    ),
    imgProps: { ...data.scalable },
    link: { to: '', text: <Trans>How Frontify uses Ledgy to scale their company</Trans> },
    imgFirst: true
  },
  {
    title: (
      <Trans>
        Attract and retain key <u>talent</u> for your company
      </Trans>
    ),
    subtitle: (
      <Trans>
        Your employee participation plan is key to creating ownership and comittment in your
        company. More transparency and real-time information will motivate your employees to go the
        extra mile.
      </Trans>
    ),
    imgProps: { ...data.talent },
    link: { to: '', text: <Trans>How WeFox uses Ledgy to retain talent</Trans> }
  }
];

export const getSecondTwoSellingProps = (data: Object) => [
  {
    title: (
      <Trans>
        Privacy and security <u>first</u>
      </Trans>
    ),
    subtitle: (
      <Trans>
        With Switzerland’s best-in-class privacy regulation and center of the worlds leading
        financial institutions, it is the ideal place for even the most sensitive data. Ledgy
        complies with GDPR and makes sure, that you’re in control of your data and who can see what.
        No compromise.
      </Trans>
    ),
    imgProps: { ...data.security },
    link: { to: '', text: <Trans>Read more about data protection</Trans> },
    imgFirst: true
  },
  {
    title: (
      <Trans>
        Keep the <u>trust</u> of your investors
      </Trans>
    ),
    subtitle: (
      <Trans>
        You want to nurture the relationship with your investors, keep their trust and make sure
        they support your journey. Ledgy makes it easy to keep a close line with them and impress
        them with timely and professional updates and data.
      </Trans>
    ),
    imgProps: { ...data.trust },
    link: { to: '', text: <Trans>How Sherpany uses Ledgy for reporting</Trans> }
  }
];

export const getDataProtectionText = (data: Object) => [
  {
    title: <Trans>Technical data protection</Trans>,
    description: [
      <Trans>
        Your data is protected against attacks through encrypted connections, and encryption-at-rest
        with keys stored in hardware wallets.
      </Trans>,
      <Trans>
        Server call rate limits protects the servers against DoS attacks and strict content security
        policies protect against code injection
      </Trans>,
      <Trans>
        Daily, weekly and monthy backups with long retention periods ensure that data can’t be lost
      </Trans>
    ],
    imgProps: { ...data.dataProtection },
    imgFirst: true
  },
  {
    title: <Trans>Data stored in Switzerland</Trans>,
    description: [
      <Trans>
        Equity data like stakeholder, cap table, and participation plan data is stored in
        Switzerland only
      </Trans>,
      <Trans>
        No sharing of equity-related data with third parties, no access by employees, except when
        you explicitly authorize support access
      </Trans>,
      <Trans>
        Sharing user data with third-parties only if necessary and with your consent to provide
        Ledgy’s services, for example, sending updates via newsletter providers
      </Trans>
    ],
    imgProps: { ...data.swissData }
  },
  {
    title: <Trans>GDPR compliance</Trans>,
    description: [
      <Trans>
        Ledgy complies with the Swiss Federal Act on Data Protection (FADP) and the General Data
        Protection Regulation (GDPR)
      </Trans>,
      <Trans>You can export or delete your data at any time</Trans>,
      <Trans>
        GDPR is the default for Ledgy, not an obligation, including our obligations as a controller
        and processor, protection by design, your rights as data subject and security measures
      </Trans>
    ],
    imgProps: { ...data.gdprCompliance },
    imgFirst: true
  },
  {
    title: <Trans>Privacy-first features</Trans>,
    description: [
      <Trans>Granular access allows you to control what information to share with whom</Trans>,
      <Trans>Ledgy never contacts shareholders without consent of the company administrator</Trans>,
      <Trans>
        Strong passwords are required, two-factor authentication secures user accounts, and
        important actions are password-protected
      </Trans>
    ],
    imgProps: { ...data.privacyFirst }
  }
];
