// @flow

import * as React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import { I18nProvider, withI18n, Trans } from '@lingui/react';
import { Helmet } from 'react-helmet';

import { Title, appUrl, name, blogUrl, getLocale } from './utils';

import '../assets/scss/page.scss';

import logoDefault from '../img/logo_black.png';
import logoInverse from '../img/logo_white.png';

import en from '../locale/en/messages.json';
import de from '../locale/de/messages.json';


type LayoutProps = {
  prefix: string,
  lang: string,
  location: { pathname: string },
}

const Logo = (props: { prefix: string, inverse: boolean }) => (
  <Link href to={`${props.prefix}/#start`} className="navbar-brand">
    <img className="logo-dark" src={logoDefault} width={100} height={40} alt={name} />
    {props.inverse &&
      <img className="logo-inverse" src={logoInverse} width={100} height={40} alt={name} />}
  </Link>
);

const Nav = (props: LayoutProps) => (
  <nav className="navbar navbar-expand-lg navbar-light navbar-stick-dark" data-navbar="sticky">
    <div className="container">

      <div className="navbar-left">
        <button className="navbar-toggler">&#9776;</button>
        <Logo {...props} inverse />
      </div>

      <section className="navbar-mobile">
        <nav className="nav nav-navbar ml-auto">
          <Link className="nav-link" href to={`${props.prefix}/features/`}><Trans>Features</Trans></Link>
          <Link className="nav-link" href to={`${props.prefix}/about-us/`}><Trans>About us</Trans></Link>
          <a className="nav-link" href={blogUrl}><Trans>Blog</Trans></a>
        </nav>

        <span className="navbar-divider" />

        <div>
          <a className="btn btn-round btn-outline-light ml-lg-4 mr-2" href={appUrl}><Trans>Sign In</Trans></a>
        </div>
      </section>

    </div>
  </nav>
);

const Footer = (props: LayoutProps) => (
  <div>
    <section className="section bg-pale-secondary py-6">
      <div className="container">
        <div className="row gap-y align-items-center">
          <div className="col-md-5 text-center text-md-left">
            <h3><Trans>Try it for free</Trans></h3>
            <p><Trans>Already using Ledgy?</Trans> <a href={`${appUrl}/login`}><Trans>Sign in</Trans></a>.</p>
          </div>

          <div className="col-md-auto ml-auto text-center text-md-right">
            <a className="btn-block d-sm-inline btn btn-round btn-xl btn-primary mb-2" href={`${appUrl}/signup`}><Trans>Get Started</Trans></a>
          </div>
        </div>
      </div>
    </section>
    <footer className="footer py-7">
      <div className="container">
        <div className="row gap-y">

          <div className="col-md-6 col-xl-3">
            <p><Logo {...props} inverse={false} /></p>
          </div>

          <div className="col-6 col-md-3 col-xl-2">
            <h6 className="mb-4 mt-1"><strong><Trans>Company</Trans></strong></h6>
            <div className="nav flex-column">
              <Link className="nav-link" href to={`${props.prefix}/about-us/`}><Trans>About us</Trans></Link>
              <a className="nav-link" href={blogUrl}><Trans>Blog</Trans></a>
              <Link className="nav-link" href to={`${props.prefix}/privacy/`}><Trans>Privacy</Trans></Link>
              <Link className="nav-link" href to={`${props.prefix}/security/`}><Trans>Security</Trans></Link>
              <Link className="nav-link" href to={`${props.prefix}/contact/`}><Trans>Contact</Trans></Link>
            </div>
          </div>

          <div className="col-6 col-md-3 col-xl-3">
            <h6 className="mb-4 mt-1"><strong><Trans>Product</Trans></strong></h6>
            <div className="nav flex-column">
              <Link className="nav-link" href to={`${props.prefix}/features/`}><Trans>Features</Trans></Link>
              <Link className="nav-link" href to={`${props.prefix}/features/consistency/`}><Trans>Consistency</Trans></Link>
              <Link className="nav-link" href to={`${props.prefix}/features/round-modeling/`}><Trans>Round Modeling</Trans></Link>
              <Link className="nav-link" href to={`${props.prefix}/features/esop/`}><Trans>ESOP</Trans></Link>
              <Link className="nav-link" href to={`${props.prefix}/features/reporting/`}><Trans>Reporting</Trans></Link>
              <Link className="nav-link" href to={`${props.prefix}/features/investors/`}><Trans>Investors</Trans></Link>
            </div>
          </div>

          <div className="col-6 col-md-6 col-xl-2 text-center px-1">
            <div className="social social-bordered">
              <a className="social-twitter" href="https://twitter.com/LedgyCom"><i className="fa fa-twitter" /></a>
              <a className="social-linkedin" href="https://www.linkedin.com/company/ledgy"><i className="fa fa-linkedin" /></a>
              <a className="social-facebook" href="https://www.facebook.com/LedgyCom/"><i className="fa fa-facebook" /></a>
              <a className="social-angellist" href="https://angel.co/ledgy"><i className="fa fa-angellist" /></a>
              <a className="social-xing" href="https://www.xing.com/companies/ledgy"><i className="fa fa-xing" /></a>
            </div>
          </div>

          <div className="col-6 col-md-6 col-xl-2">
            {props.lang === 'de' ?
              <Link href to={props.location.pathname.replace('/de', '')} className="btn btn-round btn-outline-primary">English</Link> :
              <Link href to={`/de${props.location.pathname}`} className="btn btn-round btn-outline-primary">Deutsch</Link>}
          </div>

        </div>
      </div>
      <div data-provide="map" />
    </footer>
  </div>
);


