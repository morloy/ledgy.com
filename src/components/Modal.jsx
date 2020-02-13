/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow

import React, { type Node } from 'react';
import ReactDOM from 'react-dom';

import { Button } from './Button';

const closeWithOutsideClick = (e: SyntheticInputEvent<HTMLInputElement>, close: () => void) => {
  e.stopPropagation();
  close();
};

export const Modal = ({
  isOpen,
  close,
  children
}: {
  isOpen: boolean,
  close: () => void,
  children: Node
}) => {
  const container = document.body;
  return isOpen && container
    ? ReactDOM.createPortal(
        <>
          <div className="modal-wrapper" onClick={e => closeWithOutsideClick(e, close)}>
            <div className="modal-custom" onClick={e => e.stopPropagation()}>
              <div className="d-flex justify-content-end">
                <Button onClick={close}>
                  <span aria-hidden="true">&times;</span>
                </Button>
              </div>
              {children}
            </div>
          </div>
        </>,
        container
      )
    : null;
};
