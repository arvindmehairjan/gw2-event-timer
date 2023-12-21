import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img className="h-8" src="/img/logo-inverted.svg" alt="Workcation" />
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleSubMenu}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav className={`px-2 pt-2 pb-4 sm:flex ${isOpen ? 'block' : 'hidden'} sm:p-0`}>
        <a href="#" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">
          Home
        </a>
        <div className="mt-1 sm:mt-0 sm:ml-2 relative">
          <a
            href="#"
            onClick={toggleSubMenu}
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >
            Events
          </a>
          <div
            className={`absolute z-10 left-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
              Core Tyria
            </a>
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
              Living World S1
            </a>
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
              Living World S2
            </a>
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
              Heart of Thorns
            </a>
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
              Living World S3
            </a>
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
              Path of Fire
            </a>
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
              Living World Season 4
            </a>
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
              Icebrood Saga
            </a>
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
              End of Dragons
            </a>
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
              Secrets of The Obscure
            </a>

          </div>
        </div>
        <a href="#" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
