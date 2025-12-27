
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SceneSection from './components/SceneSection';
import Agency from './components/Agency';
import Footer from './components/Footer';
import Concierge from './components/Concierge';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-luxury-champagne selection:bg-luxury-gold selection:text-black">
      <Navbar scrollY={scrollY} />
      
      <main>
        <Hero />
        
        <SceneSection 
          id="runway"
          title="The Runway"
          subtitle="Haute Couture & Fashion Shows"
          description="Where fabric meets motion. We produce high-impact fashion narratives that redefine the avant-garde."
          image="https://picsum.photos/id/64/1920/1080"
          alignment="right"
        />

        <SceneSection 
          id="union"
          title="The Union"
          subtitle="Eternal Celebrations"
          description="A cinematic approach to love. We capture the grand architecture of union with timeless elegance and poise."
          image="https://picsum.photos/id/453/1920/1080"
          alignment="left"
        />

        <SceneSection 
          id="monolith"
          title="The Monolith"
          subtitle="Corporate Architecture"
          description="Power, prestige, and precision. Elevating global brands through sophisticated visual storytelling and elite event production."
          image="https://picsum.photos/id/201/1920/1080"
          alignment="right"
        />

        <Agency id="faces" />

        {/* Gemini AI Powered Concierge */}
        <Concierge />
      </main>

      <Footer />
    </div>
  );
};

export default App;
