// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Img from 'gatsby-image';

import { FeatureLinks } from './Features';
import { Title } from '../layouts/utils';


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`ESOP`}
      section={i18n.t`Features`}
      description={i18n.t`Keep your employees motivated at work. They deserve it. Ledgy's ESOP module will help you to make it happen.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1><Trans>Employee Stock Ownership Plans</Trans></h1>
          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section overflow-hidden">
        <div className="container text-left">

          <div>
            <header className="section-header text-left">
              <h2><Trans>Make your employees happy</Trans></h2>
              <p>
                <Trans>
                  Are you building a fast-growing company and want your valuable
                  employees to be part of your success?
                  Ledgy offers you a powerful module to manage your
                  employee stock ownership plans.
                  No matter if you transfer real stock from your company to an employee,
                  options from a fixed-size pool or even phantom stock.
                  <br /><br />
                  Add a vesting schedule to your ESOPs and track their status in real-time.
                  Coolest thing ever, let your employees log into Ledgy and allow them
                  to see at any point in time how much stock they have already vested and
                  how many shares are still outstanding.
                  <br /><br />
                  Go to your <i>Transactions</i> page and click
                  the <i>Add incentive</i> button to get started.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.addIncentive} alt={i18n.t`Add incentive plan`} />
              </div>
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4">
              <p>
                <Trans>
                  You can create a detailed vesting schedule by defining over how
                  many months the shares are to be vested, if there’s a cliff and
                  how often a new batch of shares gets assigned to the employee.<br />
                  As soon as you enter the first numbers, you will see a visual representation
                  of the current schedule.
                </Trans>
              </p>
            </div>

            <div className="col-md-8 ml-auto" data-aos="fade-left">
              <Img {...props.data.vestingSchedule} alt={i18n.t`Vesting schedule for ESOPs`} />
            </div>
          </div>

          <hr className="my-8" />

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <p>
                <Trans>
                  In the case that your employee shares are implemented as options
                  or phantom stock, you might want to define an ESOP pool first.
                  Click the <i>Add pool</i> to create an options or
                  phantom stock pool of a given share class and a fixed size.
                </Trans>
              </p>
            </div>

            <div className="col-md-8 order-md-first" data-aos="fade-right">
              <Img {...props.data.addPool} alt={i18n.t`Add an incentives pool`} />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <p>
                <Trans>
                  After you have added a pool, you can select it from the incentives
                  screen.
                  Check back at your <i>Cap Table</i> and press <i>Fully diluted</i> to see
                  the newly created pool and employee incentives!
                </Trans>
              </p>
            </div>

            <div className="col-md-8" data-aos="fade-left">
              <Img {...props.data.addIncentivePsop} alt={i18n.t`Add incentives from a pool`} />
            </div>
          </div>

          <hr className="my-8" />

          <div>
            <header className="section-header text-left">
              <h1><Trans>Keep your employees engaged</Trans></h1>
              <p>
                <Trans>
                  Once your incentives are submitted to Ledgy it’s time to
                  engage your employees.
                  They are able to log into Ledgy themselves with their email
                  address at any time and see how many shares they have already vested.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.incentivesDashboard} alt={i18n.t`ESOPs in the employee dashboard`} />
              </div>
            </div>
          </div>

          <FeatureLinks {...props} i18n={i18n} page="esop" />

        </div>
      </section>


    </main>
  </div>
));


// eslint-disable-next-line no-undef
export const pageFragment = graphql`
  fragment ESOPPageFragment on RootQueryType {
    ...FeaturesFragment

    addIncentive: imageSharp(id: { regex: "/add-incentive.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    vestingSchedule: imageSharp(id: { regex: "/vesting-schedule.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    addPool: imageSharp(id: { regex: "/add-pool.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    addIncentivePsop: imageSharp(id: { regex: "/add-incentive-psop.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    incentivesDashboard: imageSharp(id: { regex: "/incentives-dashboard.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
  }
`;
