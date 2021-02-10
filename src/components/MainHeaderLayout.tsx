import React, { ReactNode } from 'react';

type MainHeaderLayoutProps = {
  title: ReactNode | string;
  subtitle: ReactNode | string;
  buttonOne: ReactNode;
  buttonTwo?: ReactNode;
  deco?: ReactNode;
  customButton?: ReactNode;
  image: ReactNode;
  backgroundColor?: string;
  fontColor?: string;
};

export const MainHeaderLayout = ({
  title,
  subtitle,
  buttonOne,
  buttonTwo,
  customButton,
  deco,
  image,
  backgroundColor = 'primary',
  fontColor = 'white',
}: MainHeaderLayoutProps) => (
  <header className={`header d-flex home-banner px-1 text-left bg-${backgroundColor}`}>
    <div className="container my-auto position-relative z-index-base">
      <div className="row mt-md-4 pb-4 pb-md-6">
        <div className="col-xl-5 d-flex flex-column justify-content-center">
          <div className="mb-md-4">
            <h1 className={`text-${fontColor} mt-4 mb-2 mb-sm-3`}>{title}</h1>
            <div className={`text-${fontColor} pb-3 text-lg font-weight-light line-height-lg`}>
              {subtitle}
            </div>
          </div>
          <div className="d-flex align-items-center flex-wrap mb-2 mb-lg-4 mb-xl-0">
            {buttonOne}
            {buttonTwo}
            {customButton}
          </div>
        </div>
        <div className="col-xl-7 d-flex flex-column justify-content-center align-items-center">
          <div className="header-img-wrapper mt-4 d-flex flex-column justify-content-center">
            {image}
          </div>
        </div>
      </div>
    </div>
    {deco}
  </header>
);
