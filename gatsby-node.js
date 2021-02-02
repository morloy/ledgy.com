/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { redirects } = require('./src/redirects.ts');

const { languages, defaultLanguage } = require('./src/i18n-config.ts');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise((resolve) => {
    if (!page.component.endsWith('.mdx')) {
      deletePage(page);
      languages.forEach((language) => {
        const newPage = Object.assign({}, page, {
          originalPath: page.path,
          path: language === defaultLanguage ? page.path : `/${language}${page.path}`,
          context: { lang: language },
        });
        createPage(newPage);
      });
    }

    resolve();
  });
};

const pageQuery = `
      {
        allContentfulPage(limit: 1000) {
          edges {
            node {
              id
              slug
              namespace
            }
          }
        }
      }
    `;

const customerStoryQuery = `
      {
        allContentfulCustomerStory(limit: 1000) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `;

const featurePageQuery = `
      {
        allContentfulFeaturePage(limit: 1000) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `;

const demoQuery = `
      {
        allContentfulSignupPage(limit: 1000) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `;

const basePath = './src/layouts';

const resolvePagePromise = (query, createPageWithData) =>
  new Promise((resolve) => {
    query.then(({ errors, data }) => {
      if (errors) throw errors;
      createPageWithData(data);
      resolve();
    });
  });

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const createLocalizedPages = (pagePath, component, context) => {
    createPage({ path: pagePath, component, context });
    languages.forEach((lang) => createPage({ path: `/${lang}${pagePath}`, component, context }));
  };

  redirects.forEach(([from, toPath]) => {
    const redirectInBrowser = true;
    [from, `${from}/`].forEach((fromPath) => {
      createRedirect({ fromPath, toPath, redirectInBrowser });
      languages.forEach((lang) =>
        createRedirect({
          fromPath: `/${lang}${fromPath}`,
          toPath: `/${lang}${toPath}`,
          redirectInBrowser,
        })
      );
    });
  });

  const pageComponent = path.resolve(`${basePath}/page.tsx`);
  const createPages = resolvePagePromise(graphql(pageQuery), (data) =>
    data.allContentfulPage.edges.forEach(({ node }) => {
      const { id, slug, namespace } = node;
      const pagePath = `${namespace}${slug}/`;
      const context = { id };
      createLocalizedPages(pagePath, pageComponent, context);
    })
  );

  const customerStoryComponent = path.resolve(`${basePath}/customerStory.tsx`);
  const createCustomerStories = resolvePagePromise(graphql(customerStoryQuery), (data) =>
    data.allContentfulCustomerStory.edges.forEach(({ node }) => {
      const { id, slug } = node;
      const pagePath = `/customer-stories/${slug}/`;
      const context = { id };
      createLocalizedPages(pagePath, customerStoryComponent, context);
    })
  );

  const featurePageComponent = path.resolve(`${basePath}/featurePage.tsx`);
  const createFeaturePages = resolvePagePromise(graphql(featurePageQuery), (data) =>
    data.allContentfulFeaturePage.edges.forEach(({ node }) => {
      const { id, slug } = node;
      const pagePath = `/${slug}/`;
      const context = { id };
      createLocalizedPages(pagePath, featurePageComponent, context);
    })
  );

  const demoPageComponent = path.resolve(`${basePath}/demo.tsx`);
  const createDemoPages = resolvePagePromise(graphql(demoQuery), (data) =>
    // TODO rename in Contentful
    data.allContentfulSignupPage.edges.forEach(({ node }) => {
      const { id, slug } = node;
      const pagePath = `/demo/${slug}/`;
      const context = { id };
      createLocalizedPages(pagePath, demoPageComponent, context);
    })
  );

  const allPages = [createPages, createCustomerStories, createFeaturePages, createDemoPages];

  return Promise.all(allPages);
};
