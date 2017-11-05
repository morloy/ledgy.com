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
        title="All information in one place"
        text="Always have the current cap table ready and save all related documents in the Ledgy cloud.
        Understand who owns what in your company at a glance through the interactive charts."
        img={data.feature1}
      />

      <hr />

      <Feature
        right
        title="Avoid costly errors"
        text="Your cap table is built up from the past transactions.
        Its history ensures transparency and inconsistencies are automatically detected by the software.
        This prepares your company for legal requirements and audits in the future."
        img={data.feature2}
      />

      <hr />

      <Feature
        title="Export and share pdf"
        text="Legally in Switzerland your stock ledger has to be signed by
        the board of directors to be valid. For this purpose it can be exported as pdf on Ledgy."
        img={data.feature3}
      />
    </div>
  </section>
);
