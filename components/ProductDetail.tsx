
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Project } from '../types';

interface ProductDetailProps {
  project: Project;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ project, onBack }) => {
  
  return (
    <div className="pt-24 min-h-screen bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
        
        {/* Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Work
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Main Content */}
          <div className="lg:col-span-7 flex flex-col gap-12">
             <div>
                <span className="text-sm font-medium text-[#A8A29E] uppercase tracking-widest mb-4 block">{project.category}</span>
                <h1 className="text-4xl md:text-6xl font-serif text-[#2C2A26] mb-8 leading-tight">{project.name}</h1>
                <p className="text-xl text-[#5D5A53] font-light leading-relaxed">{project.description}</p>
             </div>

             <div className="w-full aspect-video bg-[#EBE7DE] overflow-hidden shadow-sm">
                <img 
                    src={project.imageUrl} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                />
             </div>

             <div className="prose prose-stone prose-lg text-[#5D5A53] font-light leading-loose">
                 <h3 className="font-serif text-[#2C2A26]">Project Overview</h3>
                 <p>{project.longDescription}</p>
             </div>
          </div>

          {/* Sidebar / Details */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
             <div className="bg-white/50 border border-[#D6D1C7] p-8 md:p-10">
                 
                 <div className="mb-8">
                     <h4 className="text-xs font-bold uppercase tracking-widest text-[#2C2A26] mb-4">Tech Stack</h4>
                     <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                            <span key={tech} className="bg-[#2C2A26] text-[#F5F2EB] px-3 py-1 text-xs tracking-wide">
                                {tech}
                            </span>
                        ))}
                     </div>
                 </div>

                 <div className="mb-8">
                     <h4 className="text-xs font-bold uppercase tracking-widest text-[#2C2A26] mb-4">Key Features</h4>
                     <ul className="space-y-3">
                         {project.features.map((feature, idx) => (
                           <li key={idx} className="flex items-start gap-3 text-sm text-[#5D5A53]">
                             <span className="w-1.5 h-1.5 mt-1.5 bg-[#A8A29E] rounded-full flex-shrink-0"></span>
                             {feature}
                           </li>
                         ))}
                     </ul>
                 </div>

                 <div className="pt-8 border-t border-[#D6D1C7] flex flex-col gap-4">
                     {project.sourceUrl ? (
                         <a 
                             href={project.sourceUrl} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="w-full py-4 border border-[#2C2A26] text-[#2C2A26] uppercase tracking-widest text-xs font-bold hover:bg-[#2C2A26] hover:text-[#F5F2EB] transition-colors text-center block"
                         >
                             View Source Code
                         </a>
                     ) : (
                         <button disabled className="w-full py-4 border border-[#D6D1C7] text-[#A8A29E] uppercase tracking-widest text-xs font-bold cursor-not-allowed">
                             Source Private
                         </button>
                     )}
                     
                     <p className="text-xs text-[#A8A29E] text-center italic">
                        Demonstration available upon request.
                     </p>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
