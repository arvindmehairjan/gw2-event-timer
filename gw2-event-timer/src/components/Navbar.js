/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-orange-800 text-white p-4">
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-4">
        <a href="/" className="hover:text-gray-300 transition duration-300 ease-in-out">Home</a>
        <a href="/contact" className="hover:text-orange-300 transition duration-300 ease-in-out">Contact</a>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center justify-between">
        <a href="/" className="text-xl font-bold"></a>
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
          <a href="/" className="block px-4 py-2 transition duration-300 ease-in-out hover:text-yellow-300">Home</a>
          <a href="/contact" className="block px-4 py-2 transition duration-300 ease-in-out hover:text-yellow-300">Contact</a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
