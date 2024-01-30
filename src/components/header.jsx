import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 



function Header() {
  return (
    <header>
      <div className="header-content">
        <Router>
        <Link to="/"><h1>AviaNation</h1></Link>
        <div className="jet-info">
          <Link to="/boeing"><h5>Boeing</h5></Link>
          <Link to="/airbus"><h5>Airbus</h5></Link>
          <Link to="/americanfighters"><h5>American Jets</h5></Link>
          <Link to="/russianfighters"><h5>Russian Jets</h5></Link>
          
        </div>
        </Router>
      </div>
    </header>
  );
}

export default Header;