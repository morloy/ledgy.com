// @flow

import React from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/react';

import { name, appUrl, track } from '../helpers';
import logoInverted from '../img/logo-inverted.png';
import { Button } from './Button';

const Logo = (props: { prefix: string }) => (
  <Link href to={`${props.prefix}/#start`} className="navbar-brand">
    <img className="logo-light" src={logoInverted} width={150} alt={name} />
  </Link>
);

const navbarLinks = () => [
  [<Trans>Features</Trans>, 'features'],
  [<Trans>Pricing</Trans>, 'pricing'],
  [<Trans>Partners</Trans>, 'partners'],
  [<Trans>Help</Trans>, 'help'],
  [<Trans>Blog</Trans>, 'blog']
];

export const Nav = (props: LayoutProps) => (
  <nav className="navbar bg-primary sticky-top">
    <div className="container flex-nowrap">
      <Logo {...props} inverse />

      <section className="navbar-mobile">
        <h6 className="d-sm-none">Ledgy</h6>
        <nav className="nav nav-navbar ml-auto">
          {navbarLinks().map(([label, to]) => (
            <Link className="nav-link text-white" key={to} href to={`${props.prefix}/${to}/`}>
              {label}
            </Link>
          ))}
        </nav>

        <span className="navbar-divider" />
      </section>

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
