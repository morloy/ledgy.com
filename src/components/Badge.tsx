import React, { ReactNode } from 'react';

export const CircleBadge = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <div className="circle-badge d-inline-flex align-items-center justify-content-center mr-4">
    {children}
  </div>
);
