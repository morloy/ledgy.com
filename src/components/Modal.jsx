// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';
import { track } from '../helpers/utilities';
import { Button } from '../layouts/utils';

export default ({
  id,
  children,
  title = '',
  button,
  buttonText = '',
  buttonProps = {},
  hideFooter = false,
  titleClassNames = '',
  onSave
}: {|
  id: string,
  titleClassNames?: string,
  children?: Node,
  title?: string | Node,
  button?: Node,
  buttonProps?: Object,
  buttonText?: Node,
  hideFooter?: boolean,
  onSave?: () => void
|}) => {
  const Btn = button;
  return (
    <>
      {Btn || (
        <Button onClick={() => track(`openModal-${id}`)} {...buttonProps}>
          {buttonText}
        </Button>
      )}

      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="customModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary d-flex align-items-center justify-content-center">
              <h5 className={`modal-title ${titleClassNames}`} id="customModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className={`close ${titleClassNames}`}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-dark">{children}</div>
            {!hideFooter && (
              <div className="modal-footer">
                <button type="button" className="btn btn-round btn-secondary" data-dismiss="modal">
                  <Trans>Close</Trans>
                </button>
                {onSave && (
                  <button type="button" className="btn btn-round btn-primary">
                    <Trans>Save changes</Trans>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
