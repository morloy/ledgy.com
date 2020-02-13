// @flow

import React, { type Node } from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

import { name, targetBlank } from '../helpers';
import { deprefix } from '../i18n-config';

import logoInverted from '../img/logo-inverted.png';

import { CTABanner } from './CTABanner';
import { SignupForm } from './SignupForm';
import { Modal } from './Modal';
import { Dropdown } from './Dropdown';
import { getFooterLinks } from './lib';

const FooterCol = ({ order, children }: { order: number, children: Node }) => (
  <div className={`col-6 col-md-3 order-md-${order}`}>{children}</div>
);

const FooterColBody = ({
  title,
  children,
  className = ''
}: {
  title: Node,
  children: Array<Node>,
  className?: string
}) => (
  <div className={`pl-4 ${className}`}>
    <h6 className="mb-4">
      <strong>{title}</strong>
    </h6>
    <div className="nav flex-column">{children}</div>
  </div>
);

const LanguageLink = ({ language, to }: { language: string, to: string }) => (
  <Link className="d-flex justify-content-center text-primary" to={to} href>
    {language}
  </Link>
);

const { companyLinks, legalLinks, productLinks, resourceLinks, socialLinks } = getFooterLinks();

export const Footer = ({ location, ...props }: LayoutProps) => {
  const isPartners = location.pathname.includes('partners');

  return (
    <div>
      {isPartners ? '' : <CTABanner location={location} {...props} />}
      <footer className="footer pt-8 px-2 px-md-4 text-white bg-primary">
        <div className="row m-0 h-100 justify-content-md-center">
          <FooterCol order={2}>
            <FooterColBody title={<Trans>Company</Trans>}>
              {companyLinks.map(([label, link]) => (
                <Link className="nav-link" href to={`${props.prefix}/${link}/`} key={link}>
                  {label}
                </Link>
              ))}
            </FooterColBody>
            <FooterColBody title={<Trans>Legal</Trans>} className="mt-5">
              {legalLinks.map(([label, link]) => (
                <Link className="nav-link" href to={`${props.prefix}/${link}/`} key={link}>
                  {label}
                </Link>
              ))}
            </FooterColBody>
          </FooterCol>
          <FooterCol order={3}>
            <FooterColBody title={<Trans>Resources</Trans>}>
              {resourceLinks.map(([label, link]) => (
                <Link className="nav-link" href to={`${props.prefix}/${link}/`} key={link}>
                  {label}
                </Link>
              ))}
            </FooterColBody>
          </FooterCol>
          <FooterCol order={1} wide>
            <div className="footer--logo-section d-flex flex-column justify-content-between mt-5 mt-md-0 pb-5">
              <div className="d-flex flex-column align-items-center p-0 px-md-4">
                <Link href to={`${props.prefix}/#start`} className="mb-2 mb-md-4">
                  <img src={logoInvertedCompact} width={80} alt={name} />
                </Link>
                <div className="p-lg-4">
                  {/* <Modal
                    id="newsletter-signup"
                    title={<Trans>Sign up for the Ledgy newsletter</Trans>}
                    buttonProps={{ className: 'w-100 px-1 mb-3', inverted: true }}
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
                  </Modal> */}
                  <Dropdown
                    toggleText={<Trans>Language</Trans>}
                    toggleIcon={faGlobeEurope}
                    toggleClass="w-100"
                    toggleProps={{ outline: true }}
                    items={[
                      <LanguageLink language="English" to={deprefix(location.pathname)} />,
                      <LanguageLink language="Deutsch" to={`/de${deprefix(location.pathname)}`} />,
                      <LanguageLink language="Français" to={`/fr${deprefix(location.pathname)}`} />
                    ]}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center flex-wrap mt-5">
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
          <FooterCol order={4}>
            <FooterColBody title={<Trans>Product</Trans>} className="mt-5 mt-md-0">
              {productLinks.map(([label, link]) => (
                <Link className="nav-link" href to={`${props.prefix}/${link}/`} key={link}>
                  {label}
                </Link>
              ))}
            </FooterColBody>
          </FooterCol>
        </div>
      </footer>
    </div>
  );
};
