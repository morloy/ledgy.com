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
  <Link href to={`${props.prefix}/#start`}>
    <img className="navbar-logo" src={logoInverted} alt={name} />
  </Link>
);

const toggleNavbar = (isOpen, setOpen) => {
  if (document.body) {
    if (!isOpen) {
      document.body.classList.add('overlay');
      setOpen(true);
    } else {
      document.body.classList.remove('overlay');
      setOpen(false);
    }
  }
};

export const Nav = (props: LayoutProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav className="navbar bg-primary sticky-top py-1 px-0">
        <div className="container flex-nowrap">
          <Logo {...props} />

          <div className="desktop-navbar">
            <DropdownFollowAlong {...props} />
            <div className="desktop-navbar-buttons d-flex align-items-center justify-content-end ml-2 ml-lg-4">
              <Button
                outline
                href={`${appUrl}/login`}
                onClick={() => track('click.login')}
              >
                <Trans>Log In</Trans>
              </Button>
              <Button
                inverted
                className="ml-2"
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
            onClick={() => toggleNavbar(isOpen, setOpen)}
          >
            <span /> <span /> <span /> <span />
          </Button>
          <CSSTransition
            in={isOpen}
            timeout={750}
            classNames="mobile-navbar-transition"
            unmountOnExit
          >
            <MobileNavbar
              isOpen={isOpen}
              setOpen={setOpen}
              toggleNavbar={toggleNavbar}
              prefix={props.prefix}
            />
          </CSSTransition>
        </div>
      </nav>
    </>
  );
};
