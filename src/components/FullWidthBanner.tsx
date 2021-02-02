import React, { ReactNode } from 'react';

export const FullWidthBanner = (props: { children: ReactNode }) => {
  return <div className="w-100 py-6 bg-light">{props.children}</div>;
};
