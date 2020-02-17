// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import {
  faFileExcel,
  faExchangeAlt,
  faUsers,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';

import { FeatureLinks, FeatureList, TopPageFeatureCard } from '../../components/FeatureOld';
import { Title, ChevronRight } from '../../layouts/utils';

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Intuitive and correct from the beginning`}
      section={i18n.t`Features`}
      description={i18n.t`Intuitive, legally valid, and error-free cap table from the beginning, supporting all transaction types, unlimited share classes, pooled investments, and numbered shares.`}
    />

    <header className="header text-white">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Trust your Cap Table</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main className="main-content">
      <section className="section overflow-hidden pb-0 pt-7">
        <div className="container text-left">
          <div className="row pb-8">
            <TopPageFeatureCard
              header={<Trans>Transaction-based</Trans>}
              body={<Trans>saving you hours during due diligence</Trans>}
              icon={faExchangeAlt}
              href="#transactions"
            />
            <TopPageFeatureCard
              header={<Trans>Pooled investments</Trans>}
              body={<Trans>and numbered shares are natively supported</Trans>}
              icon={faUsers}
              href="#pooled"
            />
            <TopPageFeatureCard
              header={<Trans>Attach documents</Trans>}
              body={<Trans>to prove your transactions</Trans>}
              icon={faPaperclip}
              href="#documents"
            />
            <TopPageFeatureCard
              header={<Trans>Spreadsheet importer</Trans>}
              body={<Trans>save time and focus on what matters</Trans>}
              icon={faFileExcel}
              href="#importer"
            />
          </div>

          <div className="row gap-y">
            <div className="col-md-9 mx-auto mb-7" data-aos="fade-up">
              <Img {...props.data.createCaptable} alt={i18n.t`Create a cap table`} />
            </div>
          </div>
        </div>
      </section>

      <FeatureList
        textSize="5"
        header={<Trans>Transaction-based</Trans>}
        features={[
          <Trans>
            Transaction-based cap table prepares you for future due diligence, saving you hours of
            work and lawyer costs
          </Trans>,
          <Trans>
            Supports issuance, transfer, convertibles, stock split, valuations, treasury shares,
            unlimited share classes and more
          </Trans>,
          <Trans>
            Analyze your cap table by stakeholder, share class, or stakeholder group, and view it
            with outstanding, diluted, or all shares
          </Trans>
        ]}
        imgSize="7"
        img={<Img {...props.data.availableShares} alt={i18n.t`Available shares for transfer`} />}
        imgFirst
        id="transactions"
      />

      <FeatureList
        textSize="5"
        header={<Trans>Numbered shares</Trans>}
        features={[
          <Trans>In some countries numbering shares is necessary, and it can be a real pain</Trans>,
          <Trans>
            Auto-assign share numbers for all your transactions. Ledgy will determine the next ones
            available
          </Trans>,
          <Trans>
            Numbers are checked for consistency, giving you the peace of mind that none go missing
            or are assigned twice
          </Trans>
        ]}
        imgSize="7"
        img={<Img {...props.data.shareNumbers} alt={i18n.t`Share number checking`} />}
      />

      <FeatureList
        textSize="5"
        header={<Trans>Pooled investments</Trans>}
        features={[
          <Trans>
            Pooled investments are common in many countries. Ledgy helps you keep them organized
          </Trans>,
          <Trans>View the cap table in legal or economic terms</Trans>,
          <Trans>
            They work with numbered shares and you can even run exit modeling with all economic
            stakeholders
          </Trans>
        ]}
        imgSize="7"
        img={<Img {...props.data.pooledInvestment} alt={i18n.t`Pooled investment`} />}
        imgFirst
        id="pooled"
      />

      <FeatureList
        textSize="5"
        header={<Trans>Attach documents</Trans>}
        features={[
          <Trans>Prove your transactions with their respective legal documents</Trans>,
          <Trans>Share the documents attached with the stakeholders of this transaction</Trans>,
          <Trans>
            Quickly pull up legal documents by the information of their linked transactions
          </Trans>
        ]}
        imgSize="7"
        img={<Img {...props.data.attachDocTransaction} alt={i18n.t`Attach doc to transaction`} />}
        link={
          <Link href to={`${props.prefix}/features/collaboration/`}>
            <Trans>Learn more about document management</Trans>
            <ChevronRight />
          </Link>
        }
        id="documents"
      />

      <FeatureList
        textSize="4"
        header={<Trans>Spreadsheet importer</Trans>}
        features={[
          <Trans>Speed up your onboarding process with the bulk import feature</Trans>,
          <Trans>It’s as easy as copying and pasting stakeholders, shares issues, or options</Trans>
        ]}
        imgSize="8"
        img={<Img {...props.data.bulkEntry} alt={i18n.t`Bulk entry`} />}
        imgFirst
        id="importer"
      />

      <section className="section overflow-hidden pt-2">
        <div className="container text-left">
          <FeatureLinks {...props} i18n={i18n} page="captable" />
        </div>
      </section>
    </main>
  </div>
));

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...FeaturesFragment

    createCaptable: imageSharp(fluid: { originalName: { regex: "/create-captable.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    availableShares: imageSharp(fluid: { originalName: { regex: "/available-shares.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    shareNumbers: imageSharp(fluid: { originalName: { regex: "/share-numbers.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    pooledInvestment: imageSharp(fluid: { originalName: { regex: "/pooled-investment.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    attachDocTransaction: imageSharp(
      fluid: { originalName: { regex: "/attach-doc-transaction.png/" } }
    ) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    bulkEntry: imageSharp(fluid: { originalName: { regex: "/bulk-entry.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
