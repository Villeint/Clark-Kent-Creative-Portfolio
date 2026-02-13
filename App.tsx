import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-overlay opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="py-24 bg-zinc-950/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-5"></div>
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 font-syncopate text-3xl md:text-5xl leading-tight font-bold text-white/10 hover:text-white/100 transition-all duration-1000 cursor-default">
              I BELIEVE DESIGN SHOULD <span className="text-indigo-500 italic">SCREAM</span> BEFORE IT WHISPERS. IT'S ABOUT CREATING TENSION, RESOLUTION, AND UNFORGETTABLE <span className="text-indigo-400">MOMENTS</span> IN A CROWDED DIGITAL LANDSCAPE.
            </div>
            <div className="flex-1 space-y-8">
              <div className="w-12 h-0.5 bg-indigo-500"></div>
              <p className="text-white/50 leading-relaxed uppercase tracking-[0.2em] text-xs font-light">
                With over a decade of experience navigating the nebulous space between high art and commercial necessity, I help brands redefine their visual voice through radical experimentation.
              </p>
              <div className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-[0.3em]">
                 <div className="p-5 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-indigo-500/10 transition-colors">Typography</div>
                 <div className="p-5 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-indigo-500/10 transition-colors">Art Direction</div>
                 <div className="p-5 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-indigo-500/10 transition-colors">3D Rendering</div>
                 <div className="p-5 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-indigo-500/10 transition-colors">Brand Vision</div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;