import React, { useState, useEffect } from 'react';
import jsonData from './data/events.json';
import './App.css';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [bossInfo, setBossInfo] = useState({
    bossName: '',
    spawnTimer: ''
  });
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    const coreTyriaEvent = jsonData['Core Tyria'];

    if (coreTyriaEvent) {
      const spawnTime = new Date();
      const [hours, minutes] = coreTyriaEvent.spawnTimer.split(':');
      spawnTime.setHours(parseInt(hours, 10));
      spawnTime.setMinutes(parseInt(minutes, 10));

      // Calculate the countdown of event
      const timeDifference = spawnTime.getTime() - new Date().getTime();

      // Calculate remaining hours and minutes
      const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

      setBossInfo({
        bossName: coreTyriaEvent.bossName,
        spawnTimer: coreTyriaEvent.spawnTimer
      });

      setCountdown(`${hoursRemaining}h ${minutesRemaining}m`);
    }

    return () => clearInterval(intervalId);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime, new Date()]);

  return (
    <div className="App">
      <h1>Guild Wars 2 - Meta Event Timer</h1>
      <p>Current Time: {currentTime}</p>
      <p>Boss Name: {bossInfo.bossName}</p>
      <p>Countdown: Event start in {countdown}</p>
    </div>
  );
};

export default App;
