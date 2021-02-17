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
  ['For finance', 'finance-legal-accounting'],
  ['For human resources', 'hr-and-compensation'],
  ['For investors', 'vcs-business-angels'],
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
  ['Financing calculator', 'calculator'],
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
  solutionsTitle: 'Solutions',
  resourcesTitle: 'Resources',
  pricingTitle: 'Pricing',
  dataProtectionTitle: 'Data protection',
};

export type NavbarMenuItem = { icon: IconType; title: string; description: string; link: string };
export type NavbarMenuColumn = { items: NavbarMenuItem[]; header?: string };

const teams: NavbarMenuColumn = {
  header: 'Teams',
  items: [
    {
      link: 'hr-and-compensation',
      title: 'HR & Compensation',
      description: 'Automated equity plans, employee dashboards',
      icon: 'hr',
    },
    {
      link: 'finance-legal-accounting',
      title: 'Finance, Legal, & Accounting',
      description: 'Cap table, scenario modeling, investor relations',
      icon: 'calculator',
    },
    {
      link: 'vcs-business-angels',
      title: 'VCs & Business Angels',
      description: 'Portfolio management, real-time company insights',
      icon: 'rocket',
    },
  ],
};

const learn: NavbarMenuColumn = {
  header: 'Learn',
  items: [
    {
      link: helpUrl,
      title: 'Help',
      description: 'Get quickly started with Ledgy or dive deeper into how the features work',
      icon: 'help',
    },
    {
      link: 'webinars',
      title: 'Webinars',
      description:
        'Regular short webinars give a quick introduction in many equity and Ledgy-related topics',
      icon: 'video',
    },
  ],
};

const explore: NavbarMenuColumn = {
  header: 'Explore',
  items: [
    {
      link: 'blog',
      title: 'Blog',
      description:
        'Background stories about equity topics, founder and investor interviews and more to explore',
      icon: 'blog',
    },
    {
      link: 'customer-stories',
      title: 'Customer Stories',
      description: 'Learn what Ledgy’s customers have to say',
      icon: 'story',
    },
  ],
};

const tools: NavbarMenuColumn = {
  header: 'Tools',
  items: [
    {
      link: 'employee-participation-plan-templates',
      title: 'ESOP Templates',
      description:
        'Access employee participation plan templates developed with leading law firms for free',
      icon: 'template',
    },
    {
      link: 'calculator',
      title: 'Financing Calculator',
      description: 'The calculator you need if you’re raising capital, no signup required',
      icon: 'calculator',
    },
  ],
};

const pricingTypes: NavbarMenuColumn = {
  items: [
    {
      link: 'company-pricing',
      title: 'For Companies',
      description:
        'Free for early-stage startups and powerful for scaling companies, choose the plan that suits your company',
      icon: 'company',
    },
    {
      link: 'investor-pricing',
      title: 'For Investors',
      description: 'Free for business angels, powerful for professional investors',
      icon: 'investor',
    },
  ],
};

const solutions: NavbarMenuColumn[] = [teams];
const resources: NavbarMenuColumn[] = [learn, explore, tools];
const pricing: NavbarMenuColumn[] = [pricingTypes];

export const NAVBAR_LINKS = { solutions, resources, pricing };
