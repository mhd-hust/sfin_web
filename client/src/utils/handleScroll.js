import { useEffect, useState } from 'react';

export const scrolled = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.pageYOffset > 0);
    });
  }, []);

  return scroll;
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
