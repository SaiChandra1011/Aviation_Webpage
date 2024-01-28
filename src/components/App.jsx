import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Into from "./intro.jsx"
import Card from "./cards.jsx"
import cardsinfo from "../cardsinfo.jsx"
import Boeing from "./boeing.jsx";
import boeinginformation from "../boeinginfo.jsx";
import Airbus  from "./airbus.jsx";
import airbusinformation from "../airbusinfo.jsx";
import AmericanJets from "./americanfighters.jsx";
import americanjetinformation from "../americaninfo.jsx";
import RussianJets from "./russianfighters.jsx";
import russianjetinformation from "../russianinfo.jsx";


function App(){
    return <div>      
      
        <Header /> 
        <Into  />
        <div className="card-container">
        <Card 
        cardimage = {cardsinfo[0].imgUrl} 
        cardname = {cardsinfo[0].name}
               
        />
        <Card 
        cardimage = {cardsinfo[1].imgUrl} 
        cardname = {cardsinfo[1].name}
               
        />
        <Card 
        cardimage = {cardsinfo[2].imgUrl} 
        cardname = {cardsinfo[2].name}
               
        />
        <Card 
        cardimage = {cardsinfo[3].imgUrl} 
        cardname = {cardsinfo[3].name}
               
        />
        </div>
        
        <Footer />

        {boeinginformation.map(boeingItem =>(
           <Boeing
           key = {boeingItem.key}
           title = {boeingItem.title}
           pictureURL ={boeingItem.pictureURL}
           content = {boeingItem.content}
           /> 
        ))}

        {airbusinformation.map(airbusItem =>(
           <Airbus
           key = {airbusItem.key}
           title = {airbusItem.title}
           pictureURL ={airbusItem.pictureURL}
           content = {airbusItem.content}
           /> 
        ))}

        {americanjetinformation.map(americanjetItem =>(
           <AmericanJets
           key = {americanjetItem.key}
           title = {americanjetItem.title}
           pictureURL ={americanjetItem.pictureURL}
           content = {americanjetItem.content}
           /> 
        ))}

        {russianjetinformation.map(russianjetItem =>(
           <RussianJets
           key = {russianjetItem.key}
           title = {russianjetItem.title}
           pictureURL ={russianjetItem.pictureURL}
           content = {russianjetItem.content}
           />
        ))}
        
        return (
         <Router>
         <Switch>
          <Route exact path="/boeing">
            <Bo />
          </Route>
          <Route exact path="/airbus">
            <Ar />
          </Route>
          <Route exact path="/americanfighters">
            <AJ />
          </Route>
          <Route exact path="/russianfighters">
            <RJ />
          </Route>
         </Switch>
        </Router>

        );
        
    </div>
    
    
}

function Bo(){
   return <h5> Boeing </h5>;
}
function Ar(){
   return <h5> Airbus </h5>;
}
function AJ(){
   return <h5> American Jets </h5>;
}
function RJ(){
   return <h5> Russian Jets </h5>;
}

export default App;