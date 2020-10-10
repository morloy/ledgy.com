// @flow

import React, { type Node } from 'react';
import { withI18n, Trans } from '@lingui/react';

import { Title } from '../layouts/utils';
import { appUrl, getInvestorFeaturePricing } from '../helpers';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';

const { angelFeatures, fundFeatures } = getInvestorFeaturePricing();

const InvestorTypeCard = ({
  type,
  price,
  features,
  button,
  highlight = false,
}: {
  type: Node,
  price: Node,
  features: Node[],
  button: Node,
  highlight?: boolean,
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
          {features.map((feature) => (
            <li className="mb-4">{feature}</li>
          ))}
        </ul>
      </div>
      {button}
    </div>
  </div>
);

export default withI18n()(({ i18n }: Props) => {
  const title = i18n.t`Investor Pricing`;
  const description = i18n.t`Different investors have different needs. Whether you’re a business angel or a professional investment firm, Ledgy has a plan to suit your needs`;
  return (
    <>
      <Title title={title} description={description} />
      <PageHeader title={title} subtitle={description} />

      <div className="container">
        <div className="row justify-content-center">
          <InvestorTypeCard
            type={<Trans>Business Angel</Trans>}
            price={<Trans>Free</Trans>}
            features={angelFeatures}
            button={
              <Button inverted outline href={`${appUrl}/signup`}>
                <Trans>Sign up</Trans>
              </Button>
            }
          />
          <InvestorTypeCard
            highlight
            type={<Trans>Investment Firm</Trans>}
            price={<Trans>Contact us</Trans>}
            features={fundFeatures}
            button={
              <Button href="mailto:sales@ledgy.com?subject=Ledgy investment firm inquiry">
                <Trans>Get in touch</Trans>
              </Button>
            }
          />
        </div>
      </div>
    </>
  );
});
