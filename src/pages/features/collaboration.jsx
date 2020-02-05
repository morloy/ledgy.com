// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import {
  faDatabase,
  faUserLock,
  faHistory,
  faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';

import { FeatureLinks, FeatureList, TopPageFeatureCard } from '../../components/Feature';
import { Title, ChevronRight } from '../../layouts/utils';

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Collaboration & Due Diligence`}
      section={i18n.t`Features`}
      description={i18n.t`A secure data room, audit trail, and read-only access for investors means saving on costly due diligence tools.`}
    />

    <header className="header text-white">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Due Diligence and Collaboration</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main className="main-content">
      <section className="section pb-0 pt-7 overflow-hidden">
        <div className="container text-left">
          <div className="row pb-7">
            <TopPageFeatureCard
              header={<Trans>Granular access rights</Trans>}
              body={<Trans>so you control what others can see and do</Trans>}
              icon={faUserLock}
              href="#access"
            />
            <TopPageFeatureCard
              header={<Trans>Secure data room</Trans>}
              body={<Trans>to manage all of your legal documents</Trans>}
              icon={faDatabase}
              href="#dataRoom"
            />
            <TopPageFeatureCard
              header={<Trans>Transparent history</Trans>}
              body={<Trans>and edit log simplify due diligence</Trans>}
              icon={faHistory}
              href="#dueDiligence"
            />
            <TopPageFeatureCard
              header={<Trans>Holding confirmations</Trans>}
              body={<Trans>with a single click</Trans>}
              icon={faClipboardCheck}
              href="#holding"
            />
          </div>

          <div className="row gap-y">
            <div className="col-md-10 mx-auto mb-7" data-aos="fade-up">
              <Img {...props.data.documentLinks} alt={i18n.t`Document links`} />
            </div>
          </div>
        </div>
      </section>

      <FeatureList
        textSize="5"
        header={<Trans>Granular access rights</Trans>}
        features={[
          <Trans>Stakeholders will only be notified if you explicitly invite them yourself</Trans>,
          <Trans>
            <strong>Admin</strong> Full control over the company for your co-founders
          </Trans>,
          <Trans>
            <strong>View</strong> See all cap table info in a read-only mode for due diligences
          </Trans>,
          <Trans>
            <strong>Portfolio</strong> Only see their own
            <Link href to={`${props.prefix}/features/investors/`}>
              portfolio
              <ChevronRight />
            </Link>
            stake
          </Trans>
        ]}
        imgSize="7"
        img={<Img {...props.data.accessRights} alt={i18n.t`Stakeholders access rights`} />}
        id="access"
      />

      <FeatureList
        textSize="5"
        header={<Trans>Secure data room</Trans>}
        features={[
          <Trans>Save on costly due diligence tools</Trans>,
          <Trans>Prove your transactions by linking their respective legal documents</Trans>,
          <Trans>
            Make linked documents accessible to stakeholders involved in the transaction
          </Trans>,
          <Trans>
            Quickly pull up documents by the information of their linked transactions; for example,
            all of a specific stakeholder, share class or date range
          </Trans>
        ]}
        imgSize="7"
        img={<Img {...props.data.documentManagement} alt={i18n.t`Document management`} />}
        imgFirst
        id="dataRoom"
      />

      <FeatureList
        textSize="5"
        header={<Trans>Due diligence history</Trans>}
        features={[
          <Trans>
            Set your company up for future due diligences, saving you hours of work and lawyer costs
          </Trans>,
          <Trans>The transaction-based cap table allows browsing through the history</Trans>,
          <Trans>
            Track your valuations and understand the history in terms of percentage and number of
            shares
          </Trans>
        ]}
        imgSize="7"
        img={<Img {...props.data.valuation} alt={i18n.t`Valuation`} />}
        id="dueDiligence"
      />

      <FeatureList
        textSize="6"
        header={<Trans>Blockchain certification</Trans>}
        features={[
          <Trans>
            Unforgeable proof that your documents were not modified since the certification
          </Trans>,
          <Trans>
            A certificate of each document is automatically stored on the Bitcoin blockchain when it
            is uploaded
          </Trans>,
          <Trans>
            Using Ledgy from the beginning thus builds a new level of due diligence history
          </Trans>
        ]}
        imgSize="5"
        img={<Img {...props.data.blockchainNotary} alt={i18n.t`Blockchain notary`} />}
        imgFirst
      />

      <FeatureList
        textSize="6"
        header={<Trans>Edit log</Trans>}
        features={[
          <Trans>Equity data is too important to be accidentally tweaked in a spreadsheet</Trans>,
          <Trans>Keep track of who edited what and hold admins accountable</Trans>
        ]}
        imgSize="5"
        img={<Img {...props.data.editLog} alt={i18n.t`Record of edits`} />}
      />

      <FeatureList
        textSize="5"
        header={<Trans>Holding confirmations</Trans>}
        features={[
          <Trans>Download holding confirmations with a single click</Trans>,
          <Trans>
            They will list all assets owned by the stakeholder and optionally include a tax value of
            the shares
          </Trans>
        ]}
        imgSize="7"
        img={<Img {...props.data.holdingConfirmationPdf} alt={i18n.t`Holding confirmation`} />}
        imgFirst
        id="holding"
      />

      <section className="section overflow-hidden pt-2">
        <div className="container text-left">
          <FeatureLinks {...props} i18n={i18n} page="collaboration" />
        </div>
      </section>
    </main>
  </div>
));

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...FeaturesFragment

    documentLinks: imageSharp(fluid: { originalName: { regex: "/document-links.png/" } }) {
      fluid(maxWidth: 2400) {
        ...GatsbyImageSharpFluid
      }
    }
    accessRights: imageSharp(fluid: { originalName: { regex: "/access-rights.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    holdingConfirmationPdf: imageSharp(
      fluid: { originalName: { regex: "/holding-confirmation-pdf.png/" } }
    ) {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
    documentManagement: imageSharp(
      fluid: { originalName: { regex: "/document-management.png/" } }
    ) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    valuation: imageSharp(fluid: { originalName: { regex: "/valuation.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    editLog: imageSharp(fluid: { originalName: { regex: "/edit-log.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    blockchainNotary: imageSharp(fluid: { originalName: { regex: "/blockchain-notary.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
