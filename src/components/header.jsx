import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 



function Header() {
  return (
    <header>
      <div className="header-content">
        <Router>
        <Link to="/intro">AviaNation</Link>
        <div className="jet-info">
          <Link to="/boeing">Boeing</Link>
          <Link to="/airbus">Airbus</Link>
          <Link to="/americanfighters">American Jets</Link>
          <Link to="/russianfighters">Russian Jets</Link>
          
        </div>
        </Router>
      </div>
    </header>
  );
}

export default Header;