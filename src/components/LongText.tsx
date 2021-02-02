import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Image, Lead, Anchor } from '../components/Markdown';

// eslint-disable-next-line react/display-name
const getAnchorComponent = (prefix: string) => ({
  children,
  href,
  title,
}: {
  children: string;
  href: string;
  title: string;
}) => (
  <Anchor href={href} title={title} prefix={prefix}>
    {children}
  </Anchor>
);

const getProviderComponents = (prefix: string) => ({
  a: getAnchorComponent(prefix),
  img: Image,
  Lead,
});

export const LongText = ({
  content,
  isMarkdown = true,
  className = '',
  prefix,
}: {
  content: Mdx;
  isMarkdown?: boolean;
  className?: string;
  prefix: string;
}) => {
  const components = getProviderComponents(prefix);
  return (
    <div className="d-flex justify-content-center">
      <div className={`${isMarkdown ? 'markdown' : ''} ${className}`}>
        {content && (
          <MDXProvider components={components}>
            <MDXRenderer>{content.childMdx.body}</MDXRenderer>
          </MDXProvider>
        )}
      </div>
    </div>
  );
};
