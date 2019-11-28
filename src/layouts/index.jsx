// @flow

import React, { useEffect, type Node } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { I18nProvider, withI18n } from '@lingui/react';
import { Helmet } from 'react-helmet';
import 'typeface-roboto-slab'; // eslint-disable-line import/extensions
import 'typeface-work-sans'; // eslint-disable-line import/extensions
import 'katex/dist/katex.min.css';
import 'prism-themes/themes/prism-ghcolors.css';

import { Title, name, loadScript, animateTablet } from './utils';
import { catalogs, langFromPath, langPrefix, deprefix } from '../i18n-config';

import '../assets/scss/page.scss';

import PublicityBanner from '../components/PublicityBanner';
import Loader from '../components/Loader';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

type SiteProps = {
  ...$Exact<Props>,
  lang: string,
  children: Node,
  location: { pathname: string }
};

const Initialize = () => {
  useEffect(() => {
    animateTablet();
    setTimeout(async () => {
      require('../assets/js/page'); // eslint-disable-line global-require
      require('../assets/js/script'); // eslint-disable-line global-require
      require('../assets/js/hotjar'); // eslint-disable-line global-require

      await loadScript('https://wchat.eu.freshchat.com/js/widget.js');
      window.fcSettings = {
        token: 'e9a5ae2c-ad84-42c8-8786-a893acbca8b3',
        host: 'https://wchat.eu.freshchat.com',
        siteId: 'landing-page',
        config: {
          cssNames: {
            widget: 'custom_fc_frame',
            expanded: 'custom_fc_expanded'
          },
          headerProperty: { backgroundColor: '#0086a9' }
        }
      };
      await loadScript('https://snippets.freshchat.com/js/fc-pre-chat-form-v2.js');
      window.fcPreChatform.fcWidgetInit({
        heading: 'Ledgy',
        textBanner: 'Please tell us a bit about yourself.',
        SubmitLabel: 'Go',
        fields: {
          field1: {
            type: 'name',
            label: 'Name',
            fieldId: 'name',
            required: 'yes',
            error: 'Please enter your name'
          },
          field2: {
            type: 'email',
            label: 'Email',
            fieldId: 'email',
            required: 'yes',
            error: 'Please enter a valid email'
          }
        }
      });
      window.fcWidget.init(window.fcSettings);
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
          <div>
            <PublicityBanner pathname={pathname} />
          </div>
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

Looking for a job?
https://ledgy.com/jobs

==========================
`);
