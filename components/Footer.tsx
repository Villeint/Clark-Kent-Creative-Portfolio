import React from 'react';
import { Icons } from '../constants';

const Footer: React.FC = () => {
  const email = "kentamargo@gmail.com";
  const mailtoLink = `mailto:${email}?subject=Project%20Inquiry%20for%20Clark%20Kent`;

  return (
    <footer id="contact" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="space-y-8">
            <h3 className="font-syncopate text-6xl md:text-8xl font-bold tracking-tighter text-glow uppercase">
              LET'S <br /> BUILD.
            </h3>
            <div className="flex space-x-6">
               <a 
                 href="https://www.instagram.com/clarkkentxck/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-indigo-500 transition-colors"
                 aria-label="Instagram"
               >
                 <Icons.Instagram />
               </a>
               <a 
                 href="https://www.facebook.com/clarkkentxck" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-indigo-500 transition-colors"
                 aria-label="Facebook"
               >
                 <Icons.Facebook />
               </a>
               <a 
                 href="https://www.linkedin.com/in/amargo-ck/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-indigo-500 transition-colors"
                 aria-label="LinkedIn"
               >
                 <Icons.LinkedIn />
               </a>
            </div>
          </div>

          <div className="space-y-12 w-full md:w-auto">
            <div className="space-y-4">
               <div className="flex items-center gap-4">
                  <span className="text-white/40 uppercase text-sm tracking-[0.3em] font-bold">Inquiries</span>
                  <span className="text-xs text-purple-400/80 uppercase tracking-[0.3em] font-bold animate-pulse">Available for hire</span>
               </div>
               <a 
                 href={mailtoLink} 
                 className="group block relative"
                 title="Click to send an email"
               >
                  <span className="font-syncopate text-2xl md:text-5xl font-bold text-white hover:text-purple-500 transition-all duration-300 underline decoration-purple-500/30 underline-offset-8 uppercase leading-none tracking-tighter">
                    {email}
                  </span>
                  <span className="absolute -bottom-8 left-0 text-[10px] font-bold tracking-[0.2em] text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 uppercase">
                    Click to compose message →
                  </span>
               </a>
            </div>
            <div className="grid grid-cols-1 gap-12 pt-8">
               <div className="space-y-2">
                  <span className="text-white/40 uppercase text-sm tracking-[0.3em] font-bold">Status</span>
                  <p className="text-sm md:text-base text-green-500 uppercase flex items-center font-bold tracking-widest">
                     <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                     AVAILABLE FOR Q4
                  </p>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-white/30 tracking-[0.3em] uppercase">
          <p>© 2025 CLARK KENT / ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;