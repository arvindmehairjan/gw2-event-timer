import React from 'react';
import './App.css';
import TableView from './components/Table';

const App = () => {

  return (
    <div className="App">
      <h1>Guild Wars 2 - Meta Event Timer</h1>
      <TableView region="Core Tyria"/>
    </div>
  );
};

export default App;
