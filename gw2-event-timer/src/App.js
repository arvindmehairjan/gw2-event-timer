import React, { useState, useEffect } from 'react';
import jsonData from './data/events.json';
import './App.css';

const App = () => {
  const date = new Date();
  const currentTime = date.getHours() * 60 + date.getMinutes(); // Convert current time to minutes

  // Access the "Core Tyria" array
  const coreTyriaArray = jsonData['Core Tyria'];

  const findUpcomingBosses = () => {
    let upcomingBosses = [];

    coreTyriaArray.forEach(entry => {
      let upcomingEvents = [];

      entry.spawnTimer.forEach(eventTime => {
        const [hours, minutes] = eventTime.split(':').map(Number);
        const eventTimeInMinutes = hours * 60 + minutes;
        const timeDiff = eventTimeInMinutes - currentTime;

        // Check if the event is upcoming within the next two hours
        if (timeDiff >= 0 && timeDiff <= 120) {
          upcomingEvents.push({
            bossName: entry.bossName,
            timeRemaining: timeDiff
          });
        }
      });

      upcomingBosses = upcomingBosses.concat(upcomingEvents);
    });

    return upcomingBosses;
  };

  const upcomingBosses = findUpcomingBosses();

  const formatTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours} hours and ${minutes} minutes`;
  };

  return (
    <div className="App">
      <h1>Guild Wars 2 - Meta Event Timer</h1>
      <p>Current Time: {currentTime}</p>
      {upcomingBosses.length > 0 ? (
        upcomingBosses.map((upcomingBoss, index) => (
          <p key={index}>
            {upcomingBoss.bossName} - Time remaining: {formatTime(upcomingBoss.timeRemaining)}
          </p>
        ))
      ) : (
        <p>No upcoming events within the next two hours</p>
      )}
    </div>
  );
};

export default App;
