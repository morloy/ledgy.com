import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

declare type SectionProps = {
  children: ReactNode;
  noPadding?: boolean;
  smallPadding?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Section = ({
  children,
  className = '',
  noPadding = false,
  smallPadding = false,
  ...props
}: SectionProps) => {
  const padding = noPadding ? '' : `py-${smallPadding ? 2 : 4} py-lg-${smallPadding ? 4 : 8}`;
  return (
    <section {...props} className={`${padding} ${className}`}>
      <div className="container my-0 my-md-4">{children}</div>
    </section>
  );
};
