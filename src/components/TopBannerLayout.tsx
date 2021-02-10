import React, { ReactNode } from 'react';
import { Section } from './Section';

type TopBannerLayoutProps = {
  title: ReactNode | string;
  subtitle: ReactNode | string;
  buttonOne: ReactNode;
  buttonTwo?: ReactNode;
  deco?: ReactNode;
  customButton?: ReactNode;
  image: ReactNode;
};

const DecoShapes = () => (
  <>
    <div className="new-top-deco-shape new-top-deco-shape--one" />
    <div className="new-top-deco-shape new-top-deco-shape--two" />
  </>
);

export const TopBannerLayout = ({
  title,
  subtitle,
  buttonOne,
  buttonTwo,
  customButton,
  image,
}: TopBannerLayoutProps) => (
  <header className="top-banner d-flex">
    <Section className="w-100 mt-xl-7">
      <div className="row">
        <div className="col-xl-5 d-flex flex-column justify-content-center position-relative z-index-base">
          <div className="mt-md-4 mt-lg-2 text-gray-dark">
            <h1 className="mb-2 mb-sm-3">{title}</h1>
            <div className="pb-3 text-lg font-weight-light line-height-lg">{subtitle}</div>
          </div>
          <div className="d-flex align-items-center flex-wrap">
            {buttonOne}
            {buttonTwo}
            {customButton}
          </div>
        </div>
        <div className="col-xl-7 d-flex flex-column justify-content-center align-items-center position-relative pr-xl-0">
          <div className="w-100 mt-4 px-lg-4 px-xl-0 d-flex flex-column justify-content-center">
            {image}
          </div>
          <DecoShapes />
        </div>
      </div>
    </Section>
  </header>
);
