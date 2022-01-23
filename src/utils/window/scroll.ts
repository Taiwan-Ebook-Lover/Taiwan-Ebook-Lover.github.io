import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export const scrollToTop = (): void => {
  window.scroll({ top: 0, behavior: 'smooth' });
};
