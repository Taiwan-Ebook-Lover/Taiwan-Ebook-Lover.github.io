export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const shakeView = (): void => {
  const scrollY = window.scrollY;
  window.scrollTo({ top: scrollY + 1 });
  window.scrollTo({ top: scrollY - 1 });
  window.scrollTo({ top: scrollY });
};
