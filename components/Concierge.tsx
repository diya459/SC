
import React, { useState } from 'react';
import { getStyleConsultation, StyleAdvice } from '../services/geminiService';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<StyleAdvice | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    const advice = await getStyleConsultation(prompt);
    setResult(advice);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Trigger */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-12 right-12 z-40 bg-luxury-gold text-black w-16 h-16 flex items-center justify-center rounded-full shadow-2xl hover:scale-110 transition-transform duration-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-2xl bg-luxury-noir border border-luxury-gold/30 p-8 md:p-12 shadow-[0_0_100px_rgba(212,175,55,0.1)] overflow-y-auto max-h-[90vh]">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-luxury-gold hover:text-white"
            >
              CLOSE
            </button>

            <div className="mb-12">
              <span className="text-luxury-gold text-[10px] tracking-widest uppercase mb-2 block">AI Design Concierge</span>
              <h2 className="text-4xl font-serif text-white">Style Consultation</h2>
              <p className="text-luxury-champagne/50 mt-2">Brief us on your vision. Our AI Creative Director will draft an aesthetic blueprint.</p>
            </div>

            {!result ? (
              <div className="space-y-6">
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Tell us about your event (e.g., 'A minimalist desert wedding' or 'A futuristic tech conference')..."
                  className="w-full h-32 bg-luxury-slate border border-luxury-gold/10 p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-luxury-gold transition-colors resize-none"
                ></textarea>
                <button 
                  onClick={handleConsult}
                  disabled={loading}
                  className="w-full py-4 bg-luxury-gold text-black font-black uppercase text-[10px] tracking-widest hover:bg-white transition-colors"
                >
                  {loading ? 'Consulting the Oracle...' : 'Generate Visual Blueprint'}
                </button>
              </div>
            ) : (
              <div className="space-y-8 animate-[fadeIn_1s_ease-out]">
                <div>
                  <h4 className="text-luxury-gold text-[10px] uppercase tracking-widest mb-1">Aesthetic Profile</h4>
                  <p className="text-2xl font-serif italic text-white">{result.vibe}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-luxury-gold text-[10px] uppercase tracking-widest mb-1">Lighting & Atmos</h4>
                    <p className="text-sm text-luxury-champagne/70 leading-relaxed">{result.lightingSuggestion}</p>
                  </div>
                  <div>
                    <h4 className="text-luxury-gold text-[10px] uppercase tracking-widest mb-1">Creative Direction</h4>
                    <p className="text-sm text-luxury-champagne/70 leading-relaxed">{result.productionNote}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-luxury-gold text-[10px] uppercase tracking-widest mb-3">Suggested Scenes</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.recommendedServices.map((service, i) => (
                      <span key={i} className="px-4 py-2 border border-luxury-gold/20 text-[10px] uppercase tracking-widest text-luxury-gold">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setResult(null)}
                  className="mt-8 text-[10px] text-luxury-gold border-b border-luxury-gold/30 pb-1 uppercase tracking-widest hover:text-white hover:border-white transition-all"
                >
                  New Consultation
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Concierge;
