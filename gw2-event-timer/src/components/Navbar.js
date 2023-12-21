// NavBar.js

import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-2">
      <div className="container">
        <ul className="flex space-x-4 text-white ml-right">
          <li>
            <a href="#" className="hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
