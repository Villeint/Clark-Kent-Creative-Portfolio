
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-grain"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8 order-2 md:order-1">
          <div className="flex items-center space-x-4">
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" className="h-4 invert opacity-50" alt="Nike" />
             <span className="text-white/30 text-xs">X</span>
             <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/The_North_Face_logo.svg" className="h-6 invert opacity-50" alt="TNF" />
          </div>
          
          <h1 className="relative">
            <span className="block font-syncopate text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-2">
              PIXEL
            </span>
            <span className="block font-marker text-6xl md:text-9xl text-purple-500 transform -rotate-2 -mt-4 drop-shadow-lg animate-float">
              PERFECT
            </span>
          </h1>

          <div className="max-w-md space-y-6">
            <h2 className="font-syncopate text-2xl font-bold border-l-4 border-purple-500 pl-4">
              CLARK KENT <span className="text-white/50 text-sm font-normal block">VISUAL ALCHEMIST</span>
            </h2>
            <p className="text-white/60 text-sm uppercase tracking-widest leading-relaxed">
              Crafting digital realities at the intersection of high fashion and street grit.
              Available for world-class collaborations.
            </p>
            <div className="pt-4">
               <a href="#work" className="inline-block bg-white text-black px-8 py-4 font-bold text-xs tracking-widest hover:bg-purple-500 hover:text-white transition-all duration-300">
                  EXPLORE ARCHIVE
               </a>
            </div>
          </div>
        </div>

        <div className="flex-1 relative order-1 md:order-2">
          {/* Main profile image placeholder that mimics the provided image style */}
          <div className="relative group">
            <div className="absolute inset-0 bg-purple-500/20 mix-blend-color-dodge rounded-2xl group-hover:bg-purple-500/40 transition-all"></div>
            <img 
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=1000" 
              alt="Clark Kent" 
              className="w-full h-auto grayscale-50 rounded-2xl border-4 border-white/5 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Branding Overlays */}
            <div className="absolute top-4 left-4 flex flex-col items-center">
              <div className="bg-blue-600 p-2 rounded-lg shadow-lg mb-2">
                 <span className="text-white font-bold text-xl">Ps</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white/80 font-syncopate text-xs tracking-[0.3em]">
              EST. 1992 / GOTHAM
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-widest uppercase font-bold">Scroll</span>
        <div className="w-0.5 h-12 bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
