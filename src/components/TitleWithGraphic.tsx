import React from 'react';
import { dynamicI18n, DynamicTrans, Section, Image } from './utils';
import { getUnderlineHtml } from './lib';

export const TitleWithGraphic = ({
  title,
  motivationText,
  graphic,
  description,
  isTopBanner = false,
}: TitleWithGraphicProps & { isTopBanner?: boolean }) => {
  const wrapperClassName = isTopBanner ? 'bg-lightest top-banner' : 'py-7 mb-n4';
  const tiltedBackground = isTopBanner ? '' : 'bg-primary tilted-background';

  const motivationTextColor = isTopBanner ? 'text-gray-dark' : 'text-secondary';
  const titleColor = isTopBanner ? 'text-primary' : 'text-secondary';
  const descriptionColor = isTopBanner ? 'text-primary' : 'text-white';

  const rowMargin = isTopBanner ? 'my-3 my-lg-5' : 'my-5 my-lg-7';
  const graphicCol = isTopBanner ? 'order-last' : '';
  const textCol = isTopBanner ? 'col-lg-6' : 'col-lg-5';

  return (
    <div className={`overflow-hidden ${wrapperClassName}`}>
      <Section className="position-relative" noPadding={isTopBanner}>
        <div className={`${tiltedBackground} position-absolute z-index-background`} />
        <div className={`row justify-content-center py-5 py-lg-7 ${rowMargin}`}>
          <div
            className={`${graphicCol} col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end`}
          >
            <Image image={graphic} />
          </div>
          <div className={`${textCol} pt-2 pt-lg-0`}>
            <p className={motivationTextColor}>
              <DynamicTrans>{motivationText.toUpperCase()}</DynamicTrans>
            </p>
            <h1
              className={`custom-underline my-4 font-weight-bold ${titleColor}`}
              dangerouslySetInnerHTML={{ __html: getUnderlineHtml(dynamicI18n(title)) }}
            />
            <p className={descriptionColor}>
              <DynamicTrans>{description}</DynamicTrans>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};
