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
  setOpen
}: {
  title: Node,
  links: Object,
  prefix: string,
  setOpen: boolean => void
}) => (
  <>
    <p className="text-gray-neutral mb-1">{title}</p>
    <ul className="flex-column ml-4 mb-4">
      {links.map(([to, name]) => (
        <li>
          <Link href to={`${prefix}/${to}`} onClick={() => setOpen(false)}>
            <h5 className="text-primary mt-2">{name}</h5>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export const MobileNavbar = ({
  setOpen,
  prefix
}: {|
  setOpen: boolean => void,
  prefix: string
|}) => (
  <div className="position-absolute mobile-navbar text-primary">
    <div className="d-flex flex-column align-items-center justify-content-center p-4 mt-5">
      <div className="text-left ml-n4">
        <MobileNavbarGroup
          title={featuresTitle}
          links={features}
          prefix={prefix}
          setOpen={setOpen}
        />
        <MobileNavbarGroup
          title={resourcesTitle}
          links={resources}
          prefix={prefix}
          setOpen={setOpen}
        />
        <MobileNavbarGroup title={pricingTitle} links={pricing} prefix={prefix} setOpen={setOpen} />

        <MobileNavbarGroup
          title={dataProtectionTitle}
          links={dataProtection}
          prefix={prefix}
          setOpen={setOpen}
        />
      </div>
    </div>
  </div>
);
