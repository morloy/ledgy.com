import React, { Node } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ReadMore = (props: { icon: string; title: Node; subtitle: Node }) => {
  const { icon, title, subtitle } = props;
  return (
    <>
      <FontAwesomeIcon icon={icon} className="text-primary mb-2" size="2x" />
      <h5>{title}</h5>
      <>{subtitle}</>
    </>
  );
};
