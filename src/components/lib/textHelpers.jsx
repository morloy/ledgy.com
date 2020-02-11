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
