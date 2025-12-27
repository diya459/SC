
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-noir border-t border-white/5 py-24 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div className="md:col-span-2">
          <div className="text-4xl font-serif font-black mb-8">
            <span className="text-luxury-gold">S</span>
            <span className="text-white">C</span>
          </div>
          <p className="text-luxury-champagne/40 max-w-sm text-sm leading-relaxed uppercase tracking-widest">
            The world's premier production house for haute couture, union, and corporate monoliths.
          </p>
        </div>

        <div>
          <h5 className="text-[10px] tracking-widest uppercase font-black text-white mb-6">Contact</h5>
          <ul className="space-y-4 text-sm text-luxury-champagne/50">
            <li className="hover:text-luxury-gold transition-colors cursor-pointer">London • New York • Paris</li>
            <li className="hover:text-luxury-gold transition-colors cursor-pointer">enquire@scproduction.com</li>
            <li className="hover:text-luxury-gold transition-colors cursor-pointer">+44 20 7946 0958</li>
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] tracking-widest uppercase font-black text-white mb-6">Social</h5>
          <ul className="space-y-4 text-sm text-luxury-champagne/50 uppercase tracking-widest text-[10px]">
            <li className="hover:text-luxury-gold transition-colors cursor-pointer">Instagram</li>
            <li className="hover:text-luxury-gold transition-colors cursor-pointer">Vimeo</li>
            <li className="hover:text-luxury-gold transition-colors cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-6">
        <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-champagne/20">
          © 2024 SC Production House. All rights reserved.
        </span>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-luxury-champagne/30">
          <span className="hover:text-luxury-gold transition-colors cursor-pointer">Privacy</span>
          <span className="hover:text-luxury-gold transition-colors cursor-pointer">Legal</span>
          <span className="hover:text-luxury-gold transition-colors cursor-pointer">Credits</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
