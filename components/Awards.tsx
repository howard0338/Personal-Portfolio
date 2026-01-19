import React, { useState } from 'react';
import { AWARDS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Awards: React.FC = () => {
  const [showImages, setShowImages] = useState(false);

  return (
    <section>
      <div className="flex justify-between items-end border-b-2 border-gray-900 pb-2 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 font-serif">
          Awards & Patents
        </h3>

        <button
            onClick={() => setShowImages(!showImages)}
            className="group flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors rounded hover:bg-gray-100 mb-1"
        >
            {showImages ? 'Hide Images' : 'Show Images'}
            {showImages ? 
                <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform"/> : 
                <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform"/>
            }
        </button>
      </div>

      {showImages ? (
        // ==========================
        // IMAGE GRID VIEW (Expanded)
        // ==========================
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-500">
          {AWARDS.map((award) => (
            <div key={award.id} className="group flex flex-col gap-3">
              {/* Image Container 
                  Using object-contain to ensure the full certificate/award is visible.
              */}
              <div className="relative aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden border border-gray-200 shadow-sm flex items-center justify-center">
                  <img 
                      src={award.imageUrl} 
                      alt={award.title} 
                      className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                  />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col">
                  <h4 className="font-serif font-bold text-gray-900 text-lg leading-snug group-hover:text-gray-600 transition-colors">
                      {award.title}
                  </h4>
                  <div className="flex justify-between items-center text-sm font-sans text-gray-500 mt-1">
                      <span>{award.organization}</span>
                      <span className="font-semibold text-gray-400">{award.year}</span>
                  </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // ==========================
        // TEXT ONLY LIST VIEW (Collapsed)
        // ==========================
        <div className="space-y-1">
          {AWARDS.map((award) => (
             <div key={award.id} className="group flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 md:gap-4 py-3 border-b border-dashed border-gray-200 last:border-0 hover:bg-gray-50/80 transition-colors rounded-sm px-2 -mx-2 cursor-default">
                <div className="flex flex-col">
                    <span className="font-serif font-bold text-gray-900 text-lg group-hover:text-black transition-colors">{award.title}</span>
                    <span className="font-sans text-sm text-gray-500 group-hover:text-gray-700 transition-colors">{award.organization}</span>
                </div>
                <span className="font-sans text-sm font-semibold text-gray-400 shrink-0 group-hover:text-gray-500 transition-colors">{award.year}</span>
             </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Awards;