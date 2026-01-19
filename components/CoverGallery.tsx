import React, { useState, MouseEvent } from 'react';
import { COVER_ARTS, PUBLICATIONS } from '../constants';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const CoverGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % COVER_ARTS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + COVER_ARTS.length) % COVER_ARTS.length);
  };

  const currentCover = COVER_ARTS[currentIndex];
  // Find the linked publication
  const linkedPublication = PUBLICATIONS.find(p => p.id === currentCover.publicationId);
  const linkUrl = linkedPublication?.link || '#';

  return (
    <div className="w-full pt-6 border-t border-gray-100">
      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 font-sans">
        Featured Cover Arts
      </h3>
      
      {/* Width adjusted to 80% */}
      <div className="w-[80%] mx-auto relative group">
        
        {/* Navigation Buttons - Moved slightly outside the image area for clarity */}
        <button 
          onClick={prev}
          className="absolute -left-8 top-1/2 -translate-y-1/2 z-20 p-1 text-gray-400 hover:text-black transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous Cover"
        >
          <ChevronLeft size={20} />
        </button>

        <button 
          onClick={next}
          className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 p-1 text-gray-400 hover:text-black transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next Cover"
        >
          <ChevronRight size={20} />
        </button>

        {/* 3D Tilt Card Wrapper */}
        <a 
          href={linkUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full aspect-[3/4] perspective-1000 relative"
          title={`Read Paper: ${linkedPublication?.title || ''}`}
        >
          <TiltCard key={currentCover.id}>
             <div className="w-full h-full relative rounded-lg overflow-hidden shadow-md bg-gray-200 group/card">
               {/* Image */}
               <img 
                 src={currentCover.imageUrl} 
                 alt={currentCover.journal}
                 className="w-full h-full object-cover"
               />
               
               {/* Caption Overlay (Gradient) */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
               
               {/* Text Content - Scaled down slightly */}
               <div className="absolute bottom-0 left-0 p-3 text-white w-full">
                 <div className="flex justify-between items-end mb-1">
                    <p className="text-[10px] font-medium text-gray-300 uppercase tracking-wide">
                      {currentCover.year}
                    </p>
                    <ExternalLink size={12} className="text-white opacity-0 group-hover/card:opacity-100 transition-opacity mb-0.5" />
                 </div>
                 
                 <h4 className="font-serif font-bold text-sm leading-tight mb-1">
                   {currentCover.journal}
                 </h4>
                 {currentCover.caption && (
                   <p className="text-[10px] text-gray-300 line-clamp-2 leading-snug">
                     {currentCover.caption}
                   </p>
                 )}
               </div>
             </div>
          </TiltCard>
        </a>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-1.5 mt-4">
          {COVER_ARTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-gray-800 w-2' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 3D TILT CARD COMPONENT
// ==========================================
const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (limit to +/- 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="w-full h-full transition-transform duration-200 ease-out preserve-3d cursor-pointer"
      onMouseMove={(e) => { setIsHovering(true); handleMouseMove(e); }}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovering ? 1.02 : 1})`,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
      
      {/* Reflection effect */}
      {isHovering && (
        <div 
          className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay rounded-lg"
          style={{
            background: `linear-gradient(${135 - rotate.y}deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)`
          }}
        />
      )}
    </div>
  );
};

export default CoverGallery;