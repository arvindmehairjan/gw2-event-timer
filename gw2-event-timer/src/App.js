import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/Homepage';
import CoreTyriaPage from './pages/CoreTyriaPage';
import ContactPage from './pages/ContactPage';

const App = () => {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="contact" element={<ContactPage />} />
            <Route path="core-tyria" element={<CoreTyriaPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
