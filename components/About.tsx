
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#EBE7DE]">
      
      {/* Introduction */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26] leading-tight">
            Engineer. <br/> Problem Solver. <br/> Innovator.
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
            I am a highly motivated Software Development Engineer with strong foundations in computer science, object-oriented design, and distributed systems. 
          </p>
          <p className="text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-8">
            With expertise in PL/SQL and Python, I specialize in building scalable, fault-tolerant applications. I am adept at problem-solving, algorithm design, and working in agile environments to deliver high-quality software solutions at scale.
          </p>
          
          {/* Resume Download / LinkedIn Block */}
          <div className="mt-12 p-6 border border-[#2C2A26]/10 bg-[#F5F2EB]">
              <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
                  <div>
                    <h3 className="font-serif text-xl text-[#2C2A26] mb-1">Krishna Patil</h3>
                    <p className="text-sm text-[#A8A29E]">Pune, India | +91-7218276369</p>
                  </div>
                  <div className="flex gap-4">
                      <a href="https://linkedin.com/in/krishnapatil03" target="_blank" className="text-xs font-bold uppercase tracking-widest border-b border-[#2C2A26] pb-1 hover:opacity-60">LinkedIn</a>
                      <a href="https://github.com/krishnapydev" target="_blank" className="text-xs font-bold uppercase tracking-widest border-b border-[#2C2A26] pb-1 hover:opacity-60">GitHub</a>
                  </div>
              </div>
          </div>
        </div>
      </div>

      {/* Skills / Philosophy Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group bg-[#2C2A26]">
           <div className="absolute inset-0 flex flex-col justify-center items-center p-12 text-[#F5F2EB]">
                <h4 className="text-2xl font-serif mb-8 text-center">Technical Arsenal</h4>
                <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm font-light tracking-wide">
                    <ul className="space-y-2">
                        <li className="font-bold text-[#A8A29E] uppercase text-xs mb-2">Languages</li>
                        <li>Python</li>
                        <li>SQL (Oracle, MySQL)</li>
                        <li>JavaScript, HTML, CSS</li>
                    </ul>
                    <ul className="space-y-2">
                        <li className="font-bold text-[#A8A29E] uppercase text-xs mb-2">Frameworks</li>
                        <li>Django</li>
                        <li>Pandas, NumPy</li>
                        <li>Matplotlib</li>
                    </ul>
                    <ul className="space-y-2">
                        <li className="font-bold text-[#A8A29E] uppercase text-xs mb-2">Cloud & Tools</li>
                        <li>Google Cloud Platform</li>
                        <li>Git / GitHub</li>
                        <li>Jira / ServiceNow</li>
                    </ul>
                     <ul className="space-y-2">
                        <li className="font-bold text-[#A8A29E] uppercase text-xs mb-2">Core</li>
                        <li>Data Structures</li>
                        <li>Algorithms</li>
                        <li>Object-Oriented Design</li>
                    </ul>
                </div>
           </div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#D6D1C7]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] mb-6">Education</span>
           <h3 className="text-3xl md:text-4xl font-serif mb-6 text-[#2C2A26] leading-tight">
             Bachelor of Science
           </h3>
           <p className="text-lg text-[#5D5A53] font-light leading-relaxed mb-2">
             Sant Gadge Baba Amravati University
           </p>
           <p className="text-sm text-[#A8A29E] font-medium uppercase tracking-widest mb-8">
             Graduated 2024
           </p>
           
           <div className="h-px w-24 bg-[#2C2A26]/20 mb-8"></div>
           
           <p className="text-[#5D5A53] font-light leading-relaxed italic">
             "Passionate about innovating on behalf of customers and delivering high-quality software solutions at scale."
           </p>
        </div>
      </div>
    </section>
  );
};

export default About;
