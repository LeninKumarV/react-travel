import React from "react";
import Hero from "./Hero";
import img12 from '../../images/12.jpg';
import Destination from "./Destination";
import Trip from "./Trip";
import Footer from "./Footer";

function Home(){
    return(
        <diV>
            <Hero
                img={img12}
                head="Your Journey Your Story"
                title="Choose Your Favourite Destinations"
                btn="Travel Plan"
                btnclass="homebtn"
            />
            <Destination/>
            <Trip/>
            <Footer/> 
        </diV>
    );
}
export default Home;