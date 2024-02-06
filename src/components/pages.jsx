import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './intro';
import Boeing from './boeing';
import Airbus from './airbus';
import AmericanJets from './americanfighters';
import RussianJets from './russianfighters';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boeing" element={<Boeing />} />
      <Route path="/airbus" element={<Airbus />} />
      <Route path="/americanfighters" element={<AmericanJets />} />
      <Route path="/russianfighters" element={<RussianJets />} />
    </Routes>
    


    
  );
}


export default Pages;
