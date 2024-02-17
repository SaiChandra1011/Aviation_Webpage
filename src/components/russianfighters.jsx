import React from "react";
import Tilt from "react-parallax-tilt";

function RussianJets(props){
    return (
        <Tilt glareEnable={false} tiltMaxAngleX={6.7} 
        tiltMaxAngleY={2.5} perspective={950} 
        >
         <div className="binfo">
            <h5 className="tit">{props.title}</h5>
            <div className="info-container">
            <img  className="infoimg" src = {props.pictureURL} alt="image of the plane" />
            <p className="con">{props.content}</p>
            </div>
         </div>
         </Tilt>
    );
}
export default RussianJets;