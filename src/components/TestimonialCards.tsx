import React from 'react';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const TestimonialCard = ({ card }: { card: TestimonialCardProps }) => {
  const { logo, signature, text, linkText, linkPath } = card;
  const { childImageSharp } = logo?.localFile || {};

  return (
    <div className="col-12 mb-4 mb-xl-0 col-xl-6">
      <div className="p-5 card-border-style h-100 d-flex flex-column justify-content-between">
        <div>
          {!!childImageSharp && <Img {...childImageSharp} />}
          <p className="my-5">
            <MDXRenderer>{text.childMdx.body}</MDXRenderer>
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="my-0 text-muted">{signature}</p>
          <a href={linkPath} className="my-0 ">
            {`${linkText} >`}
          </a>
        </div>
      </div>
    </div>
  );
};

export const TestimonialCards = ({ cards }: { cards: TestimonialCardProps[] }) => (
  <div className="container p-4">
    <div className="row">
      {cards.map((v) => (
        <TestimonialCard key={v.logo.title} card={v} />
      ))}
    </div>
  </div>
);
