import React from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/macro';

import { appUrl, track, demoPage } from '../../helpers';

import { Button } from '../Button';
import { removeOverlay } from '../lib';

export const NavbarButtons = ({
  className = '',
  isMobile = false,
  prefix,
}: {
  prefix: string;
  className?: string;
  isMobile?: boolean;
}) => (
  <div className={`d-flex align-items-center ${className}`}>
    <Button
      outline={!isMobile}
      href={`${appUrl}/login`}
      className="px-3 py-1"
      onClick={() => track('click.login')}
    >
      <Trans>Log In</Trans>
    </Button>
    <Link href to={`${prefix}${demoPage}`} onClick={removeOverlay}>
      <Button inverted outline={isMobile} className="ml-2 px-3 py-1">
        <Trans>Book a Demo</Trans>
      </Button>
    </Link>
  </div>
);
