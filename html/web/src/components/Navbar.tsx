import React from 'react';
import { Download, Home, Info, Users } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-opacity-90 backdrop-blur-sm bg-[#2e2b2e] text-white py-4 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#5cfffa] to-[#ff2e57] text-transparent bg-clip-text">
            TikTokRescue
          </div>
          <div className="flex gap-8">
            <a href="#home" className="flex items-center gap-2 hover:text-[#5cfffa] transition-colors">
              <Home size={18} />
              Home
            </a>
            <a href="#download" className="flex items-center gap-2 hover:text-[#5cfffa] transition-colors">
              <Download size={18} />
              Download
            </a>
            <a href="#how-it-works" className="flex items-center gap-2 hover:text-[#5cfffa] transition-colors">
              <Info size={18} />
              How it Works
            </a>
            <a href="#affiliates" className="flex items-center gap-2 hover:text-[#5cfffa] transition-colors">
              <Users size={18} />
              Affiliates
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;