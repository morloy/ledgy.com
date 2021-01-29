

import React, { Node } from "react";

export const FullWidthBanner = (props: {children: Node;}) => {
  return <div className="w-100 py-6 bg-light">{props.children}</div>;
};