import React from "react";
import './Tripdata.css';

function Tripdata(props){
    return(
        <div className="tripdata">
                <div className="t-card">
                    <div className="t-img">
                        <img src={props.image}/>
                    </div>
                    <h2>{props.title}</h2>
                    <p>{props.para}</p>
                </div>

                <div className="t-card">
                    <div className="t-img">
                        <img src={props.image1}/>
                    </div>
                    <h2>{props.title1}</h2>
                    <p>{props.para1}</p>
                </div>

                <div className="t-card">
                    <div className="t-img">
                        <img src={props.image2}/>
                    </div>
                    <h2>{props.title2}</h2>
                    <p>{props.para2}</p>
                </div>
        </div>
    

    );
}
export default Tripdata;