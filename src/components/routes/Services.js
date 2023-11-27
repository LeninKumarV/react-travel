import React from "react";
import imgServices from '../../images/1.jpg';
import Hero1 from "./Hero1";
import Footer from "./Footer";
import Trip from "./Trip";

function Services(){
    return(
        <diV>
            <Hero1
                img={imgServices}
                head="Services"
                imgclass="about-img-class"
                headclass="services-head-class"
            />
            <Trip/>
            <Footer/>
        </diV>
    );
}
export default Services;