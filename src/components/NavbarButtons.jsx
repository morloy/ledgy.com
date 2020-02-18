// @flow

import React from 'react';
import { Trans } from '@lingui/react';

import { appUrl, track } from '../helpers';

import { Button } from './Button';

export const NavbarButtons = ({ className = '' }: { className?: string }) => (
  <div className={`d-flex align-items-center ${className}`}>
    <Button
      outline
      href={`${appUrl}/login`}
      className="px-3 py-1"
      onClick={() => track('click.login')}
    >
      <Trans>Log In</Trans>
    </Button>
    <Button
      inverted
      className="ml-2 px-3 py-1"
      href={`${appUrl}/signup`}
      onClick={() => track('click.signup')}
    >
      <Trans>Sign up</Trans>
    </Button>
  </div>
);
