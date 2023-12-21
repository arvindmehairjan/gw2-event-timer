import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-orange-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {currentYear} - Developed by{' '}
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            Arvind Mehairjan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
