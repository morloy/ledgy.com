

import React, { useEffect, Node } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { t } from "@lingui/macro";

import "typeface-open-sans"; // eslint-disable-line import/extensions
import "katex/dist/katex.min.css";
import "prism-themes/themes/prism-ghcolors.css";
import "../styles/_index.scss";

import { animateLaptop, loadSegment } from "../helpers";
import { Title } from "./utils";
import { langFromPath, langPrefix, deprefix } from "../i18n-config";

import PublicityBanner from "../components";
import Loader from "../components";
import { Nav } from "../components";
import { Footer } from "../components";
import { HelmetIndexLayout } from "../components";

type AppProps = $Exact<LayoutProps> & {
  children: Node;
};

const Initialize = ({
  segmentDestinations
}: {segmentDestinations: string[];}) => {
  useEffect(() => {
    animateLaptop();
    setTimeout(() => {
      loadSegment(segmentDestinations);
    }, 1414);
  }, []);
  return null;
};

const App = ({
  children,
  ...props
}: AppProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          segmentDestinations
        }
      }
    }
  `);
  const {
    lang
  } = props;
  const prefix = langPrefix(lang);
  const {
    siteUrl,
    segmentDestinations
  } = data.site.siteMetadata;
  const thumbnailUrl = `${siteUrl}/thumbnail-874d5c.png`;
  const pathname = deprefix(props.location.pathname);
  const isAppShell = pathname.includes('offline-plugin-app-shell-fallback');
  const isDemoPage = pathname.includes('demo');

  return <div>
      <Title title={t`Best Cap Table and Equity Plan Management Software`} description={t`Get your cap table and employee participation plans right, from the beginning. Make your financing rounds a success and engage your investors and employees. Know your data is safe and compliant. Try now for free!`} thumbnailUrl={thumbnailUrl} />
      <Initialize segmentDestinations={segmentDestinations} />
      <HelmetIndexLayout lang={lang} siteUrl={siteUrl} pathname={pathname} />
      {!isDemoPage && <Nav {...props} prefix={prefix} />}
      {isAppShell ? <Loader /> : <>
          <PublicityBanner pathname={pathname} />
          {React.cloneElement((children as {
        [key: string]: any;
      }), { prefix, lang })}
          {!isDemoPage && <Footer {...props} prefix={prefix} />}
        </>}
    </div>;
};

const Main = (props: AppProps) => {
  const lang = langFromPath(props.location.pathname);
  useEffect(() => {
    i18n.activate(lang);
  }, [lang]);
  return <I18nProvider i18n={i18n}>
      <App {...props} lang={lang} />
    </I18nProvider>;
};

export default Main;

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
