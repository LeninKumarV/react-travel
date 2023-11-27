import React from "react";
import Hero1 from "./Hero1";
import SignUpImg from "../../images/10.jpg"
import Footer from "./Footer";
import "./signUp.css"

function SignUp() {
    return (
        <div className="sign-up">
            <Hero1
                img={SignUpImg}
                head="Signup Here!"
                imgclass="about-img-class"
                headclass="services-head-class"
            />

            <div className="form1">
                <h1>signup here!!</h1>
                <input type="text" name="username" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="subject" placeholder="Password" />
                <input type="password" name="subject" placeholder="Confirm Password" />
                <button>Submit</button>
            </div>
            <Footer/>
        </div>
    );
}
export default SignUp;