/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-orange-800 text-white p-4">
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-4">
        <Link to="/" className="hover:text-gray-300 transition duration-300 ease-in-out">Home</Link>
        <Link to="/contact" className="hover:text-orange-300 transition duration-300 ease-in-out">Contact</Link>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center justify-between">
        <Link to="/" className="text-xl font-bold"></Link>
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
          <Link to="/" className="block px-4 py-2 transition duration-300 ease-in-out hover:text-yellow-300">Home</Link>
          <Link to="/contact" className="block px-4 py-2 transition duration-300 ease-in-out hover:text-yellow-300">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
