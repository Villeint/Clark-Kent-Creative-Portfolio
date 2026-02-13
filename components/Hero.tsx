import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-grain"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="space-y-6 max-w-5xl">
          <h1 className="relative">
            <span className="block font-syncopate text-6xl md:text-[10rem] font-bold tracking-tighter leading-none mb-2">
              PIXEL
            </span>
            <span className="block font-marker text-7xl md:text-[12rem] text-indigo-500 transform -rotate-2 -mt-4 drop-shadow-lg animate-float">
              PERFECT
            </span>
          </h1>

          <div className="flex flex-col items-center justify-center gap-8 mt-4">
            <div className="inline-block border-l-4 border-indigo-500 pl-4 text-left">
              <h2 className="font-syncopate text-2xl font-bold uppercase tracking-tight">
                CLARK KENT <span className="text-white/50 text-sm font-normal block tracking-widest">VISUAL ALCHEMIST</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Repositioned Button - Moved down towards the scroll indicator as requested */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20">
         <a href="#projects" className="inline-block bg-white text-black px-10 py-4 font-bold text-xs tracking-[0.3em] hover:bg-indigo-500 hover:text-white transition-all duration-300 uppercase shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            EXPLORE ARCHIVE
         </a>
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