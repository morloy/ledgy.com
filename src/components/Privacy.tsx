import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const PrivacyElement = ({
  icon,
  title,
  body,
  size,
}: {
  icon: IconDefinition;
  title: ReactNode;
  body?: ReactNode;
  size?: string;
}) => (
  <div className={`col-12 col-lg-${String(size)}`}>
    <div className="media">
      <FontAwesomeIcon icon={icon} size="3x" fixedWidth className="mr-2 mt-1" />
      <p className="media-body mb-0">
        <strong className="d-block">{title}</strong>
        {body}
      </p>
    </div>
  </div>
);
PrivacyElement.defaultProps = { body: '', size: '12' };

export const PrivacyRow = ({ children }: { children: Array<Node> }) => (
  <div className="row gap-y my-4">{children}</div>
);
