/* eslint-disable jsx-a11y/anchor-is-valid */
// NavBar.js

import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-400 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white font-bold"></div>

      <div className="flex items-center space-x-4">
        <a href="#" className="text-white">Home</a>
        <a href="#" className="text-white">About</a>
        <a href="#" className="text-white">Services</a>
        <a href="#" className="text-white">Contact</a>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
