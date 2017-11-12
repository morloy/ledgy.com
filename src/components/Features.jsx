// @flow

import React from 'react';
import Img from 'gatsby-image';


const Feature =
({ title, text, img, right }: { title: string, text: string, img: Object, right?: boolean}) => (
  <div className="row gap-y align-items-center">
    {!right &&
    <div className="col-12 col-md-5">
      <Img className="rounded shadow-2" {...img} alt={title} />
    </div>}

    <div className="col-12 col-md-7">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>

    {right &&
    <div className="col-12 col-md-5">
      <Img className="rounded shadow-2" {...img} alt={title} />
    </div>}
  </div>
);
Feature.defaultProps = { right: false };

export default ({ data }: Object) => (
  <section className="section" id="features">
    <header className="section-header">
      <small>Features</small>
    </header>

    <div className="container">
      <Feature
        title="All your information located in one place"
        text="The current cap table is always accessible and all related documents are saved on the Ledgy cloud.
        Use the interactive charts to understand who owns what in your company at a glance."
        img={data.feature1}
      />

      <hr />

      <Feature
        right
        title="Avoid costly errors"
        text="Your cap table is built up from past transactions. Its history ensures transparency.
        Inconsistencies are automatically detected by Ledgy’s software, preparing your company for legal requirements and audits in the future."
        img={data.feature2}
      />

      <hr />

      <Feature
        title="Export and share PDFs"
        text="Per Swiss law, your share register must be signed by the Board of Directors to be valid.
        For this purpose, it can be exported as a PDF on Ledgy."
        img={data.feature3}
      />
    </div>
  </section>
);
