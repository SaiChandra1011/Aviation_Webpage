import React from "react";

function Card(props) {
return(
    <div className="card">
    <img className="plane-img" src={props.cardimage} />
    <p className="mid">{props.cardname}</p>
    </div>
);


}
export default Card;