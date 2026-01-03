
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-black tracking-tighter flex items-center">
            <span className="text-white">BMW</span>
            <div className="h-6 w-[2px] bg-gray-600 mx-2"></div>
            <span className="text-blue-500">M8</span>
          </div>
          <div className="hidden lg:flex space-x-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href="#specs" className="hover:text-white transition-colors">Specifications</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#" className="hover:text-white transition-colors">Design</a>
            <a href="#" className="hover:text-white transition-colors">Safety</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="hidden sm:block text-xs font-bold uppercase tracking-widest text-white border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all">
            Find Dealer
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-blue-500 transition-colors">
            Book Test Drive
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
