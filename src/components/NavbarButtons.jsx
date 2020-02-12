// @flow

import React from 'react';
import { Trans } from '@lingui/react';

import { appUrl, trackSignupGoogleAnalytics } from '../helpers';

import { Button } from './Button';

export const NavbarButtons = ({ className = '' }: { className?: string }) => (
  <div className={`d-flex align-items-center ${className}`}>
    <Button outline href={`${appUrl}/login`} onClick={() => trackSignupGoogleAnalytics('login')}>
      <Trans>Log In</Trans>
    </Button>
    <Button
      inverted
      className="ml-2"
      href={`${appUrl}/signup`}
      onClick={() => trackSignupGoogleAnalytics('clickSignup')}
    >
      <Trans>Sign up</Trans>
    </Button>
  </div>
);
