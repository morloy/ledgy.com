// @flow

import React, { type Node } from 'react';

export const FullWidthBanner = (props: { children: Node }) => {
  return <section className="section w-100 py-6">{props.children}</section>;
};
