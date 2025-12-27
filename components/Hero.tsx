
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-noir">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://picsum.photos/id/158/1920/1080" 
          alt="Cinematic Background" 
          className="w-full h-full object-cover grayscale scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-noir/80 via-transparent to-luxury-noir"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 border border-luxury-gold/50 text-[10px] tracking-[0.4em] uppercase text-luxury-gold animate-pulse">
            Est. MMXXIV
          </span>
        </div>
        
        <div className={`line-reveal ${isActive ? 'active' : ''}`}>
          <h1 className="line-reveal-child text-6xl md:text-9xl font-serif font-black tracking-tighter text-white leading-none">
            LUXURY <br />
            <span className="text-luxury-gold italic">PRODUCTION</span>
          </h1>
        </div>

        <div className={`mt-8 line-reveal ${isActive ? 'active' : ''} transition-delay-500`}>
          <p className="line-reveal-child max-w-xl mx-auto text-luxury-champagne/60 text-sm md:text-base font-light tracking-wide leading-relaxed">
            Crafting high-end visual experiences for the world's most distinguished brands and moments. A symphony of light, motion, and editorial poise.
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <button className="h-12 px-8 bg-luxury-gold text-black uppercase text-[10px] tracking-widest font-black hover:bg-white transition-all duration-700">
            View Film
          </button>
          <button className="h-12 px-8 border border-white/20 uppercase text-[10px] tracking-widest font-bold hover:border-luxury-gold transition-all duration-700">
            Portfolio
          </button>
        </div>
      </div>

      {/* Frame Elements */}
      <div className="absolute top-12 left-12 right-12 bottom-12 border border-white/5 pointer-events-none hidden md:block"></div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-widest text-luxury-gold/50 rotate-90 mb-4 origin-center">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
