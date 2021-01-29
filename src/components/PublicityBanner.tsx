

import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Banner = ({
  content,
  hide
}: {content: Mdx;hide: () => void;}) => <div className="publicity-banner position-fixed text-center bg-white border border-gray rounded ">
    <div className="m-4 pt-4 pt-md-0">
      <MDXRenderer>{content.childMdx.body}</MDXRenderer>
    </div>
    <button className="publicity-banner--button position-absolute bg-transparent border-0 p-4 rounded-circle" onClick={hide}>
      ×
    </button>
  </div>;

const isVisibleNow = ({
  node
}: {node: {startAt: string;endAt: string;};}) => {
  const now = Date.now();
  return new Date(node.startAt).getTime() <= now && new Date(node.endAt).getTime() >= now;
};

const bannerQuery = graphql`
  {
    allContentfulBanner {
      edges {
        node {
          title
          hideOnPage
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
`;

export default (({
  pathname
}: {pathname: string;}) => {
  const result = useStaticQuery(bannerQuery);
  const [banner] = result.allContentfulBanner.edges;
  if (!banner) return null;

  const {
    content,
    hideOnPage
  } = banner.node;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isVisibleNow(banner) || pathname.includes(hideOnPage)) return;

    setShow(true);
  }, []);

  return show ? <Banner content={content} hide={() => setShow(false)} /> : null;
});