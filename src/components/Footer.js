import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const githubLink = 'https://github.com/arvindmehairjan';

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Your main content goes here */}
      </div>
      <footer className="mt-auto">
        <div className="flex justify-center items-center h-16 bg-orange-800 text-white">
          <p>
            &copy; {currentYear} - Developed by{' '}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Arvind Mehairjan.
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
