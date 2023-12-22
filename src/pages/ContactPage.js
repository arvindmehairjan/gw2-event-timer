import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-white-500 text-black h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <h2 className="text-1.5xl font-semibold">Hey there! 👋<br></br>You can find me on GitHub:</h2>
        <a className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded mt-4 inline-block transition duration-300 ease-in-out" href="https://github.com/arvindmehairjan">Github</a>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
