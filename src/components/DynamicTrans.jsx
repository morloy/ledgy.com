// @flow

import React from 'react';
import { withI18n } from '@lingui/react';
import { i18n } from '@lingui/core';
import { Trans } from '@lingui/macro';
import { isBrowser } from '../helpers';
import { addTranslation } from '../helpers/dynamicTranslations';

const DynamicTransComponent = ({ children: text }: {| children: string |}) => {
  if (!isBrowser) addTranslation(text);

  return <Trans id={text}>{text}</Trans>;
};

export const DynamicTrans = withI18n()(DynamicTransComponent);
export const dynamicI18n = (text: string): string => {
  addTranslation(text);
  return i18n._(text);
};
