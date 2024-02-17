import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './intro';
import Boeing from './boeing.jsx';
import boeinginformation from '../boeinginfo.jsx';
import Airbus from './airbus.jsx';
import airbusinformation from '../airbusinfo.jsx';
import AmericanJets from './americanfighters.jsx';
import americanjetinformation from '../americaninfo.jsx';
import RussianJets from './russianfighters.jsx';
import russianjetinformation from '../russianinfo.jsx';


function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boeing" element={
    <div>
      {boeinginformation.map((boeingItem) => (
        <Boeing
          key={boeingItem.key}
          title={boeingItem.title}
          pictureURL={boeingItem.pictureURL}
          content={boeingItem.content}
        />
      ))}
    </div>
  } />
      <Route path="/airbus" element={
      <div> 
        {airbusinformation.map((airbusItem) => (
        <Airbus
          key={airbusItem.key}
          title={airbusItem.title}
          pictureURL={airbusItem.pictureURL}
          content={airbusItem.content}
        />
      ))}
      </div>
    } />
      <Route path="/americanfighters" element={
      <div>
        {americanjetinformation.map((americanjetItem) => (
        <AmericanJets
          key={americanjetItem.key}
          title={americanjetItem.title}
          pictureURL={americanjetItem.pictureURL}
          content={americanjetItem.content}
        />
      ))}
      </div>
    } />
      <Route path="/russianfighters" element={
      <div>
        {russianjetinformation.map((russianjetItem) => (
        <RussianJets
          key={russianjetItem.key}
          title={russianjetItem.title}
          pictureURL={russianjetItem.pictureURL}
          content={russianjetItem.content}
        />
      ))}
      </div>} />
    </Routes>
    


    
  );
}


export default Pages;
