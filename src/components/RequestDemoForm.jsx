// @flow

import React, { useState, type Node } from 'react';
import { faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Trans } from '@lingui/react';

import { COMPANY_SIZES, FORM_STATES } from '../helpers';
import { handleDemoAccessSubmit, type DemoFormStatus, isSmallCompany } from './lib';

const { ERROR, IDLE, INVALID_EMAIL, INVALID_FIELDS, LOADING, SUBMITTED } = FORM_STATES;

const Label = ({ text }: { text: Node }) => <span>{text}</span>;
const Input = ({
  state,
  setState,
  placeholder,
  setFormStatus,
  name
}: {|
  state: string,
  setState: string => void,
  placeholder: string,
  setFormStatus: DemoFormStatus => void,
  name: string
|}) => (
  <div className="form-group input-group bg-white p-2 mt-2 mb-4">
    <input
      className="form-control"
      placeholder={placeholder}
      onChange={e => {
        setState(e.target.value);
        setFormStatus(IDLE);
      }}
      value={state}
      name={name}
    />
  </div>
);

export const RequestDemoForm = ({
  isDemoRequested,
  setDemoRequested,
  toggle
}: {|
  isDemoRequested: boolean,
  setDemoRequested: boolean => void,
  toggle: () => void
|}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [formStatus, setFormStatus] = useState(IDLE);
  const state = { name, email, companyName, companySize };

  const invalidEmail = formStatus === INVALID_EMAIL;
  const invalidFields = formStatus === INVALID_FIELDS;
  const error = formStatus === ERROR;
  const loading = formStatus === LOADING;
  const submitted = formStatus === SUBMITTED || isDemoRequested;

  return submitted ? (
    <div className="d-flex align-items-center">
      <FontAwesomeIcon icon={faCheckCircle} size="2x" className="text-primary mr-4" />
      {isSmallCompany(companySize) ? (
        <Trans>You are being redirected to the demo</Trans>
      ) : (
        <Trans>We’ll be in touch shortly</Trans>
      )}
    </div>
  ) : (
    <form
      method="post"
      id="getDemo"
      onSubmit={event =>
        handleDemoAccessSubmit({ event, state, setFormStatus, setDemoRequested, toggle })
      }
      noValidate
    >
      <p className="text-dark">
        <Trans>Please fill out the form below to access the demo</Trans>
      </p>
      <Label text={<Trans>Your email *</Trans>} />
      <Input
        state={email}
        setState={setEmail}
        placeholder="elon@must.com"
        setFormStatus={setFormStatus}
        name="email"
      />

      <Label text={<Trans>Your name</Trans>} />
      <Input
        state={name}
        setState={setName}
        placeholder="Elon Must"
        setFormStatus={setFormStatus}
        name="name"
      />

      <Label text={<Trans>Company name</Trans>} />
      <Input
        state={companyName}
        setState={setCompanyName}
        placeholder="SpaceY"
        setFormStatus={setFormStatus}
        name="companyName"
      />

      <Label text={<Trans>Number of employees *</Trans>} />
      <div className="d-flex mt-2 mb-4">
        <input type="hidden" name="companySize" />
        {COMPANY_SIZES.map(size => (
          <button
            type="button"
            key={size}
            onClick={() => {
              setCompanySize(size);
              setFormStatus(IDLE);
            }}
            className={`btn multi-button border border-muted px-1 py-4 ${
              size === companySize ? 'bg-primary text-white' : ''
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-6">
        <small className="text-danger form-error-message">
          {invalidFields && <Trans>* Please fill in required fields</Trans>}
          {invalidEmail && <Trans>Oops. This email address is invalid.</Trans>}
          {error && <Trans>Something went wrong, please try again.</Trans>}
        </small>
        <button
          type="submit"
          className="btn btn-primary btn-round btn-xl min-width-120px"
          disabled={invalidFields || invalidEmail || error || loading}
        >
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} className="fa-lg spin" />
          ) : (
            <Trans>Submit</Trans>
          )}
        </button>
      </div>
    </form>
  );
};
