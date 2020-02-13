// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  faRandom,
  faCertificate,
  faEnvelope,
  faFileContract
} from '@fortawesome/free-solid-svg-icons';

import { FeatureLinks, FeatureList, TopPageFeatureCard } from '../../components/Feature';
import { Title } from '../../layouts/utils';
import { SignupForm } from '../../components/SignupForm';

export default withI18n()((props: Props) => {
  const { i18n, data } = props;
  const { siteUrl } = data.site.siteMetadata;
  const StakeholderName = () => '{stakeholder.name}';
  return (
    <div>
      <Title
        title={i18n.t`Signatures`}
        section={i18n.t`Features`}
        description={i18n.t`Sign your legally-binding equity paperwork fully online`}
        thumbnailUrl={`${siteUrl}/banners/electronic-signatures.png`}
      />

      <header className="header text-white">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <h1>
                <Trans>Digital Signatures & Document Templating</Trans>
              </h1>
              <a href="#earlyAccess">
                <button className="btn btn-round btn-secondary btn-xl">
                  <Trans>Get Early Access</Trans>
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="main-content">
        <section className="section overflow-hidden pb-0 pt-7">
          <div className="container text-left">
            <div className="row pb-3">
              <TopPageFeatureCard
                header={<Trans>Qualified Electronic Signatures (QES)</Trans>}
                body={
                  <Trans>
                    the highest standard in digital signatures, equivalent to hand-signing on paper
                  </Trans>
                }
                icon={faCertificate}
                href="#qes"
              />
              <TopPageFeatureCard
                header={<Trans>Request signatures in seconds</Trans>}
                body={
                  <Trans>
                    whether it’s one or 100 signatures, invite stakeholders with a single click and
                    track the progress
                  </Trans>
                }
                icon={faEnvelope}
                href="#invite"
              />
              <TopPageFeatureCard
                header={<Trans>Create legal documents from templates</Trans>}
                body={
                  <Trans>
                    automatically substitute variables in your Word templates using stakeholder and
                    transaction information
                  </Trans>
                }
                icon={faFileContract}
                href="#templates"
              />
              <TopPageFeatureCard
                header={<Trans>Streamline your signature flows</Trans>}
                body={
                  <Trans>
                    set up signature workflows for employee grants, secondary transfers, and
                    onboarding new stakeholders
                  </Trans>
                }
                icon={faRandom}
                href="#flows"
              />
            </div>

            <div className="row gap-y">
              <div className="col-md-12 mx-auto mt-3 mb-5" data-aos="fade-up">
                <Img {...data.signaturesPage} alt={i18n.t`Overview of the signatures page`} />
              </div>
            </div>
          </div>
        </section>

        <FeatureList
          textSize="6"
          header={<Trans>Qualified Electronic Signatures (QES)</Trans>}
          features={[
            <Trans>
              <strong>The highest legal standard</strong> in digital signatures, same as signing on
              paper
            </Trans>,
            <Trans>
              <strong>Approved by the EU</strong> (eIDAS regulation) through our partner Skribble
            </Trans>,
            <Trans>
              <strong>Secure video identification</strong> of the signatory by trusted authority
            </Trans>,
            <Trans>
              <strong>Mobile-friendly</strong>: let your stakeholders sign documents on the go
            </Trans>
          ]}
          imgSize="6"
          img={<Img {...data.skribble} alt={i18n.t`Legal electronic signatures`} />}
          id="qes"
        />

        <FeatureList
          textSize="6"
          header={<Trans>Request signatures in seconds</Trans>}
          features={[
            <Trans>
              <strong>Request mutiple signatures in a single click</strong>, instead of manually
              filling, sending, sorting, and tracking documents or even printed contracts
            </Trans>,
            <Trans>
              <strong>Keep track of who already signed</strong> and who is still missing
            </Trans>,
            <Trans>
              <strong>Get rid of tedious paperwork</strong> and make your stakeholders happy
            </Trans>,
            <Trans>
              <strong>All in one place</strong>: The whole signing process happens on the Ledgy
              platform
            </Trans>
          ]}
          imgSize="6"
          img={<Img {...data.signingForm} alt={i18n.t`Blazing-fast signatures`} />}
          imgFirst
          id="invite"
        />

        <FeatureList
          textSize="6"
          header={<Trans>Document templating</Trans>}
          features={[
            <Trans>
              <strong>Create legal contracts</strong> with a single click from your own Word
              templates
            </Trans>,
            <Trans>
              <strong>Automatically fill in variables</strong> like stakeholder profiles and
              transaction data
            </Trans>,
            <Trans>
              <strong>Easy to use</strong>: simply typing “<StakeholderName />” will become the name
              of your stakeholder
            </Trans>
          ]}
          imgSize="6"
          img={
            <Img
              {...data.documentTemplate}
              alt={i18n.t`Automatically generate legally-valid contracts with easy templates`}
            />
          }
          id="templates"
        />

        <FeatureList
          textSize="5"
          header={<Trans>Signing workflows</Trans>}
          features={[
            <Trans>
              <strong>Build fully-compliant option grants</strong> and onboard your new employees in
              seconds
            </Trans>,
            <Trans>
              <strong>Enable secondary trades</strong> with streamlined stock transfers
            </Trans>,
            <Trans>
              <strong>Automate compliance</strong> by documenting transactions with their required
              legal contracts
            </Trans>
          ]}
          imgSize="7"
          img={<Img {...data.signingWorkflows} alt={i18n.t`Show cap table fully diluted`} />}
          imgFirst
          id="flows"
        />

        <section className="section bg-pale-secondary mt-7" id="earlyAccess">
          <div className="container py-md-4">
            <div className="row m-0 w-100 justify-content-center align-items-center">
              <h4 className="m-4 text-center">
                <Trans>Sign up for early access</Trans>
              </h4>
              <SignupForm {...props} trackingEvent="workflowBetaRequest" />
            </div>
          </div>
        </section>

        <section className="section overflow-hidden pt-2">
          <div className="container text-left">
            <FeatureLinks {...props} i18n={i18n} page="signatures" />
          </div>
        </section>
      </main>
    </div>
  );
});

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query {
    ...FeaturesFragment

    signaturesPage: imageSharp(fluid: { originalName: { regex: "/signatures-page.png/" } }) {
      fluid(maxWidth: 900) {
        ...GatsbyImageSharpFluid
      }
    }
    skribble: imageSharp(fluid: { originalName: { regex: "/skribble.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    signingForm: imageSharp(fluid: { originalName: { regex: "/signing-form.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    documentTemplate: imageSharp(fluid: { originalName: { regex: "/document-template.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    signingWorkflows: imageSharp(fluid: { originalName: { regex: "/signing-workflows.png/" } }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
