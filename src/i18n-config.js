const compose = require('lodash/fp/compose');
const pick = require('lodash/fp/pick');
const flatten = require('lodash/fp/flatten');
const values = require('lodash/fp/values');
const compact = require('lodash/fp/compact');
const { i18n } = require('@lingui/core');
const { en, de, fr } = require('make-plural/plurals');

const defaultLanguage = 'en';
const languages = [defaultLanguage, 'de', 'fr'];

const enCollection = require('./locale/en/messages'); // eslint-disable-line
const deCollection = require('./locale/de/messages'); // eslint-disable-lin e
const frCollection = require('./locale/fr/messages'); // eslint-disable-line

i18n.loadLocaleData('en', { plurals: en });
i18n.loadLocaleData('de', { plurals: de });
i18n.loadLocaleData('fr', { plurals: fr });

i18n.load({ en: enCollection.messages, de: deCollection.messages, fr: frCollection.messages });
i18n.activate(defaultLanguage);

const langPrefix = (lang) => (lang === defaultLanguage ? '' : `/${lang}`);
const deprefix = (pathname) =>
  pathname[0] === '/' && pathname[3] === '/' ? pathname.substr(3) : pathname;
const langFromPath = (pathname) => {
  const lang = pathname.split('/')[1];
  return languages.includes(lang) ? lang : defaultLanguage;
};

const browserLanguagePropertyKeys = [
  'languages',
  'language',
  'browserLanguage',
  'userLanguage',
  'systemLanguage',
];
const getLocale = () =>
  compose(
    compact,
    flatten,
    values,
    pick(browserLanguagePropertyKeys)
  )(window.navigator)
    .map((s) => s.substr(0, 2))
    .find((s) => languages.includes(s)) || defaultLanguage;

exports.defaultLanguage = defaultLanguage;
exports.languages = languages;
exports.langPrefix = langPrefix;
exports.deprefix = deprefix;
exports.langFromPath = langFromPath;
exports.getLocale = getLocale;
