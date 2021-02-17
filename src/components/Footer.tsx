import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { name, targetBlank } from '../helpers';
import { deprefix } from '../i18n-config';

import logoInvertedCompact from '../img/logo-inverted-compact.png';

import { SubscriptionModal } from './SubscriptionModal';
import { FOOTER_LINKS, FooterLink, formatUrl } from './lib';
import { isExternalUrl } from './lib/urlHelpers';
import { DynamicTrans, Dropdown } from './utils';

const { companyLinks, legalLinks, productLinks, resourceLinks, socialLinks } = FOOTER_LINKS;

const FooterCol = ({ order, children }: { order: number; children: ReactNode }) => (
  <div className={`col-6 col-md-3 order-md-${order}`}>{children}</div>
);

const LanguageLink = ({ language, to }: { language: string; to: string }) => (
  <Link className="d-flex justify-content-center text-primary" to={to}>
    {language}
  </Link>
);

const FooterLinks = ({
  title,
  links,
  prefix,
  className = '',
}: {
  title: string;
  links: FooterLink[];
  prefix: string;
  className?: string;
}) => (
  <div className={`pl-4 ${className}`}>
    <h6 className="mb-4">
      <strong>
        <DynamicTrans>{title}</DynamicTrans>
      </strong>
    </h6>
    <div className="nav flex-column">
      {links.map(([label, link]) =>
        isExternalUrl(link) ? (
          <a className="nav-link" href={link} key={link} {...targetBlank}>
            <DynamicTrans>{label}</DynamicTrans>
          </a>
        ) : (
          <Link className="nav-link" to={formatUrl(prefix, link)} key={link}>
            <DynamicTrans>{label}</DynamicTrans>
          </Link>
        )
      )}
    </div>
  </div>
);

export const Footer = ({ location, ...props }: LayoutProps) => {
  const { prefix } = props;
  return (
    <div>
      <footer className="footer py-8 px-2 px-md-4 text-white bg-primary overflow-hidden position-relative">
        <div className="footer-deco-shape" />
        <div className="container">
          <div className="row m-0 h-100 justify-content-md-center position-relative z-index-base">
            <FooterCol order={2}>
              <FooterLinks title="Company" links={companyLinks} prefix={prefix} />
              <FooterLinks title="Legal" links={legalLinks} prefix={prefix} className="mt-5" />
            </FooterCol>
            <FooterCol order={3}>
              <FooterLinks title="Resources" links={resourceLinks} prefix={prefix} />
            </FooterCol>
            <FooterCol order={1}>
              <div className="footer--logo-section d-flex flex-column justify-content-between mt-5 mt-md-0">
                <div className="d-flex flex-column align-items-center p-0 px-md-4">
                  <Link to={`${prefix}/#start`} className="mb-2 mb-md-4">
                    <img src={logoInvertedCompact} width={80} alt={name} />
                  </Link>
                  <div className="py-lg-4">
                    <SubscriptionModal buttonClass="w-100" />
                    <Dropdown
                      toggleText={<Trans>Language</Trans>}
                      toggleIcon={faGlobeEurope}
                      toggleClass="w-100"
                      toggleProps={{ outline: true }}
                      items={[
                        <LanguageLink
                          key="locale-en"
                          language="English"
                          to={deprefix(location.pathname)}
                        />,
                        <LanguageLink
                          key="locale-de"
                          language="Deutsch"
                          to={`/de${deprefix(location.pathname)}`}
                        />,
                        <LanguageLink
                          key="locale-fr"
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
              <FooterLinks
                title="Product"
                links={productLinks}
                prefix={prefix}
                className="mt-5 mt-md-0"
              />
            </FooterCol>
          </div>
        </div>
      </footer>
    </div>
  );
};
