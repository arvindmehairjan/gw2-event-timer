import React from 'react';
import './App.css';
import TableView from './components/Table';
import NavBar from './components/Navbar';
const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <h1>Guild Wars 2 - Meta Event Timer</h1>
      <TableView region="Core Tyria"/>
    </div>
  );
};

export default App;