type SiteProps = {
  ...$Exact<Props>,
  lang: string,
  data: { site: { siteMetadata: {
    name: string, siteUrl: string,
  } } },
  children: (Object) => React.Node,
  location: { pathname: string },
}

const TemplateWrapper = withI18n()((props: SiteProps) => {
  const { i18n } = props;
  const { siteUrl } = props.data.site.siteMetadata;
  const prefix = props.lang === 'de' ? '/de' : '';
  const thumbnailUrl = `${siteUrl}/thumbnail.png`;
  return (
    <div>
      <Title
        title={i18n.t`Build trust in your cap table`}
        description={i18n.t`Manage your Cap Table, not your Excel! Ledgy is the single place to track the complete history of your shares, manage your ESOPs and model detailed financing rounds. Enjoy a guaranteed error-free cap table and engage your investors and employees. Try Now For Free!`}
      />
      <Helmet>
        <html lang={props.lang} />
        <meta name="keywords" content={i18n.t`cap table, stock ledger, share register, startup, round modeling, equity, esop, reporting, investors`} />
        <meta name="author" content="Ledgy" />

        {/* Facebook social card */}
        <meta property="og:site_name" content={name} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={thumbnailUrl} />

        {/* Twitter social card */}
        <meta name="twitter:site" content="@LedgyCom" />
        <meta name="twitter:image" content={thumbnailUrl} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Disable AOS for Google */}
        <noscript>
          {`
            <style type="text/css">
              [data-aos] {
                  opacity: 1 !important;
                  transform: translate(0) scale(1) !important;
              }
            </style>
          `}
        </noscript>
      </Helmet>
      <Nav {...props} prefix={prefix} />
      {props.children({ ...props, prefix })}
      <Footer {...props} prefix={prefix} />
    </div>
  );
});


export default class extends React.Component<{ location: { pathname: string } }> {
  componentDidMount = () => {
    require('../assets/js/page'); // eslint-disable-line global-require
    require('../assets/js/script'); // eslint-disable-line global-require

    const { pathname } = this.props.location;
    if (getLocale() === 'de' && !pathname.startsWith('/de')) {
      navigateTo(`/de${this.props.location.pathname}`);
    }
  }
  render = () => {
    const lang = this.props.location.pathname.startsWith('/de/') ? 'de' : 'en';
    return (
      <I18nProvider language={lang} catalogs={{ en: { messages: en }, de: { messages: de } }}>
        <TemplateWrapper {...this.props} lang={lang} />
      </I18nProvider>
    );
  }
}

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
