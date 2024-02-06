import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Intro from './intro.jsx';
import Boeing from './boeing.jsx';
import boeinginformation from '../boeinginfo.jsx';
import Airbus from './airbus.jsx';
import AmericanJets from './americanfighters.jsx';
import RussianJets from './russianfighters.jsx';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/boeing" element={<Boeing />} />
      <Route path="/airbus" element={<Airbus />} />
      <Route path="/americanfighters" element={<AmericanJets />} />
      <Route path="/russianfighters" element={<RussianJets />} />
    </Routes>
  );
}

{
  boeinginformation.map((boeingItem) => (
    <Boeing
      key={boeingItem.key}
      title={boeingItem.title}
      pictureURL={boeingItem.pictureURL}
      content={boeingItem.content}
    />
  ));
}
export default Pages;
