// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Img from 'gatsby-image';

import { FeatureLinks } from './Features';
import { Title } from '../layouts/utils';


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Investor Dashboard`}
      section={i18n.t`Features`}
      description={i18n.t`Investors love to track the progress of their companies. Help them to be excited about what you have achieved.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1><Trans>Investor Dashboard</Trans></h1>
          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section overflow-hidden">
        <div className="container text-left">

          <div>
            <header className="section-header text-left">
              <h2><Trans>Your portfolio at a glance</Trans></h2>
              <p>
                <Trans>
                  As an investor, you can profit a lot from Ledgy.
                  Any of your portfolio companies that use the platform will
                  appear on your investment dashboard.
                  See your key performance indicators of your investments at a glance.
                  <br /><br />
                  Never lose track of how much you invested in which company and what’s
                  the approximate value of your investments today.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-8 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.dashboardCards} alt={i18n.t`Investment overview`} />
              </div>
            </div>
          </div>

          <div>
            <header className="section-header text-left">
              <p>
                <Trans>
                  The detailed investment table gives an overview of the metrics of
                  your investments. Check out what’s your stake in the company,
                  how many shares you own and how much you initially invested.
                  <br />
                  Each valuation update that the founders enter into their share register on Ledgy
                  will be reflected in the current value of your shares and your return.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-left">
                <Img {...props.data.dashboardShares} alt={i18n.t`Share details`} />
              </div>
            </div>
          </div>

          <div>
            <header className="section-header text-left mt-3">
              <p>
                <Trans>
                  The transaction history will tell you exactly what happened to
                  your shares at what time.
                  Keep track of when you bought or sold shares and at which price. See which
                  options you are currently holding or how much interest is currently
                  on your convertible and whether there was a cap or discount.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up-right">
                <Img {...props.data.dashboardHistory} alt={i18n.t`Transaction history`} />
              </div>
            </div>
          </div>

          <FeatureLinks {...props} i18n={i18n} page="investors" />

        </div>
      </section>


    </main>
  </div>
));


// eslint-disable-next-line no-undef
export const pageFragment = graphql`
  fragment InvestorsPageFragment on RootQueryType {
    ...FeaturesFragment

    dashboardCards: imageSharp(id: { regex: "/dashboard-cards.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    dashboardShares: imageSharp(id: { regex: "/dashboard-shares.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    dashboardHistory: imageSharp(id: { regex: "/dashboard-history.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
  }
`;
