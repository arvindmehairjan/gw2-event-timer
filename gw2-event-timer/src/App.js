import React, { useState, useEffect } from 'react';
import jsonData from './data/events.json';
import './App.css';

const App = () => {
  const date = new Date();
  const currentTime = date.getHours() * 60 + date.getMinutes(); // Convert current time to minutes

  // Access the "Core Tyria" array
  const coreTyriaArray = jsonData['Core Tyria'];

  const findClosestBoss = () => {
    let closestBoss = null;
    let minTimeDiff = Infinity;

    coreTyriaArray.forEach(entry => {
      entry.spawnTimer.forEach(eventTime => {
        const [hours, minutes] = eventTime.split(':').map(Number);
        const eventTimeInMinutes = hours * 60 + minutes;
        const timeDiff = eventTimeInMinutes - currentTime;

        // Check if the event is in the future and closer than the current closest event
        if (timeDiff >= 0 && timeDiff < minTimeDiff) {
          minTimeDiff = timeDiff;
          closestBoss = {
            bossName: entry.bossName,
            timeRemaining: timeDiff
          };
        }
      });
    });

    return closestBoss;
  };

  const closestBoss = findClosestBoss();

  const formatTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours} hours and ${minutes} minutes`;
  };

  return (
    <div className="App">
      <h1>Guild Wars 2 - Meta Event Timer</h1>
      {closestBoss ? (
        <p>
          {closestBoss.bossName} - Time remaining: {formatTime(closestBoss.timeRemaining)}
        </p>
      ) : (
        <p>No upcoming events</p>
      )}
    </div>
  );
};

export default App;
