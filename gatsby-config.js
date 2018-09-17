module.exports = {
  siteMetadata: { siteUrl: 'https://www.ledgy.com' },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-nprogress',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: { id: 'GTM-P48JT9B' },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ledgy',
        short_name: 'Ledgy',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#20a8d8',
        display: 'minimal-ui',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        navigateFallback: null,
        navigateFallbackWhitelist: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          "Content-Security-Policy: default-src https: data: 'unsafe-inline' 'unsafe-eval'; img-src 'self' data: https://csi.gstatic.com https://www.google-analytics.com https://maps.gstatic.com https://maps.googleapis.com https://stats.g.doubleclick.net; object-src 'none'; font-src 'self' data: https://fonts.gstatic.com",
          'Referrer-Policy: strict-origin-when-cross-origin',
        ],
      },
    },
  ],
};
