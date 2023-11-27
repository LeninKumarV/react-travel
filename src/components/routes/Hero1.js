import React from "react";
import './HeroStyle1.css';

function Hero1(props) {
    return (
        <div className="hero1">
            <img src={props.img}  className={props.imgclass} />
            <div className="para">
                <h1 className={props.headclass} >{props.head} </h1>
            </div>
        </div>
    );
}
export default Hero1;