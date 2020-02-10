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
