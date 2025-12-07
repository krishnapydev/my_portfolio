
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Project } from '../types';

interface ProductCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ project, onClick }) => {
  return (
    <div className="group flex flex-col gap-6 cursor-pointer" onClick={() => onClick(project)}>
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#EBE7DE] shadow-sm">
        <img 
          src={project.imageUrl} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105 grayscale-[0.5] group-hover:grayscale-0"
        />
        
        <div className="absolute inset-0 bg-[#2C2A26]/0 group-hover:bg-[#2C2A26]/10 transition-colors duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="bg-white/90 backdrop-blur text-[#2C2A26] px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium">
                    View Case Study
                </span>
            </div>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
            <h3 className="text-2xl font-serif font-medium text-[#2C2A26] mb-2 group-hover:underline underline-offset-4 decoration-1">{project.name}</h3>
            <p className="text-sm font-light text-[#5D5A53] tracking-wide max-w-md leading-relaxed">{project.tagline}</p>
        </div>
        <span className="text-xs font-medium text-[#A8A29E] border border-[#A8A29E]/30 px-2 py-1 rounded">{project.year}</span>
      </div>
    </div>
  );
};

export default ProductCard;
