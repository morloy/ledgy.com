import { useState } from 'react';

import { toggleOverlay } from './toggleOverlay';

export const useModal = (): [boolean, () => void] => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => toggleOverlay(isOpen, setOpen);

  return [isOpen, toggle];
};
