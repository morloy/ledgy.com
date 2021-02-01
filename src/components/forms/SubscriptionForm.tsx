import React, { Component, SyntheticEvent } from 'react';
import { Trans, t } from '@lingui/macro';
import 'isomorphic-fetch';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigate } from 'gatsby';

import { isValidEmail, FORM_STATUSES } from '../../helpers';
import { Button } from '../Button';
import { signupOnMixpanel, trackOnMixpanel } from './lib';
import { InvalidFieldHints } from './Fields';

const { FETCH_ERROR, IDLE, INVALID_EMAIL, LOADING } = FORM_STATUSES;

export class SubscriptionForm extends Component<
  { toggle?: () => void; trackingEvent: string },
  { email: string; status: FormStatus | string } //TS FIXME
> {
  state = { email: '', status: IDLE };
  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ email: e.target.value, status: IDLE }); //TS FIXME
  };
  handleSubmit = async (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ status: LOADING });
    const { email } = this.state;
    if (isValidEmail(email)) {
      try {
        const signupResponse = await signupOnMixpanel(email);
        if (signupResponse.status === 200) {
          trackOnMixpanel(email, this.props.trackingEvent);
          this.setState({ email: '', status: IDLE });
          if (this.props.toggle) this.props.toggle();
          navigate('/subscribed');
        } else {
          this.setState({ status: FETCH_ERROR });
        }
      } catch (error) {
        this.setState({ status: FETCH_ERROR });
      }
    } else {
      this.setState({ status: INVALID_EMAIL });
    }
  };
  render = () => {
    const { state } = this;
    const { status } = state;
    const invalid = status === INVALID_EMAIL;
    const error = status === FETCH_ERROR;
    const loading = status === LOADING;
    return (
      <>
        <form method="post" className="input-round py-4" onSubmit={this.handleSubmit} noValidate>
          <div className="form-group input-group bg-white p-2 my-4 position-relative">
            <input
              type="email"
              className="form-control"
              placeholder={t`Enter your email…`}
              onChange={this.handleChange}
              value={this.state.email}
              style={{ height: 'inherit' }}
            />
            <Button
              type="submit"
              className="button-embedded min-width-110px"
              disabled={invalid || error || loading}
            >
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} className="fa-lg spin" />
              ) : (
                <Trans>Subscribe</Trans>
              )}
            </Button>
            <InvalidFieldHints formStatus={status} className="position-absolute" />
          </div>
        </form>
      </>
    );
  };
}
