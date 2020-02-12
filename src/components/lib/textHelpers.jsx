// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faAngellist,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

export const getFooterLinks = () => {
  const companyLinks = [
    [<Trans>About us</Trans>, 'about-us'],
    [<Trans>Career</Trans>, 'jobs'],
    [<Trans>Contact</Trans>, 'contact']
  ];
  const legalLinks = [
    [<Trans>Terms of service</Trans>, 'legal/terms'],
    [<Trans>Privacy policy</Trans>, 'legal/privacy-policy'],
    [<Trans>Cookie policy</Trans>, 'legal/cookie-policy'],
    [<Trans>GDPR</Trans>, 'legal/gdpr']
  ];
  const productLinks = [
    [<Trans>For finance</Trans>, 'finance'],
    [<Trans>For human resources</Trans>, 'hr'],
    [<Trans>For investors</Trans>, 'features/investors'],
    [<Trans>Data protection</Trans>, 'security'],
    [<Trans>Pricing</Trans>, 'pricing']
  ];
  const resourceLinks = [
    [<Trans>Help</Trans>, 'help'],
    [<Trans>Blog</Trans>, 'blog'],
    [<Trans>Webinars</Trans>, 'webinars'],
    [<Trans>Customer stories</Trans>, 'customer-stories'],
    [<Trans>Lawyer partners</Trans>, 'partners'],
    [<Trans>Funding round calculator</Trans>, 'calculator'],
    [<Trans>ESOP templates</Trans>, 'employee-participation-plan-templates']
  ];
  const socialLinks = [
    ['https://www.youtube.com/channel/UCRkvNQptxoE-ckmTsrme1_w', faYoutube, 'YouTube'],
    ['https://twitter.com/Ledgy', faTwitter, 'Twitter'],
    ['https://www.linkedin.com/company/Ledgy', faLinkedin, 'LinkedIn'],
    ['https://www.facebook.com/Ledgy', faFacebook, 'Facebook'],
    ['https://angel.co/Ledgy', faAngellist, 'AngelList']
  ];
  return { companyLinks, legalLinks, productLinks, resourceLinks, socialLinks };
};

export const getNavbarLinks = () => {
  const features = [
    [
      'finance',
      <Trans>For Finance</Trans>,
      <Trans>
        All-in-one solution for your company’s cap table, equity plans, modeling, investor
        relations, due diligence and document signing automation.
      </Trans>
    ],
    [
      'human-resources',
      <Trans>For Human Resources</Trans>,
      <Trans>
        Equity plans on autopilot, with document signing batch processing for any number of employee
        grants and an engaging employee dashboard.
      </Trans>
    ],
    [
      'investors',
      <Trans>For Investors</Trans>,
      <Trans>
        Flexible reporting and portfolio management solution for business angels, professional
        investors and funds.
      </Trans>
    ]
  ];

  const resources = [
    [
      'help',
      <Trans>Help</Trans>,
      <Trans>
        Check out our help center to resolve your doubts about equity and how to use Ledgy
      </Trans>
    ],
    [
      'blog',
      <Trans>Blog</Trans>,
      <Trans>
        In the blog you will find detailed explanations about topics concerning equity management,
        employee engagement, investor relations, and more.
      </Trans>
    ],
    [
      'webinar',
      <Trans>Webinars</Trans>,
      <Trans>Our collection of Ledgy webinars addressing the most requested topics.</Trans>
    ],
    [
      'partners',
      <Trans>Lawyer Partners</Trans>,
      <Trans>Discover what law firms we cooperate with and how they empower Ledgy.</Trans>
    ]
  ];

  const pricing = [
    ['pricing/companies', <Trans>For Companies</Trans>],
    ['pricing/investors', <Trans>For Investors</Trans>]
  ];
  return { features, resources, pricing };
};
