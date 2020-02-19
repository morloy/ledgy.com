// @flow

import React from 'react';
import { withI18n } from '@lingui/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ContentBody } from '../components/Content';
import { PageHeader } from '../components/PageHeader';
import { Title } from '../layouts/utils';
import { Accordion, AccordionItem } from '../components/Accordion';

export default withI18n()(({ i18n, data }: Props) => {
  const accordionItems = data.allContentfulGlossary.edges.map(edge => {
    const { slug, title, description } = edge.node;
    return (
      <AccordionItem id={slug} key={slug} title={title}>
        <MDXRenderer>{description.childMdx.body}</MDXRenderer>
      </AccordionItem>
    );
  });

  return (
    <div>
      <Title
        title={i18n.t`Glossary`}
        description={i18n.t`Definitions for industry terms relating to cap tables, financing rounds, and legal topics for startups.`}
      />
      <PageHeader title={i18n.t`Glossary`} />
      <ContentBody>
        <Accordion>{accordionItems}</Accordion>
      </ContentBody>
    </div>
  );
});

export const pageQuery = graphql`
  query {
    allContentfulGlossary(sort: { order: ASC, fields: [title] }) {
      edges {
        node {
          slug
          title
          description {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`;
