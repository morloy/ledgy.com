import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Section, LinkWithChevron, CustomFade, Image } from './utils';

const TestimonialCard = ({
  card,
  prefix,
  index,
}: {
  card: TestimonialCardProps;
  prefix: string;
  index: number;
}) => {
  const { logo, signature, text, linkText, linkUrl } = card;

  return (
    <CustomFade translate="0, 100px" delay={index * 200} className="col-12 mb-4 mb-xl-0 col-xl-6">
      <div className="p-4 p-lg-5 card-border-style h-100 d-flex flex-column justify-content-between">
        <div>
          <Image image={logo} />
          <div className="my-5">
            <MDXRenderer>{text.childMdx.body}</MDXRenderer>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <p className="my-0 text-muted flex-1">{signature}</p>
          {!!(linkText && linkUrl) && (
            <LinkWithChevron
              to={linkUrl}
              text={linkText}
              className="my-0 d-flex align-items-end justify-content-end flex-1"
              prefix={prefix}
            />
          )}
        </div>
      </div>
    </CustomFade>
  );
};

export const TestimonialCards = ({ cards, prefix }: TestimonialCardsProps & { prefix: string }) => (
  <Section>
    <div className="row">
      {cards.map((v, i) => (
        <TestimonialCard key={v.signature} card={v} prefix={prefix} index={i} />
      ))}
    </div>
  </Section>
);
