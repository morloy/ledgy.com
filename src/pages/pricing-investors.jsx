// @flow

import React, { type Node } from 'react';
import { withI18n, Trans } from '@lingui/react';

import { Title } from '../layouts/utils';
import { appUrl, getInvestorFeaturePricing } from '../helpers';
import { DefaultHeader } from '../components/Header';
import { Button } from '../components/Button';

const { angelFeatures, fundFeatures } = getInvestorFeaturePricing();

const InvestorTypeCard = ({
  type,
  price,
  features,
  button,
  highlight = false
}: {
  type: Node,
  price: Node,
  features: Node[],
  button: Node,
  highlight?: boolean
}) => (
  <div className="col-12 col-md-6 col-lg-5 mb-4">
    <div
      className={`investor-pricing-plan h-100 d-flex flex-column align-items-center justify-content-between text-center py-5 px-4 ${
        highlight ? 'border-energetic-blue' : ''
      }`}
    >
      <div>
        <h3 className="font-weight-bold">{type}</h3>
        <div className="text-xl font-weight-light mb-4 mt-2">{price}</div>
        <ul className="p-0 mb-3 list-style-none">
          {features.map(feature => (
            <li className="mb-4">{feature}</li>
          ))}
        </ul>
      </div>
      {button}
    </div>
  </div>
);

export default withI18n()(({ i18n }: Props) => (
  <>
    <Title
      title={i18n.t`Pricing`}
      description={i18n.t`Ledgy scales with your needs. Free for startups, powerful for grown-ups.`}
    />

    <DefaultHeader
      title={<Trans>Which plan suits me best?</Trans>}
      subtitle={
        <Trans>
          Different investors have different needs. Whether you’re a business angel, a professional
          investor, or a VC fund, Ledgy has a plan to suit your needs.
        </Trans>
      }
    />

    <div className="container">
      <div className="row justify-content-center">
        <InvestorTypeCard
          type={<Trans>Business Angel</Trans>}
          price={<Trans>free</Trans>}
          features={angelFeatures}
          button={
            <Button inverted href={`${appUrl}/signup`}>
              <Trans>Sign up</Trans>
            </Button>
          }
        />
        <InvestorTypeCard
          highlight
          type={<Trans>Fund</Trans>}
          price={<Trans>contact us</Trans>}
          features={fundFeatures}
          button={
            <Button href="mailto:contact@ledgy.com?subject=Ledgy investors - Fund plan inquiry">
              <Trans>Get in touch</Trans>
            </Button>
          }
        />
      </div>
    </div>
  </>
));
