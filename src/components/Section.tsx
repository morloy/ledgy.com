import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export const Section = ({
  children,
  className = '',
  ...props
}: { children: ReactNode } & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
  <section {...props} className={`py-4 py-lg-7 ${className}`}>
    <div className="container my-2 my-md-4">{children}</div>
  </section>
);
