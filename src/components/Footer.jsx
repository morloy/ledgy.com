// @flow

import React, { type Node } from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { name, targetBlank } from '../helpers';
import { deprefix } from '../i18n-config';

import logoInvertedCompact from '../img/logo-inverted-compact.png';

import { CTABanner } from './CTABanner';
import { Dropdown } from './Dropdown';
import { SubscriptionModal } from './SubscriptionModal';
import { getFooterLinks, formatUrl } from './lib';
import { isExternalUrl } from './lib/urlHelpers';

const FooterCol = ({ order, children }: { order: number, children: Node }) => (
  <div className={`col-6 col-md-3 order-md-${order}`}>{children}</div>
);

const FooterColBody = ({
  title,
  children,
  className = '',
}: {
  title: Node,
  children: Array<Node>,
  className?: string,
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
  const { prefix } = props;

  return (
    <div>
      {isPartners ? '' : <CTABanner location={location} {...props} />}
      <footer className="footer py-8 px-2 px-md-4 text-white bg-primary overflow-hidden position-relative">
        <div className="footer-deco-shape" />
        <div className="container">
          <div className="row m-0 h-100 justify-content-md-center position-relative z-index-base">
            <FooterCol order={2}>
              <FooterColBody title={<Trans>Company</Trans>}>
                {companyLinks.map(([label, link]) => (
                  <Link className="nav-link" href to={formatUrl(prefix, link)} key={link}>
                    {label}
                  </Link>
                ))}
              </FooterColBody>
              <FooterColBody title={<Trans>Legal</Trans>} className="mt-5">
                {legalLinks.map(([label, link]) => (
                  <Link className="nav-link" href to={formatUrl(prefix, link)} key={link}>
                    {label}
                  </Link>
                ))}
              </FooterColBody>
            </FooterCol>
            <FooterCol order={3}>
              <FooterColBody title={<Trans>Resources</Trans>}>
                {resourceLinks.map(([label, link]) =>
                  isExternalUrl(link) ? (
                    <a className="nav-link" href={link} key={link} {...targetBlank}>
                      {label}
                    </a>
                  ) : (
                    <Link className="nav-link" href to={formatUrl(prefix, link)} key={link}>
                      {label}
                    </Link>
                  )
                )}
              </FooterColBody>
            </FooterCol>
            <FooterCol order={1} wide>
              <div className="footer--logo-section d-flex flex-column justify-content-between mt-5 mt-md-0">
                <div className="d-flex flex-column align-items-center p-0 px-md-4">
                  <Link href to={`${prefix}/#start`} className="mb-2 mb-md-4">
                    <img src={logoInvertedCompact} width={80} alt={name} />
                  </Link>
                  <div className="py-lg-4">
                    <SubscriptionModal {...props} buttonClass="w-100" />
                    <Dropdown
                      toggleText={<Trans>Language</Trans>}
                      toggleIcon={faGlobeEurope}
                      toggleClass="w-100"
                      toggleProps={{ outline: true }}
                      items={[
                        <LanguageLink language="English" to={deprefix(location.pathname)} />,
                        <LanguageLink
                          language="Deutsch"
                          to={`/de${deprefix(location.pathname)}`}
                        />,
                        <LanguageLink
                          language="Français"
                          to={`/fr${deprefix(location.pathname)}`}
                        />,
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
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  ))}
                </div>
              </div>
            </FooterCol>
            <FooterCol order={4}>
              <FooterColBody title={<Trans>Product</Trans>} className="mt-5 mt-md-0">
                {productLinks.map(([label, link]) => (
                  <Link className="nav-link" href to={formatUrl(prefix, link)} key={link}>
                    {label}
                  </Link>
                ))}
              </FooterColBody>
            </FooterCol>
          </div>
        </div>
      </footer>
    </div>
  );
};
