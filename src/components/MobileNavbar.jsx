// @flow

import React, { type Node } from 'react';
import { Link } from 'gatsby';

import { NavbarButtons } from './NavbarButtons';
import { getNavbarTitles, getNavbarLinks } from './lib';

const { featuresTitle, resourcesTitle, pricingTitle, dataProtectionTitle } = getNavbarTitles();
const { features, resources, pricing, dataProtection } = getNavbarLinks();

const MobileNavbarGroup = ({
  title,
  links,
  prefix,
  isOpen,
  setOpen,
  toggleOverlay
}: {|
  title: Node,
  links: Object,
  prefix: string,
  isOpen: boolean,
  setOpen: boolean => void,
  toggleOverlay: (boolean, (boolean) => void) => void
|}) => (
  <>
    <p className="text-gray-neutral mb-1">{title}</p>
    <ul className="flex-column ml-2 ml-sm-4 mb-2 mb-sm-4">
      {links.map(([to, name]) => (
        <li key={to}>
          <Link href to={`${prefix}/${to}`} onClick={() => toggleOverlay(isOpen, setOpen)}>
            <h5 className="text-primary mt-1">{name}</h5>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

const titlesAndLinks = [
  [featuresTitle, features],
  [resourcesTitle, resources],
  [pricingTitle, pricing],
  [dataProtectionTitle, dataProtection]
];

export const MobileNavbar = ({
  isOpen,
  setOpen,
  toggleOverlay,
  prefix
}: {|
  isOpen: boolean,
  setOpen: boolean => void,
  toggleOverlay: (boolean, (boolean) => void) => void,
  prefix: string
|}) => (
  <div className="mobile-navbar position-fixed text-primary">
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
      <NavbarButtons className="mt-2 mt-sm-4 mb-4" isMobile />
    </div>
  </div>
);
