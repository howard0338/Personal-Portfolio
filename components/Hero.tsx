import React from 'react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="space-y-6">
      <header className="space-y-3 border-b border-gray-100 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {PROFILE.name}
        </h1>
        <div className="text-lg md:text-xl text-gray-500 font-sans font-light tracking-wide">
          {PROFILE.role} <span className="mx-2 text-gray-300">|</span> {PROFILE.institution}
        </div>
      </header>

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