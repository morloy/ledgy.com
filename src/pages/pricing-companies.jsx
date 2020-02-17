/* eslint-disable react/no-array-index-key */
// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Title } from '../layouts/utils';
import { DefaultHeader } from '../components/Header';
import { getFeaturePricing } from './lib/textHelpers';

const featurePricing = getFeaturePricing();

export default withI18n()(({ i18n, data }: Props) => (
  <div>
    <Title
      title={i18n.t`Pricing`}
      description={i18n.t`Ledgy scales with your needs. Free for startups, powerful for grown-ups.`}
    />

    <DefaultHeader
      title={<Trans>Which plan suits me best?</Trans>}
      subtitle={
        <Trans>
          Companies at different stages have very different needs. Consider access rights, storage,
          support needs, and more when selecting your ideal plan.
        </Trans>
      }
    />
    <div className="container">
      <div className="row text-nowrap">
        <div className="pricing-col">
          <div className="pricing-plan" />
          {featurePricing.map(({ text }, i) => (
            <div className="d-block py-1" key={i}>
              {text}
            </div>
          ))}
        </div>
        <div className="pricing-col text-center">
          <div className="pricing-plan">
            <Img {...data.startupIcon} />
            <h3 className="py-2">Startup</h3>
            <div>
              <Trans>free</Trans>
            </div>
          </div>
          {featurePricing.map(({ startup = true }, i) => (
            <div className="d-block py-1" key={i + 100}>
              {(typeof startup !== 'boolean' && startup) ||
                (!startup && <FontAwesomeIcon icon={faTimes} className="text-muted" />) || (
                  <FontAwesomeIcon icon={faCheck} className="text-success" />
                )}
            </div>
          ))}
        </div>
        <div className="pricing-col text-center">
          <div className="pricing-plan">
            <Img {...data.scaleupIcon} />
            <h3 className="py-2">Scaleup</h3>
            <div>
              <Trans>€2 / stakeholder / month</Trans>
            </div>
          </div>
          {featurePricing.map(({ scaleup = true }, i) => (
            <div className="d-block py-1" key={i + 200}>
              {(typeof scaleup !== 'boolean' && scaleup) ||
                (!scaleup && <FontAwesomeIcon icon={faTimes} className="text-muted" />) || (
                  <FontAwesomeIcon icon={faCheck} className="text-success" />
                )}
            </div>
          ))}
        </div>
        <div className="col-3 pricing-col text-center border-energetic-blue">
          <div className="pricing-plan">
            <Img {...data.enterpriseIcon} />
            <h3 className="py-2">Enterprise</h3>
            <div>
              <Trans>Contact us</Trans>
            </div>
          </div>
          {featurePricing.map(({ enterprise = true }, i) => (
            <div className="d-block py-1" key={i + 300}>
              {(typeof enterprise !== 'boolean' && enterprise) ||
                (!enterprise && <FontAwesomeIcon icon={faTimes} className="text-muted" />) || (
                  <FontAwesomeIcon icon={faCheck} className="text-success" />
                )}
            </div>
          ))}
        </div>
      </div>

      <div className="justify-content-center row gap-y" />

      <hr className="my-8" />
      <div className="row text-center">
        <div className="col-12 col-lg-6">
          <h5>
            <Trans>Do you tackle the climate crisis?</Trans>{' '}
            <span role="img" aria-label="earth">
              🌍
            </span>
          </h5>
          <p>
            <Trans>
              You get a 20% discount on Premium if your startup helps reduce carbon emissions.{' '}
              <a href="mailto:sales@ledgy.com?subject=Eco-Friendly Discount Application">
                Tell us about your impact!
              </a>
            </Trans>
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <h5>
            <Trans>Do you have less than €5m in funding?</Trans>{' '}
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </h5>
          <p>
            <Trans>
              Only pay half the price during your first year on Ledgy.{' '}
              <a href="mailto:sales@ledgy.com?subject=Startup Discount Application">
                Send us a message
              </a>{' '}
              and you’ll receive a discount.
            </Trans>
          </p>
        </div>
      </div>
    </div>
  </div>
));

export const pageQuery = graphql`
  query {
    startupIcon: imageSharp(fluid: { originalName: { regex: "/startup-icon.png/" } }) {
      fixed(height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
    scaleupIcon: imageSharp(fluid: { originalName: { regex: "/scaleup-icon.png/" } }) {
      fixed(height: 140) {
        ...GatsbyImageSharpFixed
      }
    }
    enterpriseIcon: imageSharp(fluid: { originalName: { regex: "/enterprise-icon.png/" } }) {
      fixed(height: 180) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
