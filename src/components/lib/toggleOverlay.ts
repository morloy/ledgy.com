

const addOverlay = () => document.body?.classList.add('overlay');
export const removeOverlay = () => document.body?.classList.remove('overlay');

export const toggleOverlay = (isOverlayOpen: boolean, toggle: (arg0: boolean) => void) => {
  if (document.body) {
    if (!isOverlayOpen) {
      addOverlay();
      toggle(true);
    } else {
      removeOverlay();
      toggle(false);
    }
  }
};