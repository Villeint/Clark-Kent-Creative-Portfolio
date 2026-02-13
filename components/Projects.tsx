import React, { useState, useEffect, useRef } from 'react';
import { CATEGORIES, CategoryGroup } from '../constants';

interface FolderProps {
  category: CategoryGroup;
  index: number;
  onClick: () => void;
}

const Folder: React.FC<FolderProps> = ({ category, index, onClick }) => {
  const displayIndex = (index + 1).toString().padStart(2, '0');
  
  return (
    <div 
      className="relative w-full aspect-[14/10] group cursor-pointer perspective-1000"
      onClick={onClick}
    >
      <div className="absolute -inset-4 bg-indigo-600/10 blur-[40px] rounded-[40px] opacity-100 group-hover:opacity-0 transition-opacity duration-700"></div>
      <div className="absolute -inset-0.5 border border-indigo-500/20 rounded-[35px] opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>

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

      <div className="absolute inset-0 z-20 transition-all duration-500 group-hover:translate-y-4">
        <div 
          className="relative w-full h-full bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col group-hover:bg-white/10 transition-all duration-500"
          style={{
            clipPath: 'polygon(0% 18%, 38% 18%, 46% 0%, 92% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 30px 30px 30px'
          }}
        >
          <div className="absolute top-[18%] left-0 w-[46%] h-px bg-white/20"></div>
          <div className="absolute top-0 left-[46%] w-px h-[18%] bg-white/20"></div>

          <div className="relative z-10 p-8 pt-20 h-full flex flex-col justify-between">
            <div className="absolute top-6 left-8 flex items-center gap-3">
              <span className="font-syncopate text-xl font-black text-indigo-500/80 group-hover:text-indigo-400 transition-colors">
                {displayIndex}
              </span>
              <div className="h-px w-8 bg-white/10"></div>
              <span className="font-mono text-[8px] font-bold tracking-widest text-white/30 uppercase group-hover:text-white/60 transition-colors">Module_{category.id.split('-')[0]}</span>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="h-0.5 w-12 bg-indigo-500/40 rounded-full group-hover:w-24 transition-all duration-700"></div>
                <h3 className="font-syncopate text-xl md:text-2xl font-black leading-tight text-white/80 group-hover:text-white transition-colors uppercase">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex justify-between items-end border-t border-white/5 pt-6">
                <div className="space-y-1">
                   <p className="font-bold text-[9px] tracking-widest uppercase text-white/30">Directory_Entry</p>
                   <p className="font-marker text-lg text-indigo-300/40 group-hover:text-indigo-400 group-hover:animate-pulse transition-colors">Click to expand_</p>
                </div>
                <div className="bg-white/5 text-indigo-300 px-4 py-2 rounded-full font-mono text-[10px] font-bold border border-white/10 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/20 transition-all">
                   FILES_{category.projects.length.toString().padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 rounded-[35px] border-2 border-indigo-500/0 group-hover:border-indigo-500/30 transition-all duration-700 pointer-events-none"></div>
      </div>
    </div>
  );
};

const ProjectModal: React.FC<{ category: CategoryGroup | null; onClose: () => void }> = ({ category, onClose }) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-7xl h-full max-h-[90vh] bg-zinc-950 border border-white/10 rounded-[40px] overflow-hidden flex flex-col shadow-[0_0_100px_rgba(79,70,229,0.2)]">
        <div className="p-8 md:p-12 border-b border-white/10 flex justify-between items-center bg-zinc-950/50 backdrop-blur-md sticky top-0 z-10">
          <div className="space-y-2">
            <span className="text-indigo-500 font-mono text-xs tracking-[0.4em] uppercase">Category Expanded</span>
            <h2 className="font-syncopate text-2xl md:text-4xl font-black text-white uppercase">{category.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors group"
          >
            <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-16 scrollbar-hide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {category.projects.map((project, i) => (
              <div key={project.id} className="group space-y-6">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 bg-zinc-900">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                    <span className="font-mono text-[10px] text-indigo-400 font-bold tracking-widest">{project.year}</span>
                  </div>
                </div>
                <div className="flex justify-between items-end px-2">
                  <div className="space-y-1">
                    <span className="text-indigo-500/60 font-mono text-[10px] tracking-widest uppercase">{project.category}</span>
                    <h4 className="font-syncopate text-xl font-bold text-white group-hover:text-indigo-400 transition-colors uppercase">{project.title}</h4>
                  </div>
                  <div className="text-white/20 font-syncopate text-3xl font-black group-hover:text-white/40 transition-colors">
                    0{i + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="py-20 border-t border-white/5 text-center">
            <p className="font-mono text-[10px] text-white/20 tracking-[1em] uppercase">End of Archive Module</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryGroup | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="pt-40 pb-20 bg-[#050505] relative overflow-hidden">
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
            "A structured chaos of creativity, archived for your discovery. Click any folder to explore the contents."
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {CATEGORIES.map((cat, index) => (
            <Folder 
              key={cat.id} 
              category={cat} 
              index={index} 
              onClick={() => setSelectedCategory(cat)}
            />
          ))}
        </div>
      </div>

      <ProjectModal 
        category={selectedCategory} 
        onClose={() => setSelectedCategory(null)} 
      />

      <style>{`
        .border-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;