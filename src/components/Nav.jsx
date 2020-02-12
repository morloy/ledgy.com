// @flow

import React, { useState } from 'react';
import { Link } from 'gatsby';
import { CSSTransition } from 'react-transition-group';

import { name } from '../helpers';
import logoInverted from '../img/logo-inverted.png';

import { Button } from './Button';
import { NavbarButtons } from './NavbarButtons';
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
            <NavbarButtons className="justify-content-end ml-2 ml-lg-4" />
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
