// @flow

import React from 'react';
import Link from 'gatsby-link';

import '../assets/vendor/bootstrap/css/bootstrap.css';
import '../assets/css/scss/thesaas.scss';
import '../assets/vendor/swiper/css/swiper.css';
import '../fonts';
import logoDefault from '../img/logo_black.png';
import logoInverse from '../img/logo_white.png';

const Logo = () => (
  <Link href to="/#start">
    <img className="logo-default" src={logoDefault} width={75} height={30} alt="logo" />
    <img className="logo-inverse" src={logoInverse} width={75} height={30} alt="logo" />
  </Link>
);

const Nav = () => (
  <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
    <div className="container">

      <div className="topbar-brand">
        <button className="topbar-toggler">&#9776;</button>
        <Logo />
      </div>


      <div className="topbar-right">
        <ul className="topbar-nav nav">
          <li className="nav-item">
            <button className="nav-link active btn-link text-left">Product <i className="fa fa-caret-down" /></button>
            <div className="nav-submenu">
              <Link className="nav-link active" href to="/#testimonials">Testimonials</Link>
              <Link className="nav-link active" href to="/#pricing">Pricing</Link>
              <Link className="nav-link active" href to="/#features">Features</Link>
              <Link className="nav-link active" href to="/#demo">Demo</Link>
              <Link className="nav-link active" href to="/#future">The Future</Link>
            </div>
          </li>
          <li className="nav-item"><Link className="nav-link active" href to="/about">About</Link></li>
          <li className="nav-item"><a className="nav-link active" href="https://blog.ledgy.com">Blog</a></li>
          <li className="nav-item"><Link className="nav-link active" href to="/contact">Contact</Link></li>
          <div className="hidden-md-up lh-2">
            <a className="btn btn-block btn-outline btn-primary" href="https://app.ledgy.com/login">Login</a>
            <a className="btn btn-block btn-success" href="https://app.ledgy.com/signup">Sign Up</a>
            <h4 className="mt-3">First 3 months free<br />Then 19 CHF/month</h4>
          </div>
        </ul>
        <div className="d-inline-flex ml-30 hidden-sm-down">
          <a className="btn btn-sm btn-outline btn-white mr-4" href="https://app.ledgy.com/login">Login</a>
          <a className="btn btn-sm btn-success" href="https://app.ledgy.com/signup">Sign Up</a>
        </div>
      </div>

    </div>
  </nav>
);


const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="row gap-y align-items-center">
        <div className="col-12 col-lg-3">
          <div className="text-center text-lg-left">
            <Logo />
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <ul className="nav nav-primary nav-hero">
            <li className="nav-item">
              <Link className="nav-link" href to="/#product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href to="/about">About</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://blog.ledgy.com">Blog</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-lg-3">
          <div className="social text-center text-lg-right">
            <a className="social-twitter" href="https://twitter.com/LedgyCom"><i className="fa fa-twitter" /></a>
            <a className="social-facebook" href="https://www.facebook.com/LedgyCom/"><i className="fa fa-facebook" /></a>
          </div>
        </div>
      </div>
    </div>
    <div data-provide="map" />
  </footer>
);

const TemplateWrapper = ({ children }: { children: () => any }) => (
  <div>
    <Nav />
    {children()}
    <Footer />
  </div>
);

export default TemplateWrapper;
