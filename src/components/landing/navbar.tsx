import React from 'react';
import CursorBubble from '../common/CursorBubble';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center">
        {/* Left nav items */}
        <div className="bg-[#0a0a0a] text-white rounded-full px-6 py-3 flex items-center space-x-6">
          <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
        </div>

       <CursorBubble
        text="Join Opus"
        bgColor="#141414D5"
        textColor="white"
        padding="10px 20px"
        >
          <div className="w-16 h-16 bg-[#0A0A0A] rounded-full flex items-center justify-center mx-2 shadow-lg cursor-pointer">
            <span className="text-3xl text-orange-500" style={{ fontFamily: '"Boldonse", system-ui' }}>O</span>
          </div>
        </CursorBubble>

        <div className="bg-[#0a0a0a] text-white rounded-full px-6 py-3 flex items-center space-x-6">
          <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
