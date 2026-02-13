import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-overlay opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="py-32 bg-zinc-950/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-5"></div>
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-start gap-16">
            <div className="flex-1 font-syncopate text-3xl md:text-5xl leading-tight font-bold text-white/10 hover:text-white/100 transition-all duration-1000 cursor-default uppercase">
              I BELIEVE DESIGN SHOULD <span className="text-indigo-500 italic">SCREAM</span> BEFORE IT WHISPERS. IT'S ABOUT CREATING TENSION, RESOLUTION, AND UNFORGETTABLE <span className="text-indigo-400">MOMENTS</span> IN A CROWDED DIGITAL LANDSCAPE.
            </div>
            <div className="flex-1 space-y-12">
              <div className="w-12 h-0.5 bg-indigo-500"></div>
              
              <div className="space-y-6">
                <h3 className="font-syncopate text-3xl md:text-4xl font-bold text-indigo-500 italic uppercase tracking-tighter">
                  ABOUT ME
                </h3>
                <div className="space-y-4">
                  <p className="text-white/60 leading-relaxed uppercase tracking-[0.2em] text-sm font-light max-w-lg">
                    MY NAME IS CLARK KENT AMARGO. I USED TO BE CALLED CK. I'M FROM THE PHILIPPINES, CANDELARIA QUEZON. WITH A DEGREE OF BACHELOR OF SCIENCE IN COMPUTER SCIENCE.
                  </p>
                  <p className="text-white/40 leading-relaxed uppercase tracking-[0.2em] text-xs font-light max-w-lg italic">
                    I HAVE HOBBIES IN GRAPHICS/LAYOUT DESIGNING, PHOTO EDITING, PHOTOGRAPHY AND ONLINE GAMES.
                  </p>
                </div>
              </div>
              
              {/* Skills grid moved down with top margin as requested */}
              <div className="mt-24 pt-8">
                <div className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase tracking-[0.3em]">
                   <div className="p-5 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-indigo-500/10 transition-colors">Layout Design</div>
                   <div className="p-5 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-indigo-500/10 transition-colors">Art Direction</div>
                   <div className="p-5 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-indigo-500/10 transition-colors col-span-2">Brand Vision</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;