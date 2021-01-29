

import React, { Node } from "react";

export const CircleBadge = ({
  children
}: {children: Node | Array<Node>;}) => <div className="circle-badge d-inline-flex align-items-center justify-content-center mr-4">
    {children}
  </div>;