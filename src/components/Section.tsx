import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export const Section = ({
  children,
  ...props
}: { children: ReactNode } & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => (
  <section {...props} className="py-4 py-lg-7">
    <div className="container my-4">{children}</div>
  </section>
);
