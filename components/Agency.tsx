
import React from 'react';

const MODELS = [
  { name: 'Elena V', type: 'High Fashion', img: 'https://picsum.photos/id/1027/800/1200' },
  { name: 'Julian R', type: 'Editorial', img: 'https://picsum.photos/id/64/800/1200' },
  { name: 'Sasha K', type: 'Runway', img: 'https://picsum.photos/id/342/800/1200' },
  { name: 'Marcus D', type: 'Commercial', img: 'https://picsum.photos/id/447/800/1200' },
];

const Agency: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="bg-luxury-noir py-32 px-6 md:px-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter text-white mb-6">
            The <span className="text-luxury-gold italic">Faces</span>
          </h2>
          <p className="text-luxury-champagne/60 text-lg">
            Representing the industry's most distinct aesthetic identities. We curate talent with unparalleled editorial potential.
          </p>
        </div>
        <button className="text-[10px] tracking-widest uppercase font-black px-8 py-4 border border-luxury-gold/20 hover:bg-luxury-gold hover:text-black transition-all">
          View All Talent
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {MODELS.map((model, idx) => (
          <div key={idx} className="group relative overflow-hidden aspect-[3/4] cursor-pointer">
            <img 
              src={model.img} 
              alt={model.name} 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-[1.02] group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-2xl font-serif font-bold text-white">{model.name}</h3>
              <p className="text-luxury-gold text-[10px] uppercase tracking-widest">{model.type}</p>
            </div>

            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-xs">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 border border-luxury-gold/10 bg-luxury-slate/50 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h4 className="text-2xl font-serif font-bold text-white">Scouting Department</h4>
          <p className="text-luxury-champagne/50">Submit your portfolio for consideration into our elite board.</p>
        </div>
        <button className="px-10 py-4 bg-white text-black text-[10px] tracking-[0.2em] font-black hover:bg-luxury-gold transition-colors">
          APPLICATION FORM
        </button>
      </div>
    </section>
  );
};

export default Agency;
