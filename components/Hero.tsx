import React from 'react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="space-y-6">
      <header className="border-b border-gray-100 pb-8">
        {/* Adjusted layout: removed justify-between, used justify-start with specific gap to keep logo closer */}
        <div className="flex flex-row items-center justify-start gap-6 md:gap-10">
          {/* Reduced space-y from 3 to 1 to bring Name and Role closer */}
          <div className="space-y-1.5 flex-1">
            {/* SEO Keyword Line: Visibly displayed for crawlers and users */}
            <div className="text-sm md:text-base font-bold tracking-widest text-blue-900/60 uppercase font-sans mb-1">
              Academic Portfolio | 林世和個人網站
            </div>
            
            {/* Added 'break-keep' to prevent Chinese name from breaking apart. Reduced mobile text size to 3xl. */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight break-keep">
              {PROFILE.name}
            </h1>
            <div className="text-lg md:text-xl text-gray-500 font-sans font-light tracking-wide">
              {PROFILE.role} <span className="mx-2 text-gray-300">|</span> {PROFILE.institution}
            </div>
          </div>
          
          {PROFILE.logoUrl && (
            <div className="shrink-0">
                <img 
                    src={PROFILE.logoUrl} 
                    alt="Institution Logo" 
                    // Increased size significantly: h-24 (96px) on mobile, h-32 (128px) on desktop
                    className="h-24 md:h-32 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
            </div>
          )}
        </div>
      </header>

      {/* MOBILE ONLY: Profile Photo 
          Placed between Name (Header) and Bio. 
          Large size (w-48/h-48 to w-64/h-64) for visual impact.
      */}
      <div className="md:hidden w-full flex justify-center my-8 animate-in fade-in zoom-in duration-700">
        <div className="w-56 h-56 sm:w-72 sm:h-72 bg-white rounded-full overflow-hidden border-[6px] border-white shadow-xl ring-1 ring-gray-200">
           <img 
             src={PROFILE.headshotUrl} 
             alt={PROFILE.name} 
             className="w-full h-full object-cover"
           />
        </div>
      </div>

      <div className="prose prose-lg prose-slate max-w-none text-gray-600 font-sans leading-relaxed">
        <p>
          {PROFILE.bio}
        </p>
      </div>

      {/* Key Skills Section */}
      {PROFILE.skills && PROFILE.skills.length > 0 && (
        <div className="pt-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 font-sans">
              Key Skills
            </h3>
            <div className="flex flex-wrap gap-2">
                {PROFILE.skills.map((skill, index) => (
                <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full font-sans border border-gray-200 hover:border-gray-300 hover:bg-gray-200 transition-colors cursor-default"
                >
                    {skill}
                </span>
                ))}
            </div>
        </div>
      )}
    </section>
  );
};

export default Hero;