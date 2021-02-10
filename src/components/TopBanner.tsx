import React from 'react';
import Img from 'gatsby-image';
import { RequestDemoButton } from './RequestDemoButton';
import { Button } from './Button';
import { DynamicTrans } from './DynamicTrans';
import { t } from '@lingui/macro';
import { TopBannerLayout } from './TopBannerLayout';
import { demoPage } from '../helpers';

const CustomButton = ({ url, text }: { url: string; text: string }) => (
  <Button href={url} className="btn-xl mx-1 my-1 align-self-center" inverted outline>
    <DynamicTrans>{text}</DynamicTrans>
  </Button>
);

const Screenshot = ({ image }: { image: Image }) => {
  const { childImageSharp } = image?.localFile || {};

  return (
    <div className="mt-sm-4 mt-xl-0 p-0 screenshot">
      {!!childImageSharp && <Img {...childImageSharp} alt={t`Screenshot of the Ledgy app`} />}
    </div>
  );
};

export const TopBanner = ({
  topBannerContent,
  prefix,
}: {
  topBannerContent: TopBannerProps;
  prefix: string;
}) => {
  const {
    mainHeader,
    description,
    image,
    firstButtonText,
    firstButtonUrl,
    secondButtonText,
    secondButtonUrl,
  } = topBannerContent;

  const buttonClassName = 'my-sm-0 my-2 btn-xl d-inline mx-1';

  const buttonOne = firstButtonUrl.includes(demoPage) ? (
    <RequestDemoButton
      prefix={prefix}
      buttonText={firstButtonText}
      buttonClassName={buttonClassName}
    />
  ) : (
    <CustomButton url={firstButtonUrl} text={firstButtonText} />
  );

  const buttonTwo = secondButtonUrl.includes(demoPage) ? (
    <RequestDemoButton
      prefix={prefix}
      buttonText={secondButtonText}
      buttonClassName={buttonClassName}
    />
  ) : (
    <CustomButton url={secondButtonUrl} text={secondButtonText} />
  );

  return (
    <div>
      <TopBannerLayout
        title={<DynamicTrans>{mainHeader}</DynamicTrans>}
        subtitle={<DynamicTrans>{description}</DynamicTrans>}
        buttonOne={buttonOne}
        buttonTwo={buttonTwo}
        image={<Screenshot image={image} />}
      />
    </div>
  );
};
