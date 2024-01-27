import React from "react";
import Tilt from "react-parallax-tilt";

function Boeing(props){
    return (
        <Tilt glareEnable={false} tiltMaxAngleX={11} 
        tiltMaxAngleY={5} perspective={1050} 
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
export default Boeing;