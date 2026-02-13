import React from 'react';
import { CATEGORIES, CategoryGroup } from '../constants';

const Folder: React.FC<{ category: CategoryGroup }> = ({ category }) => {
  return (
    <div className="relative w-full aspect-[14/10] group cursor-pointer perspective-1000">
      {/* Indigo Glow on idle, fades on hover */}
      <div className="absolute -inset-4 bg-indigo-600/10 blur-[40px] rounded-[40px] opacity-100 group-hover:opacity-0 transition-opacity duration-700"></div>
      <div className="absolute -inset-0.5 border border-indigo-500/20 rounded-[35px] opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>

      {/* Background hint - subtle visible project stack even when not hovered (See-through effect) */}
      <div className="absolute inset-x-8 top-10 bottom-6 z-0 flex items-center justify-center pointer-events-none">
        {category.projects.slice(0, 3).map((project, idx) => (
          <div 
            key={project.id}
            className={`absolute w-[85%] h-[85%] rounded-2xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
              ${idx === 0 ? 'scale-[0.85] translate-y-3 translate-x-1 group-hover:-translate-y-24 group-hover:-rotate-6 group-hover:opacity-100' : ''}
              ${idx === 1 ? 'scale-[0.92] translate-y-1.5 -translate-x-1 group-hover:-translate-y-20 group-hover:rotate-3 group-hover:opacity-100' : ''}
              ${idx === 2 ? 'scale-100 translate-y-0 group-hover:-translate-y-12 group-hover:rotate-0 group-hover:opacity-100' : ''}
            `}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700"
            />
          </div>
        ))}
      </div>

      {/* The Folder Visual Structure - Actual Folder Shape */}
      <div className="absolute inset-0 z-20 transition-all duration-500 group-hover:translate-y-4">
        
        {/* Folder Container with Tab Shape using Clip-Path */}
        <div 
          className="relative w-full h-full bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col group-hover:bg-white/10 transition-all duration-500"
          style={{
            clipPath: 'polygon(0% 18%, 38% 18%, 46% 0%, 92% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 30px 30px 30px'
          }}
        >
          {/* Subtle line to define the tab border inside */}
          <div className="absolute top-[18%] left-0 w-[46%] h-px bg-white/20"></div>
          <div className="absolute top-0 left-[46%] w-px h-[18%] bg-white/20"></div>

          {/* Content inside the folder */}
          <div className="relative z-10 p-8 pt-20 h-full flex flex-col justify-between">
            {/* Header info - usually hidden in the tab area */}
            <div className="absolute top-6 left-8 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="w-4 h-4 rounded-full border border-indigo-400/50 flex items-center justify-center">
                <div className="w-1 h-1 bg-indigo-400 rounded-full"></div>
              </div>
              <span className="font-mono text-[8px] font-bold tracking-widest text-indigo-300 uppercase">Archive_{category.id.split('-')[0]}</span>
            </div>

            {/* Main Label */}
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="h-0.5 w-12 bg-indigo-500/40 rounded-full group-hover:w-24 transition-all duration-700"></div>
                <h3 className="font-syncopate text-xl md:text-2xl font-black leading-tight text-white/80 group-hover:text-white transition-colors uppercase">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex justify-between items-end border-t border-white/5 pt-6">
                <div className="space-y-1">
                   <p className="font-bold text-[9px] tracking-widest uppercase text-white/30">Visual Assets</p>
                   <p className="font-marker text-lg text-indigo-300/40 group-hover:text-indigo-400 group-hover:animate-pulse transition-colors">View Projects_</p>
                </div>
                <div className="bg-white/5 text-indigo-300 px-4 py-2 rounded-full font-mono text-[10px] font-bold border border-white/10 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/20 transition-all">
                   0{category.projects.length}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Border Highlight */}
        <div className="absolute inset-0 rounded-[35px] border-2 border-indigo-500/0 group-hover:border-indigo-500/30 transition-all duration-700 pointer-events-none"></div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-40 bg-[#050505] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-indigo-950/20 blur-[200px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-32 space-y-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-white/10 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
            <span className="text-white/50 font-bold tracking-[0.4em] text-[10px] uppercase">Work Directory System v1.0</span>
          </div>
          <h2 className="font-syncopate text-6xl md:text-9xl font-black tracking-tighter leading-none text-glow uppercase">
            SELECTED <br /> <span className="text-transparent border-text stroke-white">MODULES</span>
          </h2>
          <p className="text-white/40 text-xs tracking-[0.4em] uppercase max-w-xl mx-auto leading-relaxed italic">
            "A structured chaos of creativity, archived for your discovery."
          </p>
        </div>

        {/* Folders Grid - Categorized as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {CATEGORIES.map((cat) => (
            <Folder key={cat.id} category={cat} />
          ))}
        </div>

        {/* Footer of Work Section */}
        <div className="mt-64 text-center">
          <div className="w-px h-32 bg-gradient-to-b from-indigo-500/50 to-transparent mx-auto mb-12"></div>
          <p className="text-[10px] font-bold text-white/10 tracking-[1em] uppercase">
            Scrolling beyond the horizon...
          </p>
        </div>
      </div>

      <style>{`
        .border-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
      `}</style>
    </section>
  );
};

export default Projects;