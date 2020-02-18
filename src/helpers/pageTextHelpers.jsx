// @flow

import React from 'react';
import { Trans } from '@lingui/react';

import { forbesUrl, economistUrl, wirtschaftswocheUrl, top100Url } from './constants';

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

export const getCompanyFeaturePricing = () => [
  { text: <Trans>Swiss privacy & security</Trans> },
  { text: <Trans>Cap table</Trans> },
  { text: <Trans>Basic reporting</Trans> },
  { text: <Trans>Branded reporting</Trans>, startup: false },
  { text: <Trans>Basic modeling</Trans> },
  { text: <Trans>Advanced modeling</Trans>, startup: false },
  { text: <Trans>Equity plans</Trans>, startup: false },
  { text: <Trans>Employee dashboard</Trans>, startup: false, scaleup: false },
  {
    text: <Trans>Electronic signatures</Trans>,
    startup: false,
    scaleup: <Trans>standard €1 / signature</Trans>,
    enterprise: <Trans>qualified €3 / signature</Trans>
  },
  { text: <Trans>Document templating</Trans>, startup: false, scaleup: false },
  {
    text: <Trans>Data rooms</Trans>,
    startup: <Trans>50 MB</Trans>,
    scaleup: <Trans>500 MB</Trans>,
    enterprise: <Trans>Unlimited</Trans>
  },
  { text: <Trans>Data room sharing</Trans>, startup: false },
  {
    text: <Trans>Admin seats</Trans>,
    startup: <Trans>2</Trans>,
    scaleup: <Trans>4</Trans>,
    enterprise: <Trans>Unlimited</Trans>
  },
  {
    text: <Trans>View-only seats</Trans>,
    startup: false,
    scaleup: <Trans>Unlimited</Trans>,
    enterprise: <Trans>Unlimited</Trans>
  },
  {
    text: <Trans>Personal support</Trans>,
    startup: false,
    scaleup: <Trans>basic</Trans>,
    enterprise: <Trans>priority</Trans>
  },
  { text: <Trans>Onboarding data audit</Trans>, startup: false, scaleup: false },
  { text: <Trans>Dedicated account manager</Trans>, startup: false, scaleup: false },
  { text: <Trans>SLA</Trans>, startup: false, scaleup: false }
];

export const getInvestorFeaturePricing = () => ({
  angelFeatures: [
    <Trans>Up to 10 companies</Trans>,
    <Trans>One investor portfolio with custom and startup-curated entries</Trans>,
    <Trans>Receive reports, KPIs, documents, and sign documents</Trans>,
    <Trans>No support</Trans>
  ],
  fundFeatures: [
    <Trans>Unlimited companies</Trans>,
    <Trans>Unlimited portfolios for your fund</Trans>,
    <Trans>Unlimited admin seats</Trans>,
    <Trans>Premium support and onboarding assistance</Trans>
  ]
});

export const getFinanceFeatures = (data: Object) => [
  {
    title: <Trans>Automate your document signing processes</Trans>,
    description: [
      <Trans>
        Request any number of signatures with a single click, generating individual documents from
        templates
      </Trans>,
      <Trans>
        Ledgy is the only equity software that offers digital signing with the same legal status as
        handwritten signatures (qualified electronic signatures)
      </Trans>,
      <Trans>
        Build signature workflows to sign shareholder agreements and convertible loans online
        without printing a single sheet of paper
      </Trans>
    ],
    imgProps: { ...data.signingAutomation }
  },
  {
    title: <Trans>Share reports and KPIs with your investors</Trans>,
    description: [
      <Trans>
        Build and keep your investor’s trust and support by sharing timely and engaging information
        with them
      </Trans>,
      <Trans>Quickly copy-paste your KPIs from spreadsheets and customize your graphs</Trans>,
      <Trans>
        Share written reports including documents, KPIs, images and add your company branding
      </Trans>
    ],
    imgProps: { ...data.kpisAndReports },
    imgFirst: true
  },
  {
    title: <Trans>Organize your legal documents</Trans>,
    description: [
      <Trans>No need to waste money on a separate data room software</Trans>,
      <Trans>
        Organize your legal document history, and give selective view access for due diligence
      </Trans>,
      <Trans>Share documents, attach them to investor reports, invite people to sign</Trans>
    ],
    imgProps: { ...data.uploadDocument }
  },
  {
    title: <Trans>Model funding rounds and future dilution</Trans>,
    description: [
      <Trans>
        Understand how dilution works by quickly comparing different modeling scenarios
      </Trans>,
      <Trans>
        Flexible round modeling with support for convertibles, employee pools and multiple rounds
      </Trans>,
      <Trans>
        Assess the impact of liquidation preferences with waterfall analysis and breakpoint charts
      </Trans>
    ],
    imgProps: { ...data.exitModeling },
    imgFirst: true
  },
  {
    title: <Trans>Keep your cap table always accurate</Trans>,
    description: [
      <Trans>Intuitive, legally valid, and error-free cap table from the beginning</Trans>,
      <Trans>
        Support for any transaction type, including issuance, transfer, convertibles, stock split,
        share destruction, and valuations
      </Trans>,
      <Trans>
        Featuring unlimited share classes, treasury shares, pooled investments, and automatically
        numbered shares
      </Trans>
    ],
    imgProps: { ...data.createCaptable }
  },
  {
    title: <Trans>Instant customizable PDF and Excel exports</Trans>,
    description: [
      <Trans>Create holding confirmations with a single click</Trans>,
      <Trans>Export equity plans, cap table and stakeholder data with flexible filtering</Trans>,
      <Trans>Download your investor reports as PDF </Trans>
    ],
    imgProps: { ...data.holdingConfirmation },
    imgFirst: true
  }
];

export const getHumanResourcesFeatures = (data: Object) => [
  {
    title: <Trans>Onboard new employees in seconds</Trans>,
    description: [
      <Trans>Reduce employee onboarding overhead with digital grant signing processes</Trans>,
      <Trans>
        Request any number of signatures with a single click, generating individual documents from
        templates
      </Trans>,
      <Trans>
        Build signature workflows to issue fully-compliant grants online without printing a single
        sheet of paper
      </Trans>
    ],
    imgProps: { ...data.signingAutomation },
    imgFirst: true
  },
  {
    title: <Trans>Vesting on autopilot</Trans>,
    description: [
      <Trans>
        Quick vesting overview with one-click evaluation of what is vested, granted, available,
        exercised
      </Trans>,
      <Trans>
        Email notifications for important events like vesting cliff, vesting end or maturity
      </Trans>,
      <Trans>Standard or custom vesting schedules adapted to your needs</Trans>
    ],
    imgProps: { ...data.vestingChart }
  },
  {
    title: <Trans>Motivational employee dashboard</Trans>,
    description: [
      <Trans>
        Employees have a transparent view of their stake in the company and its success
      </Trans>,
      <Trans>
        Branded dashboard shows live vesting, what they can exercise, and how much their stake is
        worth
      </Trans>,
      <Trans>They will also receive email notifications about their grants</Trans>
    ],
    imgProps: { ...data.employeeDashboard },
    imgFirst: true
  },
  {
    title: <Trans>Organize your grant documents</Trans>,
    description: [
      <Trans>Never lose the necessary documents to prove the grant</Trans>,
      <Trans>
        Attach legal documents to transactions and use filters to quickly retrieve them
      </Trans>,
      <Trans>Employees can access their documents in their personal account</Trans>
    ],
    imgProps: { ...data.uploadDocument }
  },
  {
    title: <Trans>Instant customizable PDF and Excel exports</Trans>,
    description: [
      <Trans>Create holding confirmations with a single click</Trans>,
      <Trans>Export equity plans and employee data with flexible filtering</Trans>
    ],
    imgProps: { ...data.holdingConfirmation },
    imgFirst: true
  }
];
