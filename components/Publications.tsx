import React, { useState } from 'react';
import { PUBLICATIONS, PROFILE } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Publications: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // If expanded, show all. If not, show only the first 3 (latest).
  const visiblePublications = isExpanded ? PUBLICATIONS : PUBLICATIONS.slice(0, 3);

  return (
    <section>
      <div className="flex justify-between items-end border-b-2 border-gray-900 pb-2 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 font-serif">
          Publications
        </h3>
        
        {PUBLICATIONS.length > 3 && (
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors rounded hover:bg-gray-100 mb-1"
            >
                {isExpanded ? 'Show Less' : 'Show All'}
                {isExpanded ? 
                    <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform"/> : 
                    <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform"/>
                }
            </button>
        )}
      </div>

      <div className="space-y-8">
        {visiblePublications.map((pub, index) => (
          <div key={pub.id} className="group flex items-baseline gap-4">
            <span className="text-sm font-mono text-gray-400 shrink-0 w-6 text-right">
              {PUBLICATIONS.length - index}.
            </span>
            
            <div className="flex-1 space-y-1">
              <a 
                href={pub.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-lg font-serif font-bold text-gray-900 group-hover:underline decoration-1 underline-offset-4 decoration-gray-400 leading-snug"
              >
                {pub.title}
              </a>
              
              <div className="text-sm text-gray-600 leading-relaxed font-sans">
                {pub.authors.map((author, i) => (
                  <span key={i}>
                    {/* Check for "S.H. Lin" specifically to apply Bold Black style */}
                    {author === "S.H. Lin" || author === "Lin, S.H." || author === PROFILE.name ? (
                      <span className="font-bold text-black border-b border-gray-300">{author}</span>
                    ) : (
                      author
                    )}
                    {i < pub.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-gray-500 pt-1 font-sans">
                <span className="text-gray-900">{pub.venue}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{pub.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;