import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

export const Loader = () => (
  <section>
    <header className="loader-banner d-flex justify-content-center align-items-center">
      <FontAwesomeIcon icon={faCircleNotch} />
    </header>
  </section>
);
