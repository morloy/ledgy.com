import React, { ReactNode } from 'react';
import { Trans } from '@lingui/macro';

import { FORM_STATUSES } from '../../helpers';

export const Label = ({ text }: { text: ReactNode }) => <span>{text}</span>;

export const Input = ({
  state,
  setState,
  placeholder,
  setFormStatus,
  name,
  wrapperClassName,
  className = '',
  type,
  ...props
}: {
  state: string;
  setState: (arg0: string) => void;
  placeholder: string;
  setFormStatus: (arg0: FormStatus | string) => void; // TS FIXME
  name: string;
  wrapperClassName: string;
  className?: string;
  type?: string;
}) => (
  <div className={`input-group ${wrapperClassName}`}>
    <input
      {...props}
      className={`form-control ${className}`}
      placeholder={placeholder}
      onChange={(e) => {
        setState(e.target.value);
        setFormStatus(FORM_STATUSES.IDLE);
      }}
      value={state}
      name={name}
    />
  </div>
);

export const InvalidFieldHints = ({
  formStatus,
  className = '',
}: {
  formStatus: string;
  className?: string;
}) => {
  const { INVALID_FIELDS, INVALID_REQUIRED_FIELDS, INVALID_EMAIL, FETCH_ERROR } = FORM_STATUSES;
  return (
    <small className={`text-danger form-error-message ${className}`}>
      {formStatus === INVALID_FIELDS && <Trans>Please fill in all fields</Trans>}
      {formStatus === INVALID_REQUIRED_FIELDS && <Trans>* Please fill in required fields</Trans>}
      {formStatus === INVALID_EMAIL && <Trans>Please enter a valid company email.</Trans>}
      {formStatus === FETCH_ERROR && <Trans>Something went wrong, please try again.</Trans>}
    </small>
  );
};
