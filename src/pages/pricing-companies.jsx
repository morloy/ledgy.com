/* eslint-disable react/no-array-index-key */
// @flow

import React, { type Node } from 'react';
import { withI18n, Trans } from '@lingui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Title } from '../layouts/utils';
import { DefaultHeader } from '../components/Header';
import { getFeaturePricing } from './lib/textHelpers';

const featurePricing = getFeaturePricing();

const PricingCol = ({
  icon,
  name,
  price,
  children,
  textLeft = false,
  highlight = false
}: {
  icon?: Object,
  name?: string,
  price?: Node,
  children: Node,
  textLeft?: boolean,
  highlight?: boolean
}) => (
  <div
    className={`pricing-col ${textLeft ? 'text-left' : 'text-center'} ${
      highlight ? 'border-energetic-blue' : ''
    }`}
  >
    <div className="height-300px p-1 d-flex flex-column justify-content-end align-items-center">
      {icon && name && price && (
        <>
          <Img {...icon} />
          <h3 className="py-2">{name}</h3>
          <div>{price}</div>
        </>
      )}
    </div>
    {children}
  </div>
);

const PricingColChildren = ({ prop }: { prop: boolean | Node }) => (
  <div className="d-block py-1">
    {(typeof prop !== 'boolean' && prop) ||
      (!prop && <FontAwesomeIcon icon={faTimes} className="text-muted" />) || (
        <FontAwesomeIcon icon={faCheck} className="text-success" />
      )}
  </div>
);

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
        <PricingCol textLeft>
          {featurePricing.map(({ text = true }, i) => (
            <PricingColChildren prop={text} key={i} />
          ))}
        </PricingCol>

        <PricingCol icon={data.startupIcon} name="Startup" price={<Trans>free</Trans>}>
          {featurePricing.map(({ startup = true }, i) => (
            <PricingColChildren prop={startup} key={i + 100} />
          ))}
        </PricingCol>

        <PricingCol
          icon={data.scaleupIcon}
          name="Scaleup"
          price={<Trans>€2 / stakeholder / month</Trans>}
        >
          {featurePricing.map(({ scaleup = true }, i) => (
            <PricingColChildren prop={scaleup} key={i + 200} />
          ))}
        </PricingCol>

        <PricingCol
          highlight
          icon={data.enterpriseIcon}
          name="Enterprise"
          price={<Trans>Contact us</Trans>}
        >
          {featurePricing.map(({ enterprise = true }, i) => (
            <PricingColChildren prop={enterprise} key={i + 300} />
          ))}
        </PricingCol>
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
