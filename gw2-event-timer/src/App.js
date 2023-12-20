import React, { useState, useEffect } from 'react';
import jsonData from './data/events.json'; 
import './App.css';

const App = () => {


  return (
    <div className="App">
      <h1>Guild Wars 2 - Meta Event Timer</h1>
      <p>Current Time: </p>
      <p>Closest Upcoming Event:</p>
    </div>
  );
};

export default App;