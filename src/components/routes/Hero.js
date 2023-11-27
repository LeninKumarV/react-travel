import React from "react";
import './HeroStyle.css';

function Hero(props) {
    return (
        <div className="hero">
            <img src={props.img}  className={props.imgclass} />
            <div className="para">
                <h1 className={props.headclass} >{props.head} </h1>
                <h4> {props.title} </h4>
                <button className={props.btnclass}> {props.btn} </button>
            </div>
        </div>
    );
}
export default Hero;