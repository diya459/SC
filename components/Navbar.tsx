
import React from 'react';

interface NavbarProps {
  scrollY: number;
}

const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const isScrolled = scrollY > 50;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-6 flex justify-between items-center border-b ${
        isScrolled ? 'bg-luxury-noir/90 border-luxury-gold/20 py-4 backdrop-blur-md' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="flex items-center gap-12">
        <div className="text-2xl font-serif font-black tracking-tighter cursor-pointer group">
          <span className="text-luxury-gold group-hover:text-white transition-colors">S</span>
          <span className="text-white group-hover:text-luxury-gold transition-colors">C</span>
        </div>
        
        <div className="hidden md:flex gap-8 uppercase text-[10px] tracking-widest font-semibold text-luxury-champagne/60">
          <a href="#runway" className="hover:text-luxury-gold transition-colors">Runway</a>
          <a href="#union" className="hover:text-luxury-gold transition-colors">Union</a>
          <a href="#monolith" className="hover:text-luxury-gold transition-colors">Monolith</a>
          <a href="#faces" className="hover:text-luxury-gold transition-colors">Faces</a>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <button className="px-5 py-2 border border-luxury-gold/30 text-[10px] uppercase tracking-widest hover:bg-luxury-gold hover:text-black transition-all duration-500">
          Enquire
        </button>
        <div className="flex flex-col gap-1 cursor-pointer group">
          <span className="w-6 h-[1px] bg-luxury-gold group-hover:w-8 transition-all"></span>
          <span className="w-8 h-[1px] bg-luxury-gold group-hover:w-6 transition-all"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
