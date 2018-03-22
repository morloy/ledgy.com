// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Link from 'gatsby-link';

import { Feature } from './Features';
import { Title } from '../layouts/utils';

const Hr = () => <hr className="my-3" />;


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title title={i18n.t`Features`} />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">

            <h1><Trans>Manage your shares.<br />Not your Excel.</Trans></h1>

          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section pt-5">
        <div className="container">

          <Feature
            {...props}
            name={i18n.t`Consistency`}
            title={i18n.t`Guaranteed Error-Free`}
            url="consistency"
          >
            <Trans>
              Did you know that many share registers are incomplete or
              contain errors?
              Building a share register with Excel or Word can easily lead to
              inconsistencies.
              Set up your shares with Ledgy
              and be sure that all data is consistent at any time.
            </Trans>
          </Feature>

          <Hr />

          <Feature
            {...props}
            name={i18n.t`Financing Round Modeling`}
            url="round-modeling"
            left
          >
            <Trans>
              What’s the stake percentage of the founders after a VC
              invests $2,000,000 at a valuation of $7,500,000 taking into account
              the 2 outstanding convertible loans and increasing the ESOP pool?<br />
              Honestly, we don’t know. But Ledgy does.
            </Trans>
          </Feature>

          <Hr />

          <Feature
            {...props}
            name={i18n.t`Employee Stock Ownership Plans`}
            url="esop"
          >
            <Trans>
              Let your employees be part of your company’s success.
              Ledgy supports vested stock, options, inverse vesting,
              ESOP pools, and much more.<br />
              Employees can even log into Ledgy and track their vested shares in real-time.
            </Trans>
          </Feature>

          <Hr />

          <Feature
            {...props}
            name={i18n.t`Reporting & Documents`}
            url="reporting"
            left
          >
            <Trans>
              Oh, it’s tax season again and there are 50 holding confirmations
              waiting to be sent to your shareholders.
              This means pasting names into document templates,
              computing the tax value of all shares… <br />
              Don’t worry. Generate and send all important documents with a single click on Ledgy.
            </Trans>
          </Feature>

          <Hr />

          <Feature
            {...props}
            title={i18n.t`Investor Dashboard`}
            name={i18n.t`the Investor Dashboard`}
            url="investors"
          >
            <Trans>
              You are an investor and want to track your portfolio companies?
              The founders are busy and the numbers they give you are different
              from your own records?<br />
              With their share register on Ledgy, there’s only a single source of truth.
              Convince your companies and you will never miss anything regarding your investments.
            </Trans>
          </Feature>


          <hr className="my-8 w-20" />

          <div className="row gap-y text-center">

            <div className="col-md-6 offset-xl-2 col-xl-4">
              <i className="text-primary fa fa-shield fa-3x mb-2" />
              <h5><Trans>Privacy</Trans></h5>
              <p>
                <Trans>
                  Cap table data is sensitive.
                  That’s why we deeply care about your privacy.
                </Trans>
                <br />
                <Link href to={`${props.prefix}/privacy/`}><Trans>Read more</Trans>  <i className="ti-angle-right fs-10 ml-1" /></Link>
              </p>
            </div>

            <div className="col-md-6 col-xl-4">
              <i className="text-success fa fa-lock fa-3x mb-2" />
              <h5><Trans>Security</Trans></h5>
              <p>
                <Trans>
                  Your data is safe with us. Enjoy the highest security standards. No kidding.
                </Trans>
                <br />
                <Link href to={`${props.prefix}/security/`}><Trans>Read more</Trans>  <i className="ti-angle-right fs-10 ml-1" /></Link>
              </p>
            </div>
          </div>

        </div>
      </section>


      <p className="col-md-6 offset-md-5 text-right text-lighter small-2">
        <Trans>Illustrations by</Trans> <a href="https://www.freepik.com/alekksall">Alekksall</a>
      </p>

    </main>
  </div>
));


// eslint-disable-next-line no-undef
export const pageFragment = graphql`
  fragment FeaturesPageFragment on RootQueryType {
    ...FeaturesFragment
  }
`;
