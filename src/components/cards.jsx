import React from 'react';
import Tilt from 'react-parallax-tilt';
import { NavLink } from 'react-router-dom';

function Card(props) {
  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavLink
      to={`/${props.cardname}`}
      className="card-link"
      onClick={handleClick}>
      <Tilt
        glareEnable={false}
        tiltMaxAngleX={11}
        tiltMaxAngleY={13}
        perspective={1050}>
        <div className="card">
          <img alt="plane" className="plane-img" src={props.cardimage} />
          <p className="mid">{props.cardname}</p>
        </div>
      </Tilt>
    </NavLink>
  );
}

export default Card;
