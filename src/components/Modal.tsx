import React, { ReactNode, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import { Button } from './Button';

const getDocumentBody = () => (typeof document !== 'undefined' ? document.body : null);

const closeWithOutsideClick = (e: MouseEvent, close: () => void) => {
  e.stopPropagation();
  close();
};

const CloseButton = ({
  close,
  transparent = false,
}: {
  close: () => void;
  transparent?: boolean;
}) => (
  <Button className={`modal-close ${transparent ? 'transparent' : ''}`} onClick={close}>
    <span>&times;</span>
  </Button>
);

const ModalHeader = ({ title, close }: { title: ReactNode; close: () => void }) => (
  <div className="modal-header-custom d-flex justify-content-between align-items-center bg-primary text-white px-4 py-3">
    <h5 className="m-0">{title}</h5>
    <CloseButton close={close} />
  </div>
);

type ModalSize = 'md' | 'lg';

export const Modal = ({
  isOpen,
  close,
  title,
  children,
  className = '',
  size = 'md',
}: {
  isOpen: boolean;
  close: () => void;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
  size?: ModalSize;
}) => {
  const documentBody = getDocumentBody();
  const transparent = !title;
  return documentBody
    ? ReactDOM.createPortal(
        <CSSTransition in={isOpen} timeout={400} classNames="modal-transition" unmountOnExit>
          <div className="modal-page" onClick={(e) => closeWithOutsideClick(e, close)}>
            <div className={`h-100 w-100 ${className}`}>
              <div
                className={`modal-custom ${size} ${transparent ? 'transparent' : ''}`}
                onClick={(e) => e.stopPropagation()}
              >
                {title ? (
                  <ModalHeader title={title} close={close} />
                ) : (
                  <CloseButton close={close} transparent={transparent} />
                )}
                {children}
              </div>
            </div>
          </div>
        </CSSTransition>,
        documentBody
      )
    : null;
};
