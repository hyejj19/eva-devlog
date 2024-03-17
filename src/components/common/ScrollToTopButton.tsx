'use client';

import { useEffect, useState } from 'react';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        aria-label="scroll to top"
        className="md:w-12 md:h-12 w-8 h-8 bg-main-orange transition-transform duration-200 flex fixed md:right-10 md:bottom-10 right-3 bottom-3 bg-primary rounded-full justify-center items-center text-white"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="md:w-6 md:h-6 w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    )
  );
};
