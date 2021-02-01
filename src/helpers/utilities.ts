export const track = (
  event: string,
  properties?: {
    [key: string]: any;
  }
): void => {
  if (window.analytics) window.analytics.track(event, properties);
};

export const animateLaptop = () => {
  let scrolling = false;
  window.onscroll = () => {
    scrolling = true;
  };
  setInterval(() => {
    if (scrolling) {
      scrolling = false;
      const laptop = document.getElementById('laptop-ledgy');
      const banner = document.querySelector('header');
      const { scrollY } = window;
      if (laptop && banner && scrollY <= banner.clientHeight) {
        laptop.style.transform = `translateY(${scrollY / 50}%)`;
      }
    }
  }, 50);
};

export const isFieldMissing = (object: { [key: string]: any }) =>
  Object.values(object).some((field) => !field);

export const shuffleArray = <T>(array: T[]): T[] =>
  array.reduce((res, val, index) => {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const copy = [...res];
    copy[index] = copy[randomIndex];
    copy[randomIndex] = val;
    return copy;
  }, array);
