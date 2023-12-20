import React, { useState, useEffect } from 'react';
import jsonData from './data/events.json';
import './App.css';

const App = () => {
  const today = new Date();
  const [currentTime, setCurrentTime] = useState(today.toLocaleTimeString());
  const [bossInfo, setBossInfo] = useState({
    bossName: '',
    spawnTimer: ''
  });

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
    }

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>Guild Wars 2 - Meta Event Timer</h1>
      <p>Current Time: {currentTime}</p>
      <p>Boss Name: {bossInfo.bossName}</p>
      <p>Spawn Timer: {bossInfo.spawnTimer}</p>
    </div>
  );
};

export default App;
