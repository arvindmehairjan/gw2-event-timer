import React, { useState, useEffect } from 'react';
import jsonData from './data/events.json';
import './App.css';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Guild Wars 2 - Meta Event Timer</h1>
      <p>Current Time: {currentTime.toLocaleTimeString()} </p>
      <p>Upcoming Events:</p>

      {Object.keys(jsonData).map((region, regionIndex) => (
        <div key={regionIndex}>
          <h2>{region}</h2>
          <ul>
            {jsonData[region].map((event, eventIndex) => (
              <li key={eventIndex}>
                <strong>{event.bossName}</strong> - Spawn Timer: {event.spawnTimer.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default App;
