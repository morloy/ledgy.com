// @flow

export const name = 'Ledgy';

// external URLs
export const appUrl = 'https://app.ledgy.com';

export const demoUrl = 'https://demo.ledgy.com';

export const calculatorUrl = 'https://calculator.ledgy.com';

export const githubUrl = 'https://github.com/morloy/ledgy.com/';

export const forbesUrl = 'https://www.forbesdach.com/30-under-30.html';

export const economistUrl =
  'https://www.economist.com/business/2019/07/06/new-firms-help-startups-keep-track-of-their-owners';

export const wirtschaftswocheUrl =
  'https://gruender.wiwo.de/ledgy-plattform-fuer-beteiligungsmanagement-erhaelt-anschubfinanzierung/';

export const top100Url = 'https://www.top100startups.swiss/index.cfm?page=136340';

// netlify & mixpanel
const isNetlify = typeof window !== 'undefined' && window.location.hostname !== 'localhost';
export const mixpanelUrl = isNetlify ? '/api' : 'https://api.mixpanel.com';

export const MIXPANEL_TOKEN = isNetlify
  ? '258b9724a7ad7271dd2e3e3440bb68fd'
  : '7f124dd9a799a7c687dc38ee554d9876';

// form states
export const FORM_STATES = Object.freeze({
  IDLE: 'idle',
  LOADING: 'loading',
  ERROR: 'error',
  SUBMITTED: 'submitted',
  INVALID: 'invalid',
  INVALID_EMAIL: 'invalid-email',
  INVALID_FIELDS: 'invalid-fields'
});

// plan names
export const LEDGY_PLANS = Object.freeze({
  STARTUP: 'Startup',
  SCALEUP: 'Scaleup',
  ENTERPRISE: 'Enterprise'
});

// company sizes
export const COMPANY_SIZES = ['1–10', '11–50', '51–100', '101–250', '251+'];
export const SMALL_COMPANY_SIZES: string[] = COMPANY_SIZES.slice(0, 2);

// email validation
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
export const isValidEmail = (email: string) => EMAIL_REGEX.test(email);

// misc
export const isBrowser = typeof window !== 'undefined';
export const isDevelopment = isBrowser && window.location.hostname === 'localhost';

export const targetBlank = { target: '_blank', rel: 'noopener noreferrer' };
