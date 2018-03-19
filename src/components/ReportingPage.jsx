// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Img from 'gatsby-image';

import { FeatureLinks } from './Features';
import { Title } from '../layouts/utils';


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Documents & Reporting`}
      section={i18n.t`Features`}
      description={i18n.t`Save painful work inserting numbers into templates. Automated documents and reports at your fingertips.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1><Trans>Documents & Reporting</Trans></h1>
          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section overflow-hidden">
        <div className="container text-left">

          <div>
            <header className="section-header text-left">
              <h2><Trans>Make your cap table legally binding</Trans></h2>
              <p>
                <Trans>
                  In order to create a legally binding share register, it
                  is necessary to add a handwritten signature.
                  With Ledgy you can download a beautiful snapshot
                  of your company’s shares structure.
                  Simply print and sign it to have a legally valid document.
                  <br /><br />
                  It includes the current cap table, including the non-diluted and
                  fully-diluted stake of each shareholder (if you have options or phantom stock),
                  your convertibles and ESOPs, and finally the transaction history,
                  which tracks every change ever made to your cap table since the incorporation.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-12 mx-auto mb-7" data-aos="fade-up">
                <Img {...props.data.shareRegisterPdf} alt={i18n.t`PDF export of the share register`} />
              </div>
            </div>
          </div>


          <hr className="my-8" />


          <header className="section-header text-left">
            <h2><Trans>Send holding confirmations with ease</Trans></h2>
          </header>

          <div className="row align-items-center my-8">
            <div className="col-md-6 ml-auto">
              <p>
                <Trans>
                  Remember that day last year during tax season when you had to send
                  holding confirmations to each shareholder, filling out boring
                  Word templates by hand?
                  <br /><br />
                  We’ve got the solution for you. With a single click, Ledgy creates
                  nicely formatted holding confirmations for all of your shareholders
                  and send them directly via email.
                  <br /><br />
                  Hours of tedious work is now reduced to just a few seconds. Hurray!
                </Trans>
              </p>
            </div>

            <div className="col-md-5" data-aos="fade-left">
              <Img {...props.data.sendHoldingConfirmation} alt={i18n.t`Dialog for holding confirmation`} />
            </div>
          </div>


          <div>
            <header className="section-header text-left">
              <p>
                <Trans>
                  The holding confirmation lists all assets that a shareholder owns,
                  as well as their total value needed for the tax declaration.
                  Employees will be able to see their stock ownership plans and
                  how many of their total shares they already have vested.
                  <br />
                  All documents are ready to be sent to the tax authority!
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-8 mx-auto mb-7" data-aos="fade-right">
                <Img {...props.data.holdingConfirmationPdf} alt={i18n.t`Holding confirmation`} />
              </div>
            </div>
          </div>

          <hr className="my-8" />


          <div>
            <header className="section-header text-left">
              <h2><Trans>Bring order to your documents</Trans></h2>
              <p>
                <Trans>
                  Every transaction in your share register usually comes with a
                  pile of additional documents, like contracts.
                  Get rid of complicated folder structures and simply attach them
                  directly to your transactions.
                  Ledgy gives you an overview of all documents that you uploaded and
                  their corresponding transactions.
                  Also in your transaction history you can select any transaction and see
                  all connected documents at a glance.
                  <br /><br />
                  You can also share your documents by sending a simple
                  link to your shareholders.
                  This eliminates confusion about different
                  versions of documents, as it is often the case when sending documents via email.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-left">
                <Img {...props.data.documentManagement} alt={i18n.t`Document management`} />
              </div>
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
  fragment ReportingPageFragment on RootQueryType {
    ...FeaturesFragment

    shareRegisterPdf: imageSharp(id: { regex: "/share-register-pdf.png/" }) {
      sizes(maxWidth: 2400) { ...GatsbyImageSharpSizes }
    }
    sendHoldingConfirmation: imageSharp(id: { regex: "/send-holding-confirmation.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    holdingConfirmationPdf: imageSharp(id: { regex: "/holding-confirmation-pdf.png/" }) {
      sizes(maxWidth: 2000) { ...GatsbyImageSharpSizes }
    }
    documentManagement: imageSharp(id: { regex: "/document-management.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
  }
`;
