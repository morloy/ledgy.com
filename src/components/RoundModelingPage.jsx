// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Img from 'gatsby-image';

import { FeatureLinks } from './Features';
import { Title } from '../layouts/utils';


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Financing Round Modeling`}
      section={i18n.t`Features`}
      description={i18n.t`Simulate the outcome of your upcoming financing rounds. Detailed models give you a headstart over angels and VCs.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1><Trans>Financing Round Modeling</Trans></h1>
          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section overflow-hidden">
        <div className="container text-left">

          <div>
            <header className="section-header text-left">
              <h2>
                <Trans>
                  Explore new scenarios for upcoming financing rounds interactively
                </Trans>
              </h2>
              <p>
                <Trans>
                  Is your startup running well and you’re already thinking about
                  a new financing round to fuel your growth and take your
                  company to the next level?
                  <br />
                  <br />
                  Enter a valuation and you will see how your convertibles apply
                  to your cap table immediately.
                  If your convertible has a cap, discount or
                  an interest—Ledgy does the math for you.
                  Add an investment and enter the value of the investment.
                  Watch in real-time how the new investment impacts your current
                  shareholder distribution.
                  <br />
                  <br />
                  You can find the round modeling tool directly on
                  the <i>Cap Table</i> page.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.roundModelingSample} alt={i18n.t`Round Modeling`} />
              </div>
            </div>
          </div>

          <div>
            <header className="section-header text-left">
              <p>
                <Trans>
                  Scroll down and you will notice that the cap table now
                  indicates the <i>Round Modeling</i> mode.
                  This gives you a detailed overview of who owns how many shares
                  after applying the new financing round. Cool, eh?
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-left">
                <Img {...props.data.roundModelingCaptable} alt={i18n.t`Cap table during round modeling`} />
              </div>
            </div>
          </div>

          <div>
            <header className="section-header text-left mt-3">
              <h2><Trans>Share your scenarios</Trans></h2>
              <p>
                <Trans>
                  After you’re finished with modeling your financing round, you can
                  download the scenario as a PDF document and share it with your co-founders,
                  lawyers and investors.
                  The document includes the pre- and post-money valuation of your company,
                  all investments, and convertibles with their resulting share price
                  and the number of shares and, of course, the resulting cap table.
                  At the end of the document, you will also find valuable plots to visualize the new
                  development step of your company.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up-right">
                <Img {...props.data.roundModelingPdf} alt={i18n.t`PDF export of the financing round`} />
              </div>
            </div>
          </div>

          <hr className="my-8" />


          <div className="row align-items-center">
            <div className="col-md-6 ml-auto">
              <h2><Trans>Convert to transactions</Trans></h2>
              <p>
                <Trans>
                  As soon as you’re done with your financing round, hit the <i>Convert</i> button.
                  This will transform the scenario into real transactions for your
                  share register and make it visible to all shareholders and investors.
                </Trans>
              </p>
            </div>

            <div className="col-md-5" data-aos="fade-left">
              <Img {...props.data.roundModelingConvert} alt={i18n.t`Convert financing round`} />
            </div>
          </div>

          <FeatureLinks {...props} i18n={i18n} page="round-modeling" />

        </div>
      </section>


    </main>
  </div>
));


// eslint-disable-next-line no-undef
export const pageFragment = graphql`
  fragment RoundModelingPageFragment on RootQueryType {
    ...FeaturesFragment

    roundModelingSample: imageSharp(id: { regex: "/round-modeling-sample.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    roundModelingCaptable: imageSharp(id: { regex: "/round-modeling-captable.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    roundModelingPdf: imageSharp(id: { regex: "/round-modeling-pdf.png/" }) {
      sizes(maxWidth: 2000) { ...GatsbyImageSharpSizes }
    }
    roundModelingConvert: imageSharp(id: { regex: "/round-modeling-convert.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
  }
`;
