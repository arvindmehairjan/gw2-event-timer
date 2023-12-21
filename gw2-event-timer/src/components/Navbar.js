import React, { useState } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEventsSubMenuOpen, setEventsSubMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleEventsSubMenu = () => {
    setEventsSubMenuOpen(!isEventsSubMenuOpen);
  };

  return (
    <div className="bg-orange-800 text-white p-4">
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-4">
        <a href="#" className="hover:text-gray-300">Home</a>
        <div className="relative group">
          <a
            href="#"
            className="hover:text-gray-300"
            onClick={toggleEventsSubMenu}
          >
            Events
          </a>
          {isEventsSubMenuOpen && (
            <div className="absolute mt-2 space-y-2 bg-orange-800 border border-orange-700 rounded-md z-10 ">
              <a href="#" className="block px-4 py-2">Number 1</a>
              <a href="#" className="block px-4 py-2">Number 2</a>
            </div>
          )}
        </div>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center justify-between">
        <a href="#" className="text-xl font-bold"></a>
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none lg:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <a href="#" className="block px-4 py-2">Home</a>
          <div className="group relative">
            <a
              href="#"
              className="block px-4 py-2"
              onClick={toggleEventsSubMenu}
            >
              Events
            </a>
            {isEventsSubMenuOpen && (
              <div className="absolute mt-2 space-y-2 bg-orange-900 border border-orange-700 rounded-md z-10">
                <a href="#" className="block px-4 py-2">Number 1</a>
                <a href="#" className="block px-4 py-2">Number 2</a>
              </div>
            )}
          </div>
          <a href="#" className="block px-4 py-2">Contact</a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
