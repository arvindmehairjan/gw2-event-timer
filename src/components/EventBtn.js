import React from 'react';
import { Link } from 'react-router-dom';

const EventBtn = () => {
  return (
    <div className="flex flex-col items-center mt-5 mb-3">
      <div className="flex flex-wrap justify-center">
        <Link
          to="/core-tyria"
          className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded inline-block transition duration-300 ease-in-out mb-3 mr-2"
        >
          Core Tyria
        </Link>

        <Link
          to="/living-world"
          className="bg-neutral-600 hover:bg-neutral-900 text-white px-3 py-1 rounded inline-block transition duration-300 ease-in-out mb-3 mr-2"
        >
          Living World
        </Link>

        <Link
          to="/heart-of-thorns"
          className="bg-neutral-600 hover:bg-neutral-900 text-white px-3 py-1 rounded inline-block transition duration-300 ease-in-out mb-3 mr-2"
        >
          Heart of Thorns
        </Link>

        <Link
          to="/path-of-fire"
          className="bg-neutral-600 hover:bg-neutral-900 text-white px-3 py-1 rounded inline-block transition duration-300 ease-in-out mb-3 mr-2"
        >
          Path of Fire
        </Link>

        <Link
          to="/icebrood-saga"
          className="bg-neutral-600 hover:bg-neutral-900 text-white px-3 py-1 rounded inline-block transition duration-300 ease-in-out mb-3 mr-2"
        >
          Icebrood Saga
        </Link>

        <Link
          to="/end-of-dragons"
          className="bg-neutral-600 hover:bg-neutral-900 text-white px-3 py-1 rounded inline-block transition duration-300 ease-in-out mb-3 mr-2"
        >
          End of Dragons
        </Link>

        <Link
          to="/secrets-of-obscure"
          className="bg-neutral-600 hover:bg-neutral-900 text-white px-3 py-1 rounded inline-block transition duration-300 ease-in-out mb-3 mr-2"
        >
          Secrets Of The Obscure
        </Link>
      </div>
    </div>
  );
};

export default EventBtn;
