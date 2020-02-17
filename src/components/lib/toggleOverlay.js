// @flow

export const toggleOverlay = (isOverlayOpen: boolean, toggle: boolean => void) => {
  if (document.body) {
    if (!isOverlayOpen) {
      document.body.classList.add('overlay');
      toggle(true);
    } else {
      document.body.classList.remove('overlay');
      toggle(false);
    }
  }
};
