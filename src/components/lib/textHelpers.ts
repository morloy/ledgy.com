import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faAngellist,
  faYoutube,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { helpUrl, youtubeUrl, twitterUrl, linkedinUrl, angelUrl, facebookUrl } from '../../helpers';

export const getUnderlineHtml = (text: string): string =>
  text.replace('_', '<u>').replace('_', '</u>').replace('_', '<u>').replace('_', '</u>');

export type FooterLink = [string, string];

const companyLinks: FooterLink[] = [
  ['About us', 'about-us'],
  ['Sustainability', 'sustainability'],
  ['Career', 'jobs'],
  ['Contact', 'contact'],
];

const legalLinks: FooterLink[] = [
  ['Terms of service', 'legal/terms'],
  ['Privacy policy', 'legal/privacy-policy'],
  ['Cookie policy', 'legal/cookie-policy'],
  ['GDPR', 'legal/gdpr'],
];

const productLinks: FooterLink[] = [
  ['For finance', 'finance'],
  ['For human resources', 'human-resources'],
  ['For investors', 'investors'],
  ['Data protection', 'data-protection'],
  ['Pricing for companies', 'company-pricing'],
  ['Pricing for investors', 'investor-pricing'],
];

const resourceLinks: FooterLink[] = [
  ['Help', helpUrl],
  ['Blog', 'blog'],
  ['Webinars', 'webinars'],
  ['Customer stories', 'customer-stories'],
  ['Lawyer partners', 'partners'],
  ['Funding round calculator', 'calculator'],
  ['ESOP templates', 'employee-participation-plan-templates'],
];

type SocialLink = [string, IconDefinition, string];

const socialLinks: SocialLink[] = [
  [linkedinUrl, faLinkedin, 'LinkedIn'],
  [twitterUrl, faTwitter, 'Twitter'],
  [facebookUrl, faFacebook, 'Facebook'],
  [youtubeUrl, faYoutube, 'YouTube'],
  [angelUrl, faAngellist, 'AngelList'],
];

export const FOOTER_LINKS = { companyLinks, legalLinks, productLinks, resourceLinks, socialLinks };

export const NAVBAR_TITLES = {
  featuresTitle: 'Features',
  resourcesTitle: 'Resources',
  pricingTitle: 'Pricing',
  dataProtectionTitle: 'Data protection',
};

export type NavbarMenuItem = [string, string, string?];

const features: NavbarMenuItem[] = [
  [
    'finance',
    'For Finance',
    'All-in-one solution for your company’s cap table, equity plans, modeling, investor relations, due diligence and document signing automation.',
  ],
  [
    'human-resources',
    'For Human Resources',
    'Equity plans on autopilot, with document signing batch processing for any number of employee grants and an engaging employee dashboard.',
  ],
  [
    'investors',
    'For Investors',
    'Flexible reporting and portfolio management solution for business angels, professional investors and funds.',
  ],
];

const resources: NavbarMenuItem[] = [
  [helpUrl, 'Help', 'Get started quickly with Ledgy or dive deeper into how the features work'],
  [
    'blog',
    'Blog',
    'Background stories about equity topics, founder and investor interviews and more to explore',
  ],
  [
    'webinars',
    'Webinars',
    'Regular short webinars give a quick introduction in many equity and Ledgy related topics',
  ],
  ['customer-stories', 'Customer Stories', 'Learn what Ledgy’s customers have to say'],
  [
    'sustainability',
    'Sustainability',
    'Learn how Ledgy strives to be a role model for the new economy',
  ],
  [
    'calculator',
    'Funding Round Calculator',
    'The calculator you need if you’re raising capital, no signup required',
  ],
  [
    'employee-participation-plan-templates',
    'ESOP Templates',
    'Access employee participation plan templates developed with leading law firms for free',
  ],
];

const pricing: NavbarMenuItem[] = [
  [
    'company-pricing',
    'For Companies',
    'Free for early-stage startups and powerful for scaling companies, choose the plan that suits your company',
  ],
  [
    'investor-pricing',
    'For Investors',
    'Free for business angels, powerful for professional investors',
  ],
];

const dataProtection: NavbarMenuItem[] = [['data-protection', 'Learn about security']];

export const NAVBAR_LINKS = { features, resources, pricing, dataProtection };
