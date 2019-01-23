// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { Link } from 'gatsby';

import { Title, Li } from '../layouts/utils';


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Pricing`}
      description={i18n.t`Ledgy scales with your needs. Free for startups, powerful for grown-ups.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">

            <h1><Trans>Pricing</Trans></h1>

          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section">
        <div className="container">
          <header className="section-header">
            <p>
              <Trans>
                Ledgy scales with your needs. Free for startups, powerful for grown-ups.
              </Trans>
            </p>
          </header>


          <div className="row gap-y">


            <div className="col-lg-4">
              <div className="pricing-3 border rounded">
                <h6><Trans>Startup</Trans></h6>
                <h2><Trans>Free</Trans></h2>
                <small className="text-muted">&nbsp;</small>
                <ul className="text-left mt-6 mb-0">
                  <Li><Trans>Error-free cap table</Trans></Li>
                  <Li><Trans>Round modeling</Trans></Li>
                  <Li><Trans>Convertibles</Trans></Li>
                  <Li><Trans>Access rights</Trans></Li>
                </ul>
                <br />
                <a className="btn btn-round btn-outline-primary w-200" href="#try">Get started</a>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="pricing-3 popular border rounded">
                <h6><Trans>Pro</Trans></h6>
                <h2><Trans>€79/month</Trans></h2>
                <small className="text-muted"><Trans>€99/month if billed monthly</Trans></small>
                <ul className="text-left mt-6 mb-0">
                  <Li><Trans>All free features</Trans></Li>
                  <Li><Trans>Employee participation plans</Trans></Li>
                  <Li><Trans>Email notifications</Trans></Li>
                  <Li><Trans>Exit modeling</Trans></Li>
                </ul>
                <br />
                <a className="btn btn-round btn-primary w-200" href="#try">Get started</a>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="pricing-3 border rounded">
                <h6><Trans>Enterprise</Trans></h6>
                <h2><Trans>Contact us</Trans></h2>
                <small className="text-muted">&nbsp;</small>
                <ul className="text-left mt-6 mb-0">
                  <Li><Trans>All pro features</Trans></Li>
                  <Li><Trans>Grant automation</Trans> <span className="badge badge-pill badge-success badge-number badge-pale ml-1">soon</span></Li>
                  <Li><Trans>Digital signatures</Trans> <span className="badge badge-pill badge-success badge-number badge-pale ml-1">soon</span></Li>
                  <Li><Trans>Free cap table import</Trans></Li>
                </ul>
                <br />
                <a className="btn btn-round btn-outline-primary w-200" href="#try">Get started</a>
              </div>
            </div>

          </div>

          <p className="mx-auto text-center mt-6">
            <Trans>
              Unable to find your perfect fit?<br />
              <a href="mailto:contact@ledgy.com">Drop us an email</a> or use the chat right on this page.
            </Trans>
            <br /><br />
            <Link href to={`${props.prefix}/features/`} className="btn btn-block d-sm-inline btn-round btn-xl btn-outline-primary mt-6" >
              <Trans>Discover all cap table features</Trans>
            </Link>
          </p>

        </div>
      </section>


    </main>
  </div>
));
