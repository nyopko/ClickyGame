import React from "react";
import "./style.css";

const Card = props => (
    <div className="imgCard">
    <img alt={props.name} src={props.image} id={props.id}  onClick = {() => props.shufflePics(props.id)} className='shufflePics'/>/>

    </div>
)

export default Card;