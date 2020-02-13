// @flow

export const track = (event: string, properties?: Object): void => {
  if (window.analytics) window.analytics.track(event, properties);
};

export const animateTablet = () => {
  let scrolling = false;
  window.onscroll = () => {
    scrolling = true;
  };
  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      const tablet = document.getElementById('tablet-ledgy');
      const banner = document.querySelector('header');
      const { scrollY } = window;
      if (tablet && banner && scrollY <= banner.clientHeight) {
        tablet.style.transform = `translateY(${scrollY / 50}%)`;
      }
    }
  }, 50);
};

export const isFieldMissing = (object: Object) => Object.values(object).some(field => !field);
