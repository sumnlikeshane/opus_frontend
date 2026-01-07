import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-40 bg-[#0a0a0a] text-white px-10 py-3 rounded-xl shadow-lg">
        
        {/* Left nav links */}
        <div className="flex items-center gap-6 text-sm">
          <a
            href="#home"
            className="text-gray-200 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-200 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#pricing"
            className="text-gray-200 hover:text-white transition-colors"
          >
            Pricing
          </a>
          <a
            href="#info"
            className="text-gray-200 hover:text-white transition-colors"
          >
            Info
          </a>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-300 hover:text-white transition-colors">
            Sign In
          </button>

          <button className="text-sm bg-orange-500 hover:bg-orange-600 text-black font-medium px-4 py-1.5 rounded-full transition-colors">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
