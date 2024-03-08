import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    typeof window !== 'undefined' && localStorage.theme === 'dark',
  );

  useEffect(() => {
    function themeInit() {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
      } else {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
      }
    }

    themeInit();
  }, []);

  return { isDarkMode, setIsDarkMode };
};
