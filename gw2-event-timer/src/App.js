import React, { useState, useEffect } from 'react';
import jsonData from './data/events.json';
import './App.css';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    const coreTyriaEvent = jsonData['Core Tyria'];

    if (coreTyriaEvent) {
      const upcomingEventsData = coreTyriaEvent.reduce((accumulator, event) => {
        const upcomingSpawnTimes = event.spawnTimer.filter(spawnTime => {
          const spawnDateTime = new Date();
          const [hours, minutes] = spawnTime.split(':');
          spawnDateTime.setHours(parseInt(hours, 10));
          spawnDateTime.setMinutes(parseInt(minutes, 10));

          const timeDifference = spawnDateTime.getTime() - new Date().getTime();

          return timeDifference > 0 && timeDifference <= 2 * 60 * 60 * 1000;
        });

        if (upcomingSpawnTimes.length > 0) {
          accumulator.push({
            bossName: event.bossName,
            countdowns: upcomingSpawnTimes.map(spawnTime => {
              const spawnDateTime = new Date();
              const [hours, minutes] = spawnTime.split(':');
              spawnDateTime.setHours(parseInt(hours, 10));
              spawnDateTime.setMinutes(parseInt(minutes, 10));

              const timeDifference = spawnDateTime.getTime() - new Date().getTime();

              const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
              const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

              return timeDifference <= 0 ? 'Active' : `${hoursRemaining}h ${minutesRemaining}m`;
            }),
          });
        }

        return accumulator;
      }, []);

      setUpcomingEvents(upcomingEventsData);
    }

    return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime, new Date()]);

  return (
    <div className="App">
      <h1>Guild Wars 2 - Meta Event Timer</h1>
      <p>Current Time: {currentTime}</p>
      <p>Upcoming Events in the Next 2 Hours:</p>
      <ul>
        {upcomingEvents.map((event, index) => (
          <li key={index}>
            {event.bossName} - {event.countdowns.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
