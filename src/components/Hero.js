import React from 'react';
import EventBtn from './EventBtn';

const Hero = () => {
  return (
    <div className="bg-white-500 text-black h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Meta Event Timer</h1>
        <h2 className="text-1xl font-semibold">Schedules for all meta events and world bosses.</h2>
        <EventBtn/>

      </div>
    </div>
  );
};

export default Hero;
