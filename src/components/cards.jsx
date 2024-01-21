import React from "react";
import Tilt from "react-parallax-tilt";


function Card(props) {
return(
    <Tilt glareEnable={false} tiltMaxAngleX={11} 
        tiltMaxAngleY={13} perspective={1050} 
        >

        
    <div className="card">
    <img className="plane-img" src={props.cardimage} />
    <p className="mid">{props.cardname}</p>
    </div>
    </Tilt>
);


}
export default Card;