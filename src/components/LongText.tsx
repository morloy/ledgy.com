

import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { Image, Lead, Anchor } from "../components/Markdown";

const getProviderComponents = (prefix: string) => ({
  a: props => <Anchor {...props} prefix={prefix} />,
  img: Image,
  Lead
});

export const LongText = ({
  content,
  isMarkdown = true,
  className = '',
  prefix
}: {
  content: Mdx;
  isMarkdown?: boolean;
  className?: string;
  prefix: string;
}) => {
  const components = getProviderComponents(prefix);
  return <div className="d-flex justify-content-center">
      <div className={`${isMarkdown ? 'markdown' : ''} ${className}`}>
        {content && <MDXProvider components={components}>
            <MDXRenderer>{content.childMdx.body}</MDXRenderer>
          </MDXProvider>}
      </div>
    </div>;
};