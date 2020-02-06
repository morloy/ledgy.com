const {
  CONTEXT,
  URL,
  DEPLOY_PRIME_URL,
  NODE_ENV,
  BRANCH,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN
} = process.env;
const src = `${__dirname}/src`;

const { ContentSecurityPolicy } = require('./src/helpers/contentSecurityPolicy');

module.exports = {
  siteMetadata: {
    siteUrl:
      (CONTEXT === 'production' && URL) ||
      DEPLOY_PRIME_URL ||
      `http://localhost:${NODE_ENV === 'production' ? 9 : 8}000`,
    branch: BRANCH || 'development'
  },
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-plugin-flow',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-nprogress',
    'gatsby-plugin-sitemap',
    { resolve: 'gatsby-source-filesystem', options: { name: 'img', path: `${src}/img` } },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        host: BRANCH ? 'cdn.contentful.com' : 'preview.contentful.com',
        downloadLocal: true
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-katex',
          'gatsby-remark-prismjs',
          'gatsby-remark-unwrap-images'
        ]
      }
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-102106007-1', allowLinker: true }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ledgy',
        short_name: 'Ledgy',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0086a9',
        display: 'minimal-ui',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            `Content-Security-Policy: ${ContentSecurityPolicy}`,
            'Referrer-Policy: strict-origin-when-cross-origin',
            'Access-Control-Allow-Origin: https://www.ledgy.com',
            'Access-Control-Allow-Credentials: true'
          ]
        }
      }
    },
    { resolve: 'gatsby-plugin-netlify-cache', options: { cachePublic: true } },
    'gatsby-plugin-offline'
  ]
};
