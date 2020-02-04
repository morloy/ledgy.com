// @flow

import React, { useEffect, type Node } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { I18nProvider, withI18n } from '@lingui/react';
import { Helmet } from 'react-helmet';
import 'typeface-roboto-slab'; // eslint-disable-line import/extensions
import 'typeface-work-sans'; // eslint-disable-line import/extensions
import 'katex/dist/katex.min.css';
import 'prism-themes/themes/prism-ghcolors.css';

import { name, animateTablet, isDevelopment, ContentSecurityPolicy } from '../helpers';
import { Title } from './utils';
import { catalogs, langFromPath, langPrefix, deprefix } from '../i18n-config';

import '../assets/scss/page.scss';

import PublicityBanner from '../components/PublicityBanner';
import Loader from '../components/Loader';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

type SiteProps = {|
  ...$Exact<Props>,
  lang: Language,
  children: Node,
  location: { pathname: string }
|};

const openDemoModal = () => {
  if (window.location.hash === '#getDemo') {
    window.$('#demo-access').modal();
  }
};

const Initialize = () => {
  useEffect(() => {
    animateTablet();
    setTimeout(async () => {
      require('../assets/js/page'); // eslint-disable-line global-require
      require('../assets/js/script'); // eslint-disable-line global-require
      require('../assets/js/segment'); // eslint-disable-line global-require

      openDemoModal();
    }, 1414);
  }, []);
  return null;
};

const TemplateWrapper = withI18n()(({ children, ...props }: SiteProps) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `}
    render={data => {
      const { i18n, lang } = props;
      const prefix = langPrefix(lang);
      const { siteUrl } = data.site.siteMetadata;
      const thumbnailUrl = `${siteUrl}/thumbnail.png`;
      const pathname = deprefix(props.location.pathname);
      const isAppShell = pathname === '/offline-plugin-app-shell-fallback/';
      return (
        <div>
          <Title
            title={`Ledgy | ${i18n.t`Equity done right`}`}
            description={i18n.t`Get your cap table and employee participation plans right, from the beginning. Make your financing rounds a success and engage your investors and employees. Know your data is safe and compliant. Try now for free!`}
            thumbnailUrl={thumbnailUrl}
          />
          <Initialize />
          <Helmet>
            <html lang={lang} />
            <meta
              name="keywords"
              content={i18n.t`cap table, stock ledger, share register, startup, modeling, financing round, equity, esop, phantom, option plan, virtual, portfolio, reporting, investors`}
            />
            <meta name="author" content="Ledgy" />

            {isDevelopment && (
              <meta httpEquiv="Content-Security-Policy" content={ContentSecurityPolicy} />
            )}

            {/* Facebook social card */}
            <meta property="og:site_name" content={name} />
            <meta property="og:type" content="website" />

            {/* Twitter social card */}
            <meta name="twitter:site" content="@Ledgy" />
            <meta name="twitter:card" content="summary_large_image" />

            <link rel="alternate" href={`${siteUrl}${pathname}`} hrefLang="x-default" />
            <link rel="alternate" href={`${siteUrl}${pathname}`} hrefLang="en" />
            <link rel="alternate" href={`${siteUrl}/de${pathname}`} hrefLang="de" />
            <link rel="alternate" href={`${siteUrl}/fr${pathname}`} hrefLang="fr" />

            {/* Disable AOS for Google */}
            <noscript>
              {`
                <style>
                  [data-aos] {
                      opacity: 1 !important;
                      transform: translate(0) scale(1) !important;
                  }
                </style>
              `}
            </noscript>
          </Helmet>
          <Nav {...props} prefix={prefix} />
          {isAppShell && <Loader />}
          <PublicityBanner pathname={pathname} />
          {React.cloneElement((children: Object), { prefix, lang })}
          <Footer {...props} prefix={prefix} />
        </div>
      );
    }}
  />
));

export default (props: {| location: {| pathname: string |} |}) => {
  const lang = langFromPath(props.location.pathname);
  return (
    <I18nProvider language={lang} catalogs={catalogs}>
      <TemplateWrapper {...props} lang={lang} />
    </I18nProvider>
  );
};

// eslint-disable-next-line
console.log(`
██╗     ███████╗██████╗  ██████╗██╗   ██╗
██║     ██╔════╝██╔══██╗██╔════╝╚██╗ ██╔╝
██║     █████╗  ██║  ██║██║  ███╗╚████╔╝
██║     ██╔══╝  ██║  ██║██║   ██║ ╚██╔╝
███████╗███████╗██████╔╝╚██████╔╝  ██║
╚══════╝╚══════╝╚═════╝  ╚═════╝   ╚═╝

==========================

Looking for a job? 🤓
https://ledgy.com/jobs

==========================
`);
