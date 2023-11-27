import React from "react";
import './Tripstyle.css';
import Tripdata from "./Tripdata";
import indo from '../../images/4.jpg';
import malay from '../../images/6.jpg';
import France from '../../images/8.jpg';

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique Destinations using through 'Trippy'</p>
            <Tripdata 
                image={indo}
                title='Trip in Indonesia'
                para='The beauty of scenic natural landscapes blended with various unique culture of its people. Enjoy the untouched beaches, mountains, lakes, and many more pleasing destinations as well as the magnificent city skylines throughout the country.'
            
                image1={malay}
                title1='Trip in Malaysia'
                para1='The beauty of scenic natural landscapes blended with various unique culture of its people. Enjoy the untouched beaches, mountains, lakes, and many more pleasing destinations as well as the magnificent city skylines throughout the country.'
                
                image2={France}
                title2='Trip in France'
                para2='The beauty of scenic natural landscapes blended with various unique culture of its people. Enjoy the untouched beaches, mountains, lakes, and many more pleasing destinations as well as the magnificent city skylines throughout the country.'
            
            />
             
        </div>
    

    );
}
export default Trip;