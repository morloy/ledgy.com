import React from 'react';
import Img, { GatsbyImageFluidProps } from 'gatsby-image';

import { calculatorUrl, track } from '../helpers';
import { ProductHuntButton } from './ProductHuntButton';

import { Button, DynamicTrans } from './utils';
import { TopBannerLayout } from './TopBannerLayout';

const title = <DynamicTrans>The calculator you need if you’re raising capital</DynamicTrans>;

const subtitle = (
  <>
    <ul>
      <li>
        See <strong>who owns what</strong> after fundraising
      </li>
      <li>
        Look more professional during <strong>term sheet negotiations</strong>
      </li>
      <li>
        Understand common <strong>fundraising terms</strong>
      </li>
      <li>
        Model your cap table through <strong>multiple funding rounds</strong>
      </li>
      <li>
        Compare dilution results when adding <strong>convertible loans</strong> and
        <strong> employee pools</strong>
      </li>
    </ul>
  </>
);

const buttonOne = (
  <Button cta href={calculatorUrl} onClick={() => track('click.calculator')} className="mr-2 mb-2">
    <DynamicTrans>Launch calculator</DynamicTrans>
  </Button>
);

const productHuntLaunchButton = (
  <ProductHuntButton
    productHuntLink="https://www.producthunt.com/posts/startup-fundraising-calculator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-startup-fundraising-calculator"
    trackSignupKey="clickProductHunt"
    postId="169181"
    altText="Startup Fundraising Calculator - The calculator you need if you're raising money. | Product Hunt Embed"
  />
);

const Image = ({
  data,
}: {
  data: {
    contentfulPage: ContentfulPageProps;
    site: { siteMetadata: { siteUrl: string } };
    calculator: GatsbyImageFluidProps;
  };
}) => <Img {...data.calculator} alt="Financing Round Calculator" />;

export const CalculatorHeader = ({
  data,
}: {
  data: {
    contentfulPage: ContentfulPageProps;
    site: { siteMetadata: { siteUrl: string } };
    calculator: GatsbyImageFluidProps;
  };
}) => (
  <TopBannerLayout
    title={title}
    subtitle={subtitle}
    buttonOne={buttonOne}
    buttonTwo={productHuntLaunchButton}
    componentRight={<Image data={data} />}
  />
);
