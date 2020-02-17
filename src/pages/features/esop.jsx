// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { faFileExcel, faGlobe, faSmile, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { FeatureLinks, FeatureList, TopPageFeatureCard } from '../../components/FeatureOld';
import { Title, ChevronRight } from '../../layouts/utils';

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`ESOP`}
      section={i18n.t`Features`}
      description={i18n.t`Save hours of work by getting rid of manual spreadsheet processes, keep track of any vesting schedule, get notified of important vesting and expiry events, get started in minutes with the spreadsheet importer.`}
    />

    <header className="header text-white">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Employee Participation Plans</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main className="main-content">
      <section className="section overflow-hidden pb-0 pt-7">
        <div className="container text-left">
          <div className="row pb-3">
            <TopPageFeatureCard
              header={<Trans>Supports everything</Trans>}
              body={<Trans>from options, to phantom and vested stock</Trans>}
              icon={faGlobe}
              href="#support"
            />
            <TopPageFeatureCard
              header={<Trans>Track any vesting schedule</Trans>}
              body={<Trans>stopping the spreadsheet mess</Trans>}
              icon={faCalendarAlt}
              href="#vesting"
            />
            <TopPageFeatureCard
              header={<Trans>Engage your employees</Trans>}
              body={<Trans>get notified of vesting events, invite employees</Trans>}
              icon={faSmile}
              href="#engage"
            />
            <TopPageFeatureCard
              header={<Trans>Spreadsheet importer</Trans>}
              body={<Trans>save time and focus on what matters</Trans>}
              icon={faFileExcel}
              href="#spreadsheet"
            />
          </div>

          <div className="row gap-y">
            <div className="col-md-12 mx-auto mb-5" data-aos="fade-up">
              <Img
                {...props.data.incentivesPage}
                alt={i18n.t`Overview over vested, granted and exercised incentives`}
              />
            </div>
          </div>
        </div>
      </section>

      <FeatureList
        textSize="5"
        header={<Trans>Supports everything</Trans>}
        features={[
          <Trans>
            Create option or phantom pools reserved for employees and keep track of how much is
            granted, available, vested and exercised
          </Trans>,
          <Trans>
            Grant options, phantom options, warrants or add reverse vesting to stock transactions
          </Trans>,
          <Trans>Track exercise, termination and expiration</Trans>
        ]}
        imgSize="7"
        img={<Img {...props.data.addOption} alt={i18n.t`Add an option pool`} />}
        id="support"
      />

      <FeatureList
        textSize="5"
        header={<Trans>Any vesting schedule</Trans>}
        features={[
          <Trans>Add vesting or reverse vesting to any transaction</Trans>,
          <Trans>
            Use simple linear vesting with duration, interval and cliff, define your own custom
            vesting schedule, or select a preset
          </Trans>,
          <Trans>Visualizations help you understand what happens</Trans>
        ]}
        imgSize="7"
        img={<Img {...props.data.addVesting} alt={i18n.t`Add vesting`} />}
        imgFirst
        id="vesting"
      />

      <FeatureList
        textSize="5"
        header={<Trans>Engage your employees</Trans>}
        features={[
          <Trans>
            Engage your employees with notifications two weeks before a cliff, vesting, or grant
            event
          </Trans>,
          <Trans>
            Invite your employees to track their stake and vesting in their Ledgy portfolio
          </Trans>
        ]}
        imgSize="7"
        img={
          <Img
            {...props.data.notificationEmail}
            alt={i18n.t`Email notification about upcoming vesting event`}
          />
        }
        link={
          <Link href to={`${props.prefix}/features/collaboration/`}>
            <Trans>Learn more about collaboration</Trans>
            <ChevronRight />
          </Link>
        }
        id="engage"
      />

      <FeatureList
        textSize="5"
        header={<Trans>Diluted cap table</Trans>}
        features={[
          <Trans>See your pools and employee participation grants in the cap table</Trans>,
          <Trans>
            Choose to only show pools or the detailed view with the grants distributed to their
            holders
          </Trans>
        ]}
        imgSize="7"
        img={<Img {...props.data.dilutedTable} alt={i18n.t`Show cap table fully diluted`} />}
        imgFirst
      />

      <FeatureList
        textSize="4"
        header={<Trans>Spreadsheet importer</Trans>}
        features={[
          <Trans>Get started in minutes with the copy-paste spreadsheet importer</Trans>,
          <Trans>Copy-pasting employee grants from your existing spreadsheet</Trans>
        ]}
        imgSize="8"
        img={<Img {...props.data.bulkEntryOptions} alt={i18n.t`Bulk entry options`} />}
        id="spreadsheet"
      />

      <section className="section overflow-hidden pt-2">
        <div className="container text-left">
          <FeatureLinks {...props} i18n={i18n} page="esop" />
        </div>
      </section>
    </main>
  </div>
));

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...FeaturesFragment

    incentivesPage: imageSharp(fluid: { originalName: { regex: "/incentives-overview.png/" } }) {
      fluid(maxWidth: 900) {
        ...GatsbyImageSharpFluid
      }
    }
    addVesting: imageSharp(fluid: { originalName: { regex: "/add-vesting.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    addOption: imageSharp(fluid: { originalName: { regex: "/add-option.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    dilutedTable: imageSharp(fluid: { originalName: { regex: "/option-diluted-captable.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    notificationEmail: imageSharp(fluid: { originalName: { regex: "/notification-email.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    bulkEntryOptions: imageSharp(fluid: { originalName: { regex: "/bulk-entry-options.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
