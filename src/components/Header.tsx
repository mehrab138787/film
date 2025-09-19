import React from 'react';
import { Film } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 backdrop-blur-lg border-b border-purple-500/20 p-4 md:p-6">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="relative flex items-center justify-center space-x-3 rtl:space-x-reverse">
        <Film className="w-8 h-8 text-cyan-400 animate-bounce" />
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 tracking-wider">
          سین‌شِیر
        </h1>
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20 animate-pulse"></div>
      </div>
      <p className="text-center text-gray-300 mt-2 text-sm tracking-wide">
        محل اشتراک‌گذاری فیلم و سریال‌های مورد علاقه
      </p>
    </header>
  );
};

export default Header;