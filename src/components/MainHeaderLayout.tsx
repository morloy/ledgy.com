

import React, { Node } from "react";

type MainHeaderLayoutProps = {
  title: Node | string;
  subtitle: Node | string;
  buttonOne: Node;
  buttonTwo?: Node;
  customButton?: Node;
  image: Node;
  className?: string;
};

export const MainHeaderLayout = ({
  title,
  subtitle,
  buttonOne,
  buttonTwo,
  customButton,
  image,
  className = ''
}: MainHeaderLayoutProps) => <header className={`header d-flex home-banner px-1 text-left bg-primary ${className}`}>
    <div className="container my-auto position-relative z-index-base">
      <div className="row mt-md-4 pb-4 pb-md-6">
        <div className="col-xl-5 d-flex flex-column justify-content-center">
          <div className="mb-md-4">
            <h1 className="text-white mt-4 mb-2 mb-sm-3">{title}</h1>
            <div className="text-lg line-height-lg text-white font-weight-light pb-3">
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
  </header>;