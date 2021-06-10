import { ledgyDomain } from './constants';
import { loadSegment, loadCapterra, loadG2 } from './snippets';

const getDestinations = (destinations: string[]): Record<string, boolean> =>
  destinations.reduce((res, v) => ({ ...res, [v]: true }), { All: false });

const SEGMENT_COOKIE_ID = 'ajs_anonymous_id';
const HAS_ACCOUNT_COOKIE_ID = 'hasAccount';
const cookieLifetime = 60 * 60 * 24 * 365;

export const getCookie = (name: string) =>
  typeof document === 'object'
    ? (document.cookie.split('; ').find((v) => v.startsWith(name)) || '').slice(name.length + 1)
    : '';

export const setDomainCookie = (name: string, value: string) => {
  const cookie = `${name}=${value}; domain=${ledgyDomain}; path=/; max-age=${cookieLifetime}`;
  document.cookie = cookie;
};

export const hasAcceptedCookies = () => !!getCookie(SEGMENT_COOKIE_ID);
export const hasLedgyAccount = () => !!getCookie(HAS_ACCOUNT_COOKIE_ID);

export const loadMarketingTools = async (segmentDestinations: string[]) => {
  await loadSegment(getDestinations(segmentDestinations));
  loadG2();
  loadCapterra();
};
