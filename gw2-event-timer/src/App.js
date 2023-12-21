import React from 'react';
import './App.css';
import TableView from './components/Table';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <TableView region="Core Tyria"/>
    </div>
  );
};

export default App;
