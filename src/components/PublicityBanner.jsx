// @flow

import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Banner = ({ content, hide }: { content: Mdx, hide: () => void }) => (
  <div className="publicity-banner position-fixed text-center bg-white border border-gray rounded p-4">
    <MDXRenderer>{content.childMdx.body}</MDXRenderer>
    <button
      className="publicity-banner--button position-absolute bg-transparent border-0 p-2 p-lg-4 rounded-circle"
      onClick={hide}
    >
      ×
    </button>
  </div>
);

const isVisibleNow = ({ node }: {| node: {| startAt: string, endAt: string |} |}) => {
  const now = 1569666271165;
  return new Date(node.startAt).getTime() <= now && new Date(node.endAt).getTime() >= now;
};

export default () => {
  const [show, setShow] = useState(true);
  if (!show) return null;

  const result = useStaticQuery(
    graphql`
      {
        allContentfulBanner {
          edges {
            node {
              title
              startAt
              endAt
              content {
                childMdx {
                  body
                }
              }
            }
          }
        }
      }
    `
  );
  const banner = result.allContentfulBanner.edges.find(isVisibleNow);
  if (!banner) return null;

  return <Banner content={banner.node.content} hide={() => setShow(false)} />;
};
