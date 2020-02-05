// @flow

import React from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/react';

import { name, appUrl, trackSignupGoogleAnalytics } from '../helpers';
import logoInverted from '../img/logo-inverted.png';

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
  <nav className="navbar bg-primary">
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
        <a
          className="btn btn-round btn-outline-light mx-2"
          href={`${appUrl}/login`}
          onClick={() => trackSignupGoogleAnalytics('login')}
        >
          <Trans>Log In</Trans>
        </a>
        <a
          className="btn btn-round btn-light ml-lg-0 mr-2"
          href={`${appUrl}/signup`}
          onClick={() => trackSignupGoogleAnalytics('clickSignup')}
        >
          <Trans>Sign up</Trans>
        </a>
      </div>
    </div>
  </nav>
);
