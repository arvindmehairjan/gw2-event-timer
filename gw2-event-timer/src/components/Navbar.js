import React, { useState, useRef, useEffect } from 'react';

const NavBar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleSubMenuClick = (e) => {
    e.preventDefault();
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleSubMenuClose = () => {
    setIsSubMenuOpen(false);
  };

  // Close the submenu when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        handleSubMenuClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div></div>
        <div className="sm:hidden">
          <button
            onClick={handleSubMenuClick}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isSubMenuOpen ? (
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
      <nav
        className={`px-2 pt-2 pb-4 sm:flex ${isSubMenuOpen ? 'block' : 'hidden'} sm:p-0`}
        ref={menuRef}
      >
        <a href="#" className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">
          Home
        </a>
        <div className="mt-1 sm:mt-0 sm:ml-2 relative">
          <a
            href="#"
            onClick={handleSubMenuClick}
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >
            Events
          </a>
          <div
            className={`absolute z-10 left-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg ${
              isSubMenuOpen ? 'block' : 'hidden'
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
              Living World S4
            </a>
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
              The Icebrood Saga
            </a>
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
              End of Dragons
            </a>
            <a href="#" className="block py-2 px-4 text-white hover:bg-gray-700">
              Secrets of the Obscure
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
