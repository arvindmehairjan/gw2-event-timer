import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const today = new Date();
  const [currentTime, setCurrentTime] = useState(today.toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>Guild Wars 2 - Meta Event Timer</h1>
      <p>Current Time: {currentTime}</p>
    </div>
  );
};

export default App;
