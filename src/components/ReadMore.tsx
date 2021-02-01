import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const ReadMore = (props: {
  icon: IconDefinition;
  title: ReactNode;
  subtitle: ReactNode;
}) => {
  const { icon, title, subtitle } = props;
  return (
    <>
      <FontAwesomeIcon icon={icon} className="text-primary mb-2" size="2x" />
      <h5>{title}</h5>
      <>{subtitle}</>
    </>
  );
};
