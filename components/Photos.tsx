import React from 'react';
import { PHOTOS } from '../constants';

const Photos: React.FC = () => {
  if (PHOTOS.length === 0) return null;

  return (
    <section>
      <div className="flex justify-between items-end border-b-2 border-gray-900 pb-2 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 font-serif">
          Photos
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {PHOTOS.map((photo) => (
          <div key={photo.id} className="group relative break-inside-avoid">
             <div className="rounded-lg overflow-hidden bg-gray-100 shadow-sm">
                <img 
                    src={photo.imageUrl} 
                    alt={photo.caption || "Gallery photo"} 
                    className="w-full h-auto object-cover hover:opacity-90 transition-opacity"
                />
             </div>
             {photo.caption && (
                 <p className="mt-2 text-xs text-gray-500 font-sans tracking-wide">
                     {photo.caption}
                 </p>
             )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photos;