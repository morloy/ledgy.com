import React from 'react';
import { t } from '@lingui/macro';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Accordion, AccordionItem, ContentBody, PageHeader } from '../components';
import { Title } from '../layouts/utils';

type GlossaryEdge = { node: { description: Mdx; slug: string; title: string } };

const Glossary = ({ data }: Props) => {
  const accordionItems = data.allContentfulGlossary.edges.map((edge: GlossaryEdge) => {
    const { slug, title, description } = edge.node;
    return (
      <AccordionItem id={slug} key={slug} title={title}>
        <MDXRenderer>{description.childMdx.body}</MDXRenderer>
      </AccordionItem>
    );
  });
  const title = t`Glossary`;
  const description = t`Definitions for industry terms relating to cap tables, financing rounds, and legal topics for startups.`;

  return (
    <div>
      <Title title={title} description={description} />
      <PageHeader title={title} subtitle={description} />
      <ContentBody>
        <Accordion>{accordionItems}</Accordion>
      </ContentBody>
    </div>
  );
};

export default Glossary;

export const glossaryPageQuery = graphql`
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
