import React, { useState, useEffect } from 'react';
import { ArrowUp, Droplets } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-500 text-white shadow-lg 
                    hover:bg-blue-600 hover:shadow-xl focus:outline-none
                    transition-all duration-300 ease-in-out
                    flex flex-col items-center justify-center
                    group overflow-hidden z-50"
          aria-label="Back to top"
        >
          {/* Water droplet animation on hover */}
          <div className="absolute -top-8 transform group-hover:translate-y-9 transition-all duration-700">
            {/* <Droplets size={24} className="text-blue-200" /> */}
          </div>
          
          {/* Main arrow icon */}
          <ArrowUp 
            size={24} 
            className="group-hover:scale-110 transition-transform duration-300 " 
          />
          
          {/* Text label on hover */}
          <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Top
          </span>
          
          {/* Ripple effect circles (pseudo animations via group hover classes) */}
          <span className="absolute inset-0 rounded-full bg-white opacity-30 scale-0 group-hover:scale-100 group-hover:opacity-0 transition-all duration-1000"></span>
          <span className="absolute inset-0 rounded-full bg-white opacity-30 scale-0 group-hover:scale-100 group-hover:opacity-0 transition-all duration-1000 delay-300"></span>
        </button>
      )}
    </>
  );
};

export default BackToTop;