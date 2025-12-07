
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {}
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#2C2A26]">
      
      {/* Background - Technical/Abstract */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Abstract Technology" 
            className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-[#2C2A26]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2A26] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start text-left md:items-center md:text-center px-6">
        <div className="animate-fade-in-up w-full md:w-auto">
          <span className="block text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-[#A8A29E] mb-6 backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full mx-0 md:mx-auto w-fit border border-white/10">
            Krishna Patil
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-[#F5F2EB] tracking-tight mb-8 leading-[1.1]">
            Software <span className="italic text-[#A8A29E]">Development</span> <br/> Engineer.
          </h1>
          <p className="max-w-xl mx-0 md:mx-auto text-lg md:text-xl text-[#F5F2EB]/80 font-light leading-relaxed mb-12">
            Building scalable, fault-tolerant applications with Python, SQL, and Google Cloud. Passionate about innovating for scale.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
                href="#work" 
                onClick={(e) => handleNavClick(e, 'work')}
                className="group relative px-10 py-4 bg-[#F5F2EB] text-[#2C2A26] rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-white transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl inline-block"
            >
                <span className="relative z-10 group-hover:text-[#2C2A26]">View Projects</span>
            </a>
            <a 
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="px-10 py-4 border border-[#F5F2EB]/30 text-[#F5F2EB] rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-[#F5F2EB]/10 transition-all duration-300"
            >
                My Skills
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
