// @flow

import React, { type Node } from 'react';

type HeaderButton = {| props: Object, text: Node, modal?: Node |};
type HeaderLayoutProps = {|
  title: Node | string,
  subtitle: Node | string,
  buttonOne: HeaderButton,
  buttonTwo?: HeaderButton,
  customButton?: Node,
  image: Node
|};

export const HeaderLayout = ({
  title,
  subtitle,
  buttonOne,
  buttonTwo,
  customButton,
  image
}: HeaderLayoutProps) => {
  const buttonOneClass = `btn btn-block d-sm-inline btn-xl mx-1 btn-round ${
    buttonTwo ? 'btn-outline-light' : 'btn-light'
  }`;
  const { props, modal = null } = buttonOne;
  const Modal = modal;
  return (
    <header className="header d-flex home-banner px-1 text-left bg-primary">
      <div className="container my-auto">
        <div className="row gap-y mt-md-2 pb-4 pb-md-6">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="mt-md-n6 mb-md-4">
              <h1 className="text-white mb-2 mb-sm-3">{title}</h1>
              <div className="big-text text-white font-weight-light pb-3">{subtitle}</div>
            </div>
            <div>
              {Modal || (
                <a className={buttonOneClass} {...props}>
                  {buttonOne.text}
                </a>
              )}
              {!!buttonTwo && (
                <a
                  className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-light"
                  {...buttonTwo.props}
                >
                  {buttonTwo.text}
                </a>
              )}
              {customButton}
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">{image}</div>
        </div>
      </div>
    </header>
  );
};
