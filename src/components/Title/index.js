import React from "react";
import "./style.css";

function Title(props) {
    return <div className="gameText">
    <h1 className="title">The Click Game</h1>
    <h3 className="score">Your score: {props.total}</h3>
        <h3 className="message">{props.message}</h3>
    
    </div>;
}

export default Title;
