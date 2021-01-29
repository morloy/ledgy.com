import { t } from '@lingui/macro';
import { Helmet } from 'react-helmet';
import React from 'react';
import { name, getLdJson } from '../helpers';

export const HelmetIndexLayout = ({ lang, siteUrl, pathname }) => (
  <Helmet>
    <html lang={lang} />
    <meta
      name="keywords"
      content={t`cap table, stock ledger, share register, startup, modeling, financing round, equity, esop, phantom, option plan, virtual, portfolio, reporting, investors`}
    />
    <meta name="author" content="Ledgy" />
    <script type="application/ld+json">{getLdJson(siteUrl)}</script>

    {/* Facebook social card */}
    <meta property="og:site_name" content={name} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${siteUrl}${pathname}`} />

    {/* Twitter social card */}
    <meta name="twitter:site" content="@Ledgy" />
    <meta name="twitter:card" content="summary_large_image" />

    <link rel="alternate" href={`${siteUrl}${pathname}`} hrefLang="x-default" />
    <link rel="alternate" href={`${siteUrl}${pathname}`} hrefLang="en" />
    <link rel="alternate" href={`${siteUrl}/de${pathname}`} hrefLang="de" />
    <link rel="alternate" href={`${siteUrl}/fr${pathname}`} hrefLang="fr" />
    <script src="https://www.googleoptimize.com/optimize.js?id=OPT-PHR22QK" />
    <script>
      {`
                (function (c, p, d, u, id, i) {
                  id = ''; // Optional Custom ID for user in your system
                  u = 'https://tracking.g2crowd.com/attribution_tracking/conversions/' + c + '.js?p=' + encodeURI(p) + '&e=' + id;
                  i = document.createElement('script');
                  i.type = 'application/javascript';
                  i.async = true;
                  i.src = u;
                  d.getElementsByTagName('head')[0].appendChild(i);
                }("3729", document.location.href, document));
              `}
    </script>
    <script>
      {`
                (function() {
                  var capterra_vkey = 'a12f04cb89eededafd612ba40d2d149b',
                  capterra_vid = '2120646',
                  capterra_prefix = (('https:' == document.location.protocol)
                    ? 'https://ct.capterra.com' : 'http://ct.capterra.com');
                  var ct = document.createElement('script');
                  ct.type = 'text/javascript';
                  ct.async = true;
                  ct.src = capterra_prefix + '/capterra_tracker.js?vid='
                    + capterra_vid + '&vkey=' + capterra_vkey;
                  var s = document.getElementsByTagName('script')[0];
                  s.parentNode.insertBefore(ct, s);
                })();
              `}
    </script>

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
);
