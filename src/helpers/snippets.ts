// @ts-nocheck
/* eslint-disable */

export const loadSegment = (integrations: Record<string, boolean>): Promise<void> => new Promise((resolve) => {
  !(function () {
    const analytics = (window.analytics = window.analytics || []);
    if (!analytics.initialize)
      if (analytics.invoked)
        window.console && console.error && console.error('Segment snippet included twice.');
      else {
        analytics.invoked = !0;
        analytics.methods = [
          'trackSubmit',
          'trackClick',
          'trackLink',
          'trackForm',
          'pageview',
          'identify',
          'reset',
          'group',
          'track',
          'ready',
          'alias',
          'debug',
          'page',
          'once',
          'off',
          'on',
          'addSourceMiddleware',
          'addIntegrationMiddleware',
          'setAnonymousId',
          'addDestinationMiddleware',
        ];
        analytics.factory = function (t) {
          return function () {
            const e = Array.prototype.slice.call(arguments);
            e.unshift(t);
            analytics.push(e);
            return analytics;
          };
        };
        for (let t = 0; t < analytics.methods.length; t++) {
          const e = analytics.methods[t];
          analytics[e] = analytics.factory(e);
        }
        analytics.load = function (t, e) {
          const n = document.createElement('script');
          n.type = 'text/javascript';
          n.async = !0;
          n.src = 'https://cdn.segment.com/analytics.js/v1/' + t + '/analytics.min.js';
          n.onerror = resolve;
          const a = document.getElementsByTagName('script')[0];
          a.parentNode.insertBefore(n, a);
          analytics._loadOptions = e;
        };
        analytics.SNIPPET_VERSION = '4.1.0';
        analytics.load('mfLUo1gAa0xfzIR2xANV10NG8qN1IZnu', { integrations });
        analytics.ready(resolve);
        analytics.page();
      }
  })();
});

export const loadG2 = () => {
  (function (c, p, d, u, id, i) {
    id = ''; // Optional Custom ID for user in your system
    u =
      'https://tracking.g2crowd.com/attribution_tracking/conversions/' +
      c +
      '.js?p=' +
      encodeURI(p) +
      '&e=' +
      id;
    i = document.createElement('script');
    i.type = 'application/javascript';
    i.async = true;
    i.src = u;
    d.getElementsByTagName('head')[0].appendChild(i);
  })('3729', document.location.href, document);
};

export const loadCapterra = () => {
  (function () {
    const capterra_vkey = 'a12f04cb89eededafd612ba40d2d149b',
      capterra_vid = '2120646',
      capterra_prefix =
        'https:' == document.location.protocol
          ? 'https://ct.capterra.com'
          : 'http://ct.capterra.com';
    const ct = document.createElement('script');
    ct.type = 'text/javascript';
    ct.async = true;
    ct.src =
      capterra_prefix + '/capterra_tracker.js?vid=' + capterra_vid + '&vkey=' + capterra_vkey;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ct, s);
  })();
};
