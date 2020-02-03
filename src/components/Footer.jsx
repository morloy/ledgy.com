// @flow

import React, { type Node } from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faAngellist,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { name, targetBlank } from '../helpers';
import { deprefix } from '../i18n-config';

import Modal from '../components/Modal';
import logoInverse from '../img/logo_white.png';
import SignupForm from '../components/SignupForm';
import { CTABanner } from '../components/CTABanner';

const FooterCol = ({
  order,
  children,
  wide
}: {
  order: number,
  children: Node,
  wide?: boolean
}) => (
  <div className={`col-${wide ? 12 : 6} col-md-${wide ? 3 : 2} order-md-${order}`}>{children}</div>
);

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
const socialLinks = [
  ['https://www.youtube.com/channel/UCRkvNQptxoE-ckmTsrme1_w', faYoutube, 'YouTube'],
  ['https://twitter.com/Ledgy', faTwitter, 'Twitter'],
  ['https://www.linkedin.com/company/Ledgy', faLinkedin, 'LinkedIn'],
  ['https://www.facebook.com/Ledgy', faFacebook, 'Facebook'],
  ['https://angel.co/Ledgy', faAngellist, 'AngelList']
];

export const Footer = ({ location, ...props }: LayoutProps) => {
  const isPartners = location.pathname.includes('partners');

  return (
    <div>
      {isPartners ? '' : <CTABanner location={location} {...props} />}
      <footer className="footer py-6 px-5 px-md-4 text-white bg-primary">
        <div className="row justify-content-md-center">
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
            <div className="h-100 d-flex flex-column justify-content-between">
              <div className="d-flex flex-column align-items-center p-0 px-md-4">
                <Link href to={`${props.prefix}/#start`} className="mb-4">
                  <img src={logoInvertedCompact} width={80} alt={name} />
                </Link>
                <div className="p-4">
                  <Modal
                    id="newsletter-signup"
                    title={<Trans>Sign up for the Ledgy newsletter</Trans>}
                    buttonProps={{ className: 'w-100 px-1 mb-4', inverted: true }}
                    buttonText={
                      <>
                        <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
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
                  <Dropdown
                    toggleText={
                      <>
                        <FontAwesomeIcon className="mr-2" icon={faGlobeEurope} />
                        <Trans>Language</Trans>
                      </>
                    }
                    toggleProps={{ className: 'w-100 px-1', outline: true }}
                    items={[
                      <LanguageLink language="English" to={deprefix(location.pathname)} />,
                      <LanguageLink language="Deutsch" to={`/de${deprefix(location.pathname)}`} />,
                      <LanguageLink language="Français" to={`/fr${deprefix(location.pathname)}`} />
                    ]}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                {socialLinks.map(([href, icon, title]) => (
                  <a
                    href={href}
                    key={title}
                    {...targetBlank}
                    className="social-icon text-white mx-2"
                  >
                    <FontAwesomeIcon icon={icon} title={title} />
                  </a>
                ))}
              </div>
            </div>
          </FooterCol>
        </div>
        <div data-provide="map" />
      </footer>
    </div>
  );
};
