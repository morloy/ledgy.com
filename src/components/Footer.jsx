// @flow

import React, { type Node } from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faAngellist,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { name, targetBlank } from '../helpers';
import { deprefix } from '../i18n-config';

import logoInverted from '../img/logo-inverted.png';

import { CTABanner } from './CTABanner';
import SignupForm from './SignupForm';
import Modal from './Modal';
import { Dropdown } from './Dropdown';

const FooterCol = ({
  order,
  children,
  wide
}: {
  order: number,
  children: Node,
  wide?: boolean
}) => <div className={`col-${wide ? 12 : 6} col-md-2 pl-6 order-md-${order}`}>{children}</div>;

const FooterColBody = ({ title, children }: { title: Node, children: Array<Node> }) => (
  <>
    <h6 className="mb-4 mt-1">
      <strong>{title}</strong>
    </h6>
    <div className="nav flex-column">{children}</div>
  </>
);

const LanguageLink = ({ language, to }: { language: string, to: string }) => (
  <Link className=" d-flex" to={to} href>
    {language}
  </Link>
);

const companyLinks = [
  [<Trans>About us</Trans>, 'about-us'],
  [<Trans>Blog</Trans>, 'blog'],
  [<Trans>Partners</Trans>, 'partners'],
  [<Trans>Webinars</Trans>, 'webinars'],
  [<Trans>Security</Trans>, 'security'],
  [<Trans>Privacy</Trans>, 'privacy'],
  [<Trans>Career</Trans>, 'jobs'],
  [<Trans>Contact & Imprint</Trans>, 'contact']
];
const helpLinks = [
  [<Trans>Help Center</Trans>, 'help'],
  [<Trans>Getting Started</Trans>, 'help/getting-started'],
  [<Trans>Customer Stories</Trans>, 'customer-stories'],
  [<Trans>Glossary</Trans>, 'glossary'],
  [<Trans>ESOP Templates</Trans>, 'employee-participation-plan-templates'],
  [<Trans>Round Calculator</Trans>, 'calculator']
];
const blogLinks = [
  [<Trans>Option Pools</Trans>, 'blog/pre-and-post-money-option-pools'],
  [<Trans>Convertible Loans</Trans>, 'blog/convertible-loans'],
  [<Trans>KPIs & Reports</Trans>, 'updates/kpis-and-reports']
];
const productLinks = [
  [<Trans>Features</Trans>, 'features'],
  [<Trans>Cap Table</Trans>, 'features/captable'],
  [<Trans>Modeling</Trans>, 'features/modeling'],
  [<Trans>Employee Incentives</Trans>, 'features/esop'],
  [<Trans>Due Diligence</Trans>, 'features/collaboration'],
  [<Trans>Investors</Trans>, 'features/investors'],
  [<Trans>Tokenization</Trans>, 'features/tokenization'],
  [<Trans>Pricing</Trans>, 'pricing']
];
const legalLinks = [
  [<Trans>Terms of Service</Trans>, 'legal/terms'],
  [<Trans>Privacy Policy</Trans>, 'legal/privacy-policy'],
  [<Trans>Cookie Policy</Trans>, 'legal/cookie-policy'],
  [<Trans>GDPR</Trans>, 'legal/gdpr']
];

export const Footer = ({ location, ...props }: LayoutProps) => {
  const isPartners = location.pathname.includes('partners');

  return (
    <div>
      {isPartners ? '' : <CTABanner location={location} {...props} />}
      <footer className="footer pb-9 pt-7 py-md-7 px-4 text-white">
        <div className="row gap-y justify-content-md-center">
          <FooterCol order={2}>
            <FooterColBody title={<Trans>Company</Trans>}>
              {companyLinks.map(([label, link]) => (
                <Link className="nav-link" href to={`${props.prefix}/${link}/`} key={link}>
                  {label}
                </Link>
              ))}
            </FooterColBody>
          </FooterCol>
          <FooterCol order={4}>
            <FooterColBody title={<Trans>Resources</Trans>}>
              {helpLinks.map(([label, link]) => (
                <Link className="nav-link" href to={`${props.prefix}/${link}/`} key={link}>
                  {label}
                </Link>
              ))}
            </FooterColBody>
            <FooterColBody title={<Trans>Blog</Trans>}>
              {blogLinks.map(([label, link]) => (
                <Link className="nav-link" href to={`${props.prefix}/${link}/`} key={link}>
                  {label}
                </Link>
              ))}
            </FooterColBody>
          </FooterCol>
          <FooterCol order={3}>
            <FooterColBody title={<Trans>Product</Trans>}>
              {productLinks.map(([label, link]) => (
                <Link className="nav-link" href to={`${props.prefix}/${link}/`} key={link}>
                  {label}
                </Link>
              ))}
            </FooterColBody>
          </FooterCol>
          <FooterCol order={5}>
            <FooterColBody title={<Trans>Legal</Trans>}>
              {legalLinks.map(([label, link]) => (
                <Link className="nav-link" href to={`${props.prefix}/${link}/`} key={link}>
                  {label}
                </Link>
              ))}
            </FooterColBody>
          </FooterCol>
          <FooterCol order={1} wide>
            <Link href to={`${props.prefix}/#start`} className="navbar-brand">
              <img className="logo-light" src={logoInverted} width={100} height={40} alt={name} />
            </Link>
            <div className="social mt-2">
              {[
                ['https://www.youtube.com/channel/UCRkvNQptxoE-ckmTsrme1_w', faYoutube, 'YouTube'],
                ['https://twitter.com/Ledgy', faTwitter, 'Twitter'],
                ['https://www.linkedin.com/company/Ledgy', faLinkedin, 'LinkedIn'],
                ['https://www.facebook.com/Ledgy', faFacebook, 'Facebook'],
                ['https://angel.co/Ledgy', faAngellist, 'AngelList']
              ].map(([href, icon, title]) => (
                <a href={href} key={title} {...targetBlank}>
                  <FontAwesomeIcon icon={icon} title={title} />
                </a>
              ))}
            </div>
            <div className="newsletter-signup-CTA">
              <Modal
                id="newsletter-signup"
                title={<Trans>Sign up for the Ledgy newsletter</Trans>}
                buttonText={
                  <>
                    <FontAwesomeIcon
                      className="newsletter-icon mr-2"
                      icon={faEnvelope}
                      title="Newsletter"
                    />
                    <Trans>Newsletter</Trans>
                  </>
                }
                hideFooter
              >
                <p className="text-dark my-4">
                  <Trans>
                    Receive important feature updates, exclusive webinar invitations, and
                    promotions/offers
                  </Trans>
                </p>
                <SignupForm {...props} trackingEvent="newsletter" />
              </Modal>
            </div>
            <div className="mt-4">
              <Dropdown
                toggle={<Trans>Language</Trans>}
                items={[
                  <LanguageLink language="English" to={deprefix(location.pathname)} />,
                  <LanguageLink language="Deutsch" to={`/de${deprefix(location.pathname)}`} />,
                  <LanguageLink language="Français" to={`/fr${deprefix(location.pathname)}`} />
                ]}
              />
            </div>
          </FooterCol>
        </div>
        <div data-provide="map" />
      </footer>
    </div>
  );
};
