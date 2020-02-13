// @flow

import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!isOpen);

  return [isOpen, toggle];
};
