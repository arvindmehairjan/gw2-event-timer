import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-white-500 text-black h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Guild Wars 2 - Meta Event Timer</h1>
        <h2 className="text-1.5xl font-semibold">Discover the schedules for all meta events and world bosses.</h2>

        {/* Core Tyria Events Link */}
        <div className="mt-5">
          <Link
            to="/core-tyria"
            className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded inline-block transition duration-300 ease-in-out"
          >
            Core Tyria Events
          </Link>
        </div>

        {/* Living World Events Link */}
        <div className="mt-3">
          <Link
            to="/living-world"
            className="bg-neutral-600 hover:bg-neutral-900 text-white px-3 py-1 rounded inline-block transition duration-300 ease-in-out"
          >
            Living World Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
