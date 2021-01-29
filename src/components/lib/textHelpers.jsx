// @flow

import React from 'react';
import { Trans } from "@lingui/macro";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faAngellist,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { helpUrl, youtubeUrl, twitterUrl, linkedinUrl, angelUrl, facebookUrl } from '../../helpers';

export const getUnderlineHtml = (text: string): string =>
  text.replace('_', '<u>').replace('_', '</u>').replace('_', '<u>').replace('_', '</u>');

export const getFooterLinks = () => {
  const companyLinks = [
    [<Trans>About us</Trans>, 'about-us'],
    [<Trans>Sustainability</Trans>, 'sustainability'],
    [<Trans>Career</Trans>, 'jobs'],
    [<Trans>Contact</Trans>, 'contact'],
  ];
  const legalLinks = [
    [<Trans>Terms of service</Trans>, 'legal/terms'],
    [<Trans>Privacy policy</Trans>, 'legal/privacy-policy'],
    [<Trans>Cookie policy</Trans>, 'legal/cookie-policy'],
    [<Trans>GDPR</Trans>, 'legal/gdpr'],
  ];
  const productLinks = [
    [<Trans>For finance</Trans>, 'finance'],
    [<Trans>For human resources</Trans>, 'human-resources'],
    [<Trans>For investors</Trans>, 'investors'],
    [<Trans>Data protection</Trans>, 'data-protection'],
    [<Trans>Pricing for companies</Trans>, 'company-pricing'],
    [<Trans>Pricing for investors</Trans>, 'investor-pricing'],
  ];
  const resourceLinks = [
    [<Trans>Help</Trans>, helpUrl],
    [<Trans>Blog</Trans>, 'blog'],
    [<Trans>Webinars</Trans>, 'webinars'],
    [<Trans>Customer stories</Trans>, 'customer-stories'],
    [<Trans>Lawyer partners</Trans>, 'partners'],
    [<Trans>Funding round calculator</Trans>, 'calculator'],
    [<Trans>ESOP templates</Trans>, 'employee-participation-plan-templates'],
  ];
  const socialLinks = [
    [linkedinUrl, faLinkedin, 'LinkedIn'],
    [twitterUrl, faTwitter, 'Twitter'],
    [facebookUrl, faFacebook, 'Facebook'],
    [youtubeUrl, faYoutube, 'YouTube'],
    [angelUrl, faAngellist, 'AngelList'],
  ];
  return { companyLinks, legalLinks, productLinks, resourceLinks, socialLinks };
};

export const getNavbarTitles = () => {
  const featuresTitle = <Trans>Features</Trans>;
  const resourcesTitle = <Trans>Resources</Trans>;
  const pricingTitle = <Trans>Pricing</Trans>;
  const dataProtectionTitle = <Trans>Data protection</Trans>;
  return { featuresTitle, resourcesTitle, pricingTitle, dataProtectionTitle };
};

export const getNavbarLinks = () => {
  const features = [
    [
      'finance',
      <Trans>For Finance</Trans>,
      <Trans>
        All-in-one solution for your company’s cap table, equity plans, modeling, investor
        relations, due diligence and document signing automation.
      </Trans>,
    ],
    [
      'human-resources',
      <Trans>For Human Resources</Trans>,
      <Trans>
        Equity plans on autopilot, with document signing batch processing for any number of employee
        grants and an engaging employee dashboard.
      </Trans>,
    ],
    [
      'investors',
      <Trans>For Investors</Trans>,
      <Trans>
        Flexible reporting and portfolio management solution for business angels, professional
        investors and funds.
      </Trans>,
    ],
  ];

  const resources = [
    [
      helpUrl,
      <Trans>Help</Trans>,
      <Trans>Get started quickly with Ledgy or dive deeper into how the features work</Trans>,
    ],
    [
      'blog',
      <Trans>Blog</Trans>,
      <Trans>
        Background stories about equity topics, founder and investor interviews and more to explore
      </Trans>,
    ],
    [
      'webinars',
      <Trans>Webinars</Trans>,
      <Trans>
        Regular short webinars give a quick introduction in many equity and Ledgy related topics
      </Trans>,
    ],
    [
      'customer-stories',
      <Trans>Customer Stories</Trans>,
      <Trans>Learn what Ledgy’s customers have to say</Trans>,
    ],
    [
      'sustainability',
      <Trans>Sustainability</Trans>,
      <Trans>Learn how Ledgy strives to be a role model for the new economy</Trans>,
    ],
    [
      'calculator',
      <Trans>Funding Round Calculator</Trans>,
      <Trans>The calculator you need if you’re raising capital, no signup required</Trans>,
    ],
    [
      'employee-participation-plan-templates',
      <Trans>ESOP Templates</Trans>,
      <Trans>
        Access employee participation plan templates developed with leading law firms for free
      </Trans>,
    ],
  ];

  const pricing = [
    [
      'company-pricing',
      <Trans>For Companies</Trans>,
      <Trans>
        Free for early-stage startups and powerful for scaling companies, choose the plan that suits
        your company
      </Trans>,
    ],
    [
      'investor-pricing',
      <Trans>For Investors</Trans>,
      <Trans>Free for business angels, powerful for professional investors</Trans>,
    ],
  ];

  const dataProtection = [['data-protection', <Trans>Learn about security</Trans>]];

  return { features, resources, pricing, dataProtection };
};
