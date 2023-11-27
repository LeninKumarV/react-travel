import React from "react";
import imgContact from '../../images/2.jpg';
import Hero1 from "./Hero1";
import Footer from "./Footer";
import './Contact.css';

function Contact(){
    return(
        <div className="contact">
            <Hero1
                img={imgContact}
                head="Contact"
                imgclass="about-img-class"
                headclass="services-head-class"
            />
            <div className="form">
                <h1>Send a message to us!</h1>
                <input type="text" name="username" placeholder="Name"/>
                <input type="email" name="email" placeholder="Email"/>
                <input type="text" name="subject" placeholder="Subject"/>
                <textarea placeholder="Messages"></textarea>
                <button>Submit</button>
            </div>
            <Footer/>
        </div>
    );
}
export default Contact;