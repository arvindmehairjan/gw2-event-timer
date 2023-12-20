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

          return timeDifference > -30 * 60 * 1000 && timeDifference <= 2 * 60 * 60 * 1000;
        });

        if (upcomingSpawnTimes.length > 0) {
          accumulator.push({
            bossName: event.bossName,
            nextSpawnTime: upcomingSpawnTimes.reduce((earliest, spawnTime) => {
              const spawnDateTime = new Date();
              const [hours, minutes] = spawnTime.split(':');
              spawnDateTime.setHours(parseInt(hours, 10));
              spawnDateTime.setMinutes(parseInt(minutes, 10));

              const timeDifference = spawnDateTime.getTime() - new Date().getTime();

              return timeDifference < earliest ? timeDifference : earliest;
            }, Infinity),
            countdowns: upcomingSpawnTimes.map(spawnTime => {
              const spawnDateTime = new Date();
              const [hours, minutes] = spawnTime.split(':');
              spawnDateTime.setHours(parseInt(hours, 10));
              spawnDateTime.setMinutes(parseInt(minutes, 10));

              const timeDifference = spawnDateTime.getTime() - new Date().getTime();

              const isActive = timeDifference <= 0 && timeDifference > -30 * 60 * 1000;
              const remainingTime = isActive ? 30 * 60 * 1000 + timeDifference : timeDifference;

              const hoursRemaining = Math.floor(remainingTime / (1000 * 60 * 60));
              const minutesRemaining = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

              return isActive ? 'Active' : `${hoursRemaining}h ${minutesRemaining}m`;
            }),
          });
        }

        return accumulator;
      }, []);

      // Sort the upcoming events based on the nextSpawnTime
      upcomingEventsData.sort((a, b) => a.nextSpawnTime - b.nextSpawnTime);

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
