// @flow

import React, { type Node } from 'react';

import { LanguageHint } from '../components/Markdown';

const DEFAULT_LANG = 'en';

export const PageHeader = ({
  title,
  subtitle = '',
  lang = DEFAULT_LANG,
  documentLang = DEFAULT_LANG,
  textCenter = false
}: {|
  title: string | Node,
  subtitle?: string | Node,
  lang?: Language,
  documentLang?: Language,
  textCenter?: boolean
|}) => {
  return (
    <header className="header-custom bg-primary text-white d-flex flex-column justify-content-center mb-4 mb-md-5 mb-lg-7">
      <div className="container text-left my-4">
        <h1 className={textCenter ? 'text-center' : ''}>{title}</h1>
        {subtitle && <p className="text-lg">{subtitle}</p>}
        <LanguageHint lang={lang} documentLang={documentLang} />
      </div>
    </header>
  );
};
