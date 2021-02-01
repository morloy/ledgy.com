import React from 'react';
import { i18n } from '@lingui/core';
import { isBrowser } from '../helpers';
import { addTranslation } from '../helpers/dynamicTranslations';

export const DynamicTrans = ({ children: text }: { children: string }) => {
  if (!isBrowser) addTranslation(text);

  return <>{i18n._(text)}</>;
};

export const dynamicI18n = (text: string): string => {
  addTranslation(text);
  return i18n._(text);
};
