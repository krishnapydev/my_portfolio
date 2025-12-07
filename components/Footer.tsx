
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer className="bg-[#EBE7DE] pt-24 pb-12 px-6 text-[#5D5A53]">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <h4 className="text-2xl font-serif text-[#2C2A26] mb-6">Krishna Patil</h4>
          <p className="max-w-xs font-light leading-relaxed">
            Software Development Engineer based in Pune, India. 
            Building systems with logic, data, and design.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Sitemap</h4>
          <ul className="space-y-4 font-light">
            <li><a href="#work" onClick={(e) => onLinkClick(e, 'work')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Projects</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">About Me</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Insights</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Connect</h4>
          <ul className="space-y-4 font-light">
            <li><a href="https://linkedin.com/in/krishnapatil03" target="_blank" className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">LinkedIn</a></li>
            <li><a href="https://github.com/krishnapydev" target="_blank" className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">GitHub</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Availability</h4>
           <p className="font-light leading-relaxed mb-8">
             Currently open for Software Development Engineer roles.
           </p>
           <a 
             href="#contact"
             onClick={(e) => onLinkClick(e, 'contact')}
             className="group inline-flex items-center gap-3 bg-[#2C2A26] text-[#F5F2EB] py-4 px-10 text-xs font-bold uppercase tracking-widest hover:bg-[#44403C] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-0.5"
           >
               <span>Get in Touch</span>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
               </svg>
           </a>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-[#D6D1C7] flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60">
        <p>&copy; 2025 Krishna Patil. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
