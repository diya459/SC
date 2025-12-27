
import React, { useEffect, useRef, useState } from 'react';

interface SceneSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alignment: 'left' | 'right';
}

const SceneSection: React.FC<SceneSectionProps> = ({ id, title, subtitle, description, image, alignment }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className="py-24 md:py-48 px-6 md:px-24 overflow-hidden">
      <div className={`flex flex-col ${alignment === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
        
        {/* Content Box */}
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <span className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] font-bold">
              {subtitle}
            </span>
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-serif font-black mb-8 leading-tight tracking-tighter transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {title.split(' ')[0]} <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-luxury-champagne">
              {title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
          
          <p className={`text-luxury-champagne/70 text-lg leading-relaxed max-w-md transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {description}
          </p>
          
          <div className={`mt-12 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href={`#${id}-details`} className="group flex items-center gap-4 text-[10px] uppercase tracking-widest font-black">
              <span>Discover the Scene</span>
              <div className="w-12 h-[1px] bg-luxury-gold group-hover:w-24 transition-all duration-500"></div>
            </a>
          </div>
        </div>

        {/* Cinematic Visual Box */}
        <div className={`w-full md:w-1/2 relative group image-zoom-hover overflow-hidden transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <div className="aspect-[4/5] overflow-hidden bg-luxury-slate">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-luxury-gold/30 pointer-events-none"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-luxury-gold/30 pointer-events-none"></div>
          
          <div className="absolute bottom-8 left-8">
            <span className="text-[6rem] font-serif font-black opacity-5 text-white select-none">
              {title.split(' ')[1] || title.split(' ')[0]}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SceneSection;
