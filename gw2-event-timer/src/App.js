import React from 'react';
import './App.css';
import TableView from './components/Table';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <TableView region="Core Tyria"/>
      <Footer />
    </div>
  );
};

export default App;
