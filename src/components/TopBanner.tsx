import React from 'react';
import Img from 'gatsby-image';
import { RequestDemoButton } from './RequestDemoButton';
import { Button } from './Button';
import { DynamicTrans } from './DynamicTrans';
import { t } from '@lingui/macro';
import { MainHeaderLayout } from './MainHeaderLayout';

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

  const { childImageSharp } = image?.localFile || {};
  const requestDemoLink = 'ledgy.com/demo/ledgy';

  const RequestDemo = ({ text }: { text: string }) => (
    <RequestDemoButton
      prefix={prefix}
      buttonText={text}
      buttonClassName="my-sm-0 my-2 btn-xl d-inline mx-1"
    />
  );
  const CustomButton = ({ url, text }: { url: string; text: string }) => (
    <Button href={url} className="btn-xl mx-1 my-1 align-self-center" inverted outline>
      <DynamicTrans>{text}</DynamicTrans>
    </Button>
  );

  return (
    <div>
      <MainHeaderLayout
        title={<DynamicTrans>{mainHeader}</DynamicTrans>}
        subtitle={<DynamicTrans>{description}</DynamicTrans>}
        className="bg-gray-light"
        titleClassName="text-gray-dark"
        subtitleClassName="text-gray-dark"
        buttonOne={
          firstButtonUrl.includes(requestDemoLink) ? (
            <RequestDemo text={firstButtonText} />
          ) : (
            <CustomButton url={firstButtonUrl} text={firstButtonText} />
          )
        }
        buttonTwo={
          secondButtonUrl.includes(requestDemoLink) ? (
            <RequestDemo text={secondButtonText} />
          ) : (
            <CustomButton url={secondButtonUrl} text={secondButtonText} />
          )
        }
        image={
          <div id="laptop-ledgy" className="mt-sm-4 mt-xl-0 p-0 p-xl-5">
            {!!childImageSharp && <Img {...childImageSharp} alt={t`Screenshot of the Ledgy app`} />}
          </div>
        }
        deco={
          <div>
            <div className="new-top-deco-shape new-top-deco-shape--one" />
            <div className="new-top-deco-shape new-top-deco-shape--two" />
          </div>
        }
      />
    </div>
  );
};

// <div className="new-top-deco-shape new-top-deco-shape--one"></div>
// <div className="new-top-deco-shape new-top-deco-shape--two"></div>
