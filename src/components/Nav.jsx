// @flow

import React from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/react';

import { name, appUrl, track } from '../helpers';
import logoInverted from '../img/logo-inverted.png';
import { Button } from './Button';
import { DropdownFollowAlong } from './DropdownFollowAlong';

const Logo = (props: { prefix: string }) => (
  <Link href to={`${props.prefix}/#start`} className="navbar-brand">
    <img className="logo-light" src={logoInverted} width={150} alt={name} />
  </Link>
);

export const Nav = (props: LayoutProps) => (
  <nav className="navbar bg-primary sticky-top py-1 px-0">
    <div className="container flex-nowrap">
      <Logo {...props} inverse />
      <DropdownFollowAlong {...props} />
      <div className="navbar-right">
        <Button
          outline
          className="mx-2"
          href={`${appUrl}/login`}
          onClick={() => track('click.login')}
        >
          <Trans>Log In</Trans>
        </Button>
        <Button
          inverted
          className="ml-lg-0 mr-2"
          href={`${appUrl}/signup`}
          onClick={() => track('click.signup')}
        >
          <Trans>Sign up</Trans>
        </Button>
      </div>
    </div>
  </nav>
);
