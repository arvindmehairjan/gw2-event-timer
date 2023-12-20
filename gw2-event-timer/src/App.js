import React, { useState, useEffect } from 'react';
import jsonData from './data/events.json';
import './App.css';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [bossInfo, setBossInfo] = useState({
    bossName: '',
    spawnTimer: []
  });
  const [countdowns, setCountdowns] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    const coreTyriaEvent = jsonData['Core Tyria'];

    if (coreTyriaEvent) {
      setBossInfo({
        bossName: coreTyriaEvent.bossName,
        spawnTimer: coreTyriaEvent.spawnTimer
      });

      const newCountdowns = coreTyriaEvent.spawnTimer.map(spawnTime => {
        const spawnDateTime = new Date();
        const [hours, minutes] = spawnTime.split(':');
        spawnDateTime.setHours(parseInt(hours, 10));
        spawnDateTime.setMinutes(parseInt(minutes, 10));

        const timeDifference = spawnDateTime.getTime() - new Date().getTime();

        const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        return timeDifference <= 0 ? 'Active' : `Countdown ${hoursRemaining}h ${minutesRemaining}m`;
      });

      setCountdowns(newCountdowns);
    }

    return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime, new Date()]);

  return (
    <div className="App">
      <h1>Guild Wars 2 - Meta Event Timer</h1>
      <p>Current Time: {currentTime}</p>
      <p>Boss Name: {bossInfo.bossName}</p>
      <p>Spawn Timers:</p>
      <ul>
        {bossInfo.spawnTimer.map((spawnTime, index) => (
          <li key={index}>Event: {countdowns[index]}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
