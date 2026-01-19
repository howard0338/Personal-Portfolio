import React from 'react';
import { PROFILE } from '../constants';
import { Mail, MapPin, GraduationCap, ArrowUpRight, Linkedin } from 'lucide-react';
import CoverGallery from './CoverGallery';

const Sidebar: React.FC = () => {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`;

  return (
    <div className="flex flex-col gap-8 md:pl-4">
      
      {/* Profile Photo */}
      <div className="w-full max-w-[200px] md:max-w-full mx-auto md:mx-0">
        {/* Updated design: Circular (rounded-full) with a white border and shadow for a cleaner, more academic look */}
        <div className="aspect-square w-full bg-white rounded-full overflow-hidden border-[5px] border-white shadow-md ring-1 ring-gray-100">
           {/* 
              Photo source is now managed in 'constants.ts' -> PROFILE.headshotUrl
           */}
          <img 
            src={PROFILE.headshotUrl} 
            alt={PROFILE.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Social Links (Moved Top) */}
      <div className="flex flex-col gap-3">
          <a 
            href={PROFILE.googleScholarUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm font-semibold text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <GraduationCap size={18} />
              <span>Google Scholar</span>
            </div>
            <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a 
            href={PROFILE.linkedinUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm font-semibold text-gray-700 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </div>
            <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
      </div>

      {/* Contact Info (Moved Bottom) */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 font-sans">
          Contact
        </h3>
        <ul className="space-y-4">
          <li>
            <a 
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 text-sm text-gray-600 hover:text-black transition-colors"
            >
              <Mail size={16} className="mt-0.5 shrink-0 text-gray-400 group-hover:text-black" />
              <span className="break-all">{PROFILE.email}</span>
            </a>
          </li>
          <li>
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gray-400" />
              <div className="flex flex-col gap-1">
                <span>{PROFILE.address}</span>
                <span className="text-xs text-gray-400">{PROFILE.addressZh}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Cover Arts Gallery */}
      <CoverGallery />

    </div>
  );
};

export default Sidebar;