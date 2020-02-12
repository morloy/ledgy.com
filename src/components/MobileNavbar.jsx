// @flow

import React, { type Node } from 'react';
import { Link } from 'gatsby';

import { getNavbarTitles, getNavbarLinks } from './lib';

const { featuresTitle, resourcesTitle, pricingTitle, dataProtectionTitle } = getNavbarTitles();
const { features, resources, pricing, dataProtection } = getNavbarLinks();

const MobileNavbarGroup = ({
  title,
  links,
  prefix,
  isOpen,
  setOpen,
  toggleNavbar
}: {|
  title: Node,
  links: Object,
  prefix: string,
  isOpen: boolean,
  setOpen: boolean => void,
  toggleNavbar: (boolean, (boolean) => void) => void
|}) => (
  <>
    <p className="text-gray-neutral mb-1">{title}</p>
    <ul className="flex-column ml-4 mb-4">
      {links.map(([to, name]) => (
        <li key={to}>
          <Link href to={`${prefix}/${to}`} onClick={() => toggleNavbar(isOpen, setOpen)}>
            <h5 className="text-primary mt-2">{name}</h5>
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
  toggleNavbar,
  prefix
}: {|
  isOpen: boolean,
  setOpen: boolean => void,
  toggleNavbar: (boolean, (boolean) => void) => void,
  prefix: string
|}) => (
  <div className={isOpen ? 'backdrop' : ''}>
    <div className="mobile-navbar position-fixed text-primary">
      <div className="d-flex flex-column align-items-center justify-content-center p-4 mt-5">
        <div className="text-left ml-n4">
          {titlesAndLinks.map(([title, links], i) => (
            <MobileNavbarGroup
              title={title}
              links={links}
              prefix={prefix}
              isOpen={isOpen}
              setOpen={setOpen}
              toggleNavbar={toggleNavbar}
              key={i} // eslint-disable-line react/no-array-index-key
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
