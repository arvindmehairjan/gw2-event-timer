import React, { useState, useEffect } from 'react';
import jsonData from './data/events.json'; // Adjust the path accordingly
import './App.css';

const App = () => {
  const today = new Date();
  const [currentTime, setCurrentTime] = useState(today.toLocaleTimeString());
  const [eventName, setEventName] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Assuming you want to display the name of the first event in "Core Tyria"
    const firstEvent = jsonData['Core Tyria'][0];
    if (firstEvent && firstEvent.name) {
      setEventName(firstEvent.name);
    }

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>Guild Wars 2 - Meta Event Timer</h1>
      <p>Current Time: {currentTime}</p>
      <p>Event Name: {eventName}</p>
    </div>
  );
};

export default App;
