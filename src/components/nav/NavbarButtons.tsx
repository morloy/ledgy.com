import React from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/macro';

import { appUrl, track, demoPage } from '../../helpers';

import { Button } from '../utils';
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
      inverted
      outline={!isMobile}
      href={`${appUrl}/login`}
      className="px-3 py-1"
      onClick={() => track('click.login')}
    >
      <Trans>Log In</Trans>
    </Button>
    <Link to={`${prefix}${demoPage}`} onClick={removeOverlay}>
      <Button outline={isMobile} className="ml-2 px-3 py-1">
        <Trans>Book a Demo</Trans>
      </Button>
    </Link>
  </div>
);
