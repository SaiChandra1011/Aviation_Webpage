import React from "react";
import {Route , Routes} from "react-router-dom;"
import Boeing from './boeing.jsx';
import boeinginformation from '../boeinginfo.jsx';
import Airbus from './airbus.jsx';
import airbusinformation from '../airbusinfo.jsx';
import AmericanJets from './americanfighters.jsx';
import americanjetinformation from '../americaninfo.jsx';
import RussianJets from './russianfighters.jsx';
import russianjetinformation from '../russianinfo.jsx';


function Pages(){
    return(
        <Routes>
            <Route path="/" element={<Into />} />
            <Route path="/boeing" element={<Boeing />} />
            <Route path="/airbus" element={<Airbus />} />
            <Route path="/americanfighters" element={<AmericanJets />} />
            <Route path="/russianfighters" element={<RussianJets />} />
        </Routes>
        

    );

   
}

{boeinginformation.map((boeingItem) => (
    <Boeing
      key={boeingItem.key}
      title={boeingItem.title}
      pictureURL={boeingItem.pictureURL}
      content={boeingItem.content}
    />
  ))}
export default Pages;