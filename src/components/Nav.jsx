// @flow

import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Trans } from '@lingui/react';
import { CSSTransition } from 'react-transition-group';

import { name, appUrl, track } from '../helpers';
import logoInverted from '../img/logo-inverted.png';

import { Button } from './Button';
import { DropdownFollowAlong } from './DropdownFollowAlong';
import { MobileNavbar } from './MobileNavbar';

const Logo = (props: { prefix: string }) => (
  <Link href to={`${props.prefix}/#start`} className="navbar-brand">
    <img className="logo-light" src={logoInverted} width={130} alt={name} />
  </Link>
);

export const Nav = (props: LayoutProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav className="navbar bg-primary sticky-top py-1 px-0">
        <div className="container flex-nowrap">
          <Logo {...props} />

          <div className="desktop-navbar">
            <DropdownFollowAlong {...props} />
            <div className="ml-2">
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
          <Button
            id="mobile-navbar-toggler"
            className={isOpen ? 'open' : ''}
            onClick={() => setOpen(!isOpen)}
          >
            <span /> <span /> <span /> <span />
          </Button>
          <CSSTransition
            in={isOpen}
            timeout={750}
            classNames="mobile-navbar-transition"
            unmountOnExit
          >
            <MobileNavbar setOpen={setOpen} prefix={props.prefix} />
          </CSSTransition>
        </div>
      </nav>
    </>
  );
};
