import React from 'react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-gray-100 pt-8 text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-sans uppercase tracking-wider">
        <p>
          &copy; {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p>
          Academic Portfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;