import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const githubLink = 'https://github.com/arvindmehairjan';

  return (
    <footer className="bg-orange-800 text-white p-4">
      <div className="container mx-auto text-center">
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
  );
};

export default Footer;
