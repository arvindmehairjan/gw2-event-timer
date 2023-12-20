import React, { useState, useEffect } from 'react';
import jsonData from './data/events.json';
import './App.css';

const App = () => {
  const date = new Date();
  const currentTime = date.getHours() + ':' + date.getMinutes();

  const firstArray = jsonData['Core Tyria'][0];
  const bossName = firstArray.bossName;
  console.log(bossName);

  const timeDifference = () => {
    const now = new Date();

    // Set the target time (02:04) for today
    const targetTime = new Date();
    targetTime.setHours(2, 4, 0, 0);

    // Calculate the time difference in milliseconds
    const timeDiff = targetTime - now;

    // Check if the target time is in the future
    if (timeDiff > 0) {
      // Calculate hours and minutes
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

      // Return the text content
      return `Time remaining: ${hours} hours and ${minutes} minutes`;
    } else {
      return "Active";
    }
  }

  return (
    <div className="App">
      <h1>Guild Wars 2 - Meta Event Timer</h1>
      <p>Current Time: {currentTime}</p>
      <p>Upcoming Events:</p>
      <p>{timeDifference()}</p>
    </div>
  );
};

export default App;
