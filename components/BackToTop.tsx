import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="relative group flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_35px_rgba(79,70,229,0.8)] transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Back to top"
      >
        {/* Pulsing Glow Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-indigo-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping duration-1000"></div>
        <div className="absolute -inset-1 rounded-full bg-indigo-500/20 blur-md animate-pulse"></div>
        
        <svg 
          className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
        </svg>

        {/* Subtle Text Label on Hover */}
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-300 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Return Top
        </span>
      </button>
    </div>
  );
};

export default BackToTop;