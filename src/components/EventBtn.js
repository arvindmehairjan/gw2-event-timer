import React from 'react';
import { Link } from 'react-router-dom';

const EventBtn = () => {
  return (
    <div className="flex mt-5 mb-3"> {/* Added flex and margin for spacing */}
      <Link
        to="/core-tyria"
        className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded inline-block transition duration-300 ease-in-out mr-3"
      >
        Core Tyria Events
      </Link>

      <Link
        to="/living-world"
        className="bg-neutral-600 hover:bg-neutral-900 text-white px-3 py-1 rounded inline-block transition duration-300 ease-in-out mr-3"
      >
        Living World Events
      </Link>

      <Link
        to="/living-world"
        className="bg-neutral-600 hover:bg-neutral-900 text-white px-3 py-1 rounded inline-block transition duration-300 ease-in-out"
      >
        Living World Events
      </Link>
    </div>
  );
};

export default EventBtn;
