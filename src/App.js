import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/Homepage';
import ContactPage from './pages/ContactPage';
import LivingWorldPage from './pages/LivingWorldPage';
import CoreTyriaPage from './pages/CoreTyriaPage';

const App = () => {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="contact" element={<ContactPage />} />
            <Route path="core-tyria" element={<CoreTyriaPage />} />
            <Route path="living-world" element={<LivingWorldPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
