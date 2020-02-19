// @flow

import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import { Image, Lead } from '../components/Markdown';

export const LongText = ({
  content,
  isMarkdown = true,
  className = ''
}: {|
  content: Mdx,
  isMarkdown?: boolean,
  className?: string
|}) => (
  <div className="d-flex justify-content-center">
    <div className={`${isMarkdown ? 'markdown' : ''} ${className}`}>
      {content && (
        <MDXProvider components={{ img: Image, Lead }}>
          <MDXRenderer>{content.childMdx.body}</MDXRenderer>
        </MDXProvider>
      )}
    </div>
  </div>
);
