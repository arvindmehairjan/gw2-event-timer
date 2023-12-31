import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/Homepage';
import ContactPage from './pages/ContactPage';
import LivingWorldPage from './pages/LivingWorldPage';
import CoreTyriaPage from './pages/CoreTyriaPage';
import HeartOfThornsPage from './pages/HeartOfThorns';
import PathOfFirePage from './pages/PathOfFirePage';
import IceBroodPage from './pages/IceBroodPage';
import EndOfDragonsPage from './pages/EndOfDragonsPage';
import SecretsOfTheObscurePage from './pages/SecretsOfTheObscurePage';

const App = () => {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="contact" element={<ContactPage />} />
            <Route path="core-tyria" element={<CoreTyriaPage />} />
            <Route path="living-world" element={<LivingWorldPage />} />
            <Route path="heart-of-thorns" element={<HeartOfThornsPage />} />
            <Route path="path-of-fire" element={<PathOfFirePage />} />
            <Route path="icebrood-saga" element={<IceBroodPage />} />
            <Route path="end-of-dragons" element={<EndOfDragonsPage />} />
            <Route path="secrets-of-obscure" element={<SecretsOfTheObscurePage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
