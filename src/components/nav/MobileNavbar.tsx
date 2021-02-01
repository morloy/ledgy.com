import React from 'react';
import { Link } from 'gatsby';

import { NavbarButtons } from './NavbarButtons';
import { NAVBAR_TITLES, NAVBAR_LINKS, formatUrl, isExternalUrl, NavbarMenuItem } from '../lib';
import { targetBlank } from '../../helpers';
import { DynamicTrans } from '../DynamicTrans';

const { featuresTitle, resourcesTitle, pricingTitle, dataProtectionTitle } = NAVBAR_TITLES;
const { features, resources, pricing, dataProtection } = NAVBAR_LINKS;

const MobileNavbarGroup = ({
  title,
  links,
  prefix,
  isOpen,
  setOpen,
  toggleOverlay,
}: {
  title: string;
  links: NavbarMenuItem[];
  prefix: string;
  isOpen: boolean;
  setOpen: (arg0: boolean) => void;
  toggleOverlay: (arg0: boolean, arg1: (arg0: boolean) => void) => void;
}) => (
  <>
    <p className="text-gray-neutral mb-1">
      <DynamicTrans>{title}</DynamicTrans>
    </p>
    <ul className="flex-column ml-2 ml-sm-4 mb-2 mb-sm-4">
      {links.map(([to, name]) => {
        const itemContent = (
          <h5 className="text-primary mt-1">
            <DynamicTrans>{name}</DynamicTrans>
          </h5>
        );
        const externalLink = (
          <a href={to} key={to} onClick={() => toggleOverlay(isOpen, setOpen)} {...targetBlank}>
            {itemContent}
          </a>
        );
        const internalLink = (
          <Link to={formatUrl(prefix, to)} onClick={() => toggleOverlay(isOpen, setOpen)}>
            {itemContent}
          </Link>
        );

        return <li key={to}>{isExternalUrl(to) ? externalLink : internalLink}</li>;
      })}
    </ul>
  </>
);

const titlesAndLinks: [string, NavbarMenuItem[]][] = [
  [featuresTitle, features],
  [resourcesTitle, resources],
  [pricingTitle, pricing],
  [dataProtectionTitle, dataProtection],
];

export const MobileNavbar = ({
  isOpen,
  setOpen,
  toggleOverlay,
  prefix,
}: {
  isOpen: boolean;
  setOpen: (arg0: boolean) => void;
  toggleOverlay: (arg0: boolean, arg1: (arg0: boolean) => void) => void;
  prefix: string;
}) => (
  <div id="mobile-navbar" className="position-fixed text-primary">
    <div className="mobile-inner">
      <div className="d-flex flex-column align-items-center justify-content-center p-2 p-sm-4 mt-3 mt-sm-4">
        <div className="text-left ml-n2 ml-sm-n4">
          {titlesAndLinks.map(([title, links], i) => (
            <MobileNavbarGroup
              title={title}
              links={links}
              prefix={prefix}
              isOpen={isOpen}
              setOpen={setOpen}
              toggleOverlay={toggleOverlay}
              key={i} // eslint-disable-line react/no-array-index-key
            />
          ))}
        </div>
        <NavbarButtons className="mt-2 mt-sm-4 mb-4" prefix={prefix} isMobile />
      </div>
    </div>
  </div>
);
