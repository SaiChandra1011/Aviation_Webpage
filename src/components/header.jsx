import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-content">
        <NavLink to="/">
          <h1>AviaPedia</h1>
        </NavLink>
        <div className="jet-info">
          <NavLink to="/boeing">
            <h5>Boeing</h5>
          </NavLink>
          <NavLink to="/airbus">
            <h5>Airbus</h5>
          </NavLink>
          <NavLink to="/american-jets">
            <h5>American Jets</h5>
          </NavLink>
          <NavLink to="/russian-jets">
            <h5>Russian Jets</h5>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
