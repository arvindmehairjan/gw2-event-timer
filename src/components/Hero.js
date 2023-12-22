import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-white-500 text-black h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Guild Wars 2 - Meta Event Timer</h1>
        <h2 className="text-1.5xl font-semibold">Discover the schedules for all meta events and world bosses.</h2>
        <Link
          to="/core-tyria"
          className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded mt-5 inline-block transition duration-300 ease-in-out"
        >
           Core Tyria Events
        </Link>
      </div>
    </div>
  );
};

export default Hero;
