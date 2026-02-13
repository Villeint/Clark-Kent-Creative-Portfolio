
import React from 'react';
import { Icons } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="space-y-8">
            <h3 className="font-syncopate text-6xl md:text-8xl font-bold tracking-tighter text-glow">
              LET'S <br /> BUILD.
            </h3>
            <div className="flex space-x-6">
               <a href="#" className="hover:text-purple-500 transition-colors"><Icons.Instagram /></a>
               <a href="#" className="hover:text-purple-500 transition-colors"><Icons.Behance /></a>
               <a href="#" className="hover:text-purple-500 transition-colors"><Icons.LinkedIn /></a>
            </div>
          </div>

          <div className="space-y-12 w-full md:w-auto">
            <div className="space-y-4">
               <span className="text-white/30 uppercase text-xs tracking-widest font-bold">Inquiries</span>
               <a href="mailto:hello@clarkkent.design" className="block font-syncopate text-2xl md:text-3xl font-bold hover:text-purple-500 transition-colors underline decoration-purple-500/30 underline-offset-8">
                  HELLO@CLARKKENT.DESIGN
               </a>
            </div>
            <div className="grid grid-cols-2 gap-12">
               <div className="space-y-2">
                  <span className="text-white/30 uppercase text-[10px] tracking-widest font-bold">Studio</span>
                  <p className="text-sm text-white/60 uppercase">Sector 7-G <br /> Metropolis, NYC</p>
               </div>
               <div className="space-y-2">
                  <span className="text-white/30 uppercase text-[10px] tracking-widest font-bold">Status</span>
                  <p className="text-sm text-green-500 uppercase flex items-center">
                     <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                     Available for Q4
                  </p>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-white/30 tracking-[0.3em] uppercase">
          <p>© 2024 CLARK KENT / ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Colophon</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
