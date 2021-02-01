import React, { ReactNode } from 'react';
import { Trans, t } from '@lingui/macro';

import { Title } from '../layouts/utils';
import { appUrl, INVESTOR_FEATURES } from '../helpers';
import { PageHeader } from '../components/PageHeader';
import { RequestDemoButton } from '../components/RequestDemoButton';
import { Button } from '../components/Button';
import { DynamicTrans } from '../components';

const { angelFeatures, fundFeatures } = INVESTOR_FEATURES;

const InvestorTypeCard = ({
  type,
  price,
  features,
  button,
  highlight = false,
}: {
  type: ReactNode;
  price: ReactNode;
  features: string[];
  button: ReactNode;
  highlight?: boolean;
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
          {features.map((feature, i) => (
            <li className="mb-4" key={`${feature}-${i}`}>
              <DynamicTrans>{feature}</DynamicTrans>
            </li>
          ))}
        </ul>
      </div>
      {button}
    </div>
  </div>
);

const InvestorPricing = ({ prefix }: Props) => {
  const title = t`Investor Pricing`;
  const description = t`Different investors have different needs. Whether you’re a business angel, a professional investor, or a VC fund, Ledgy has a plan to suit your needs`;
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
            type={<Trans>Fund</Trans>}
            price={<Trans>Contact us</Trans>}
            features={fundFeatures}
            button={<RequestDemoButton buttonClassName="" prefix={prefix} />}
          />
        </div>
      </div>
    </>
  );
};

export default InvestorPricing;
