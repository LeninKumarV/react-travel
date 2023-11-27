import React from "react";
import imgAbout from '../../images/night.jpg';
import Hero1 from "./Hero1";
import Footer from "./Footer";
import './About.css';

function About() {
    return (
        <div className="about">
            <Hero1
                img={imgAbout}
                head="About"
                imgclass="about-img-class"
                headclass="about-head-class"
            />
            <div className="contents">
                <div>
                    <h2>Our History</h2>
                    <p>The literal Swiss village of our dreams, Lauterbrunnen Valley has got to be one of the most beautiful places in Switzerland. Situated in a stunning valley amidst the Swiss Alps, the picturesque village is surrounded by rocky cliffs and 72 beautiful waterfalls, including the famous Trümmelbach Falls and Staubbach Falls.
                        The literal Swiss village of our dreams, Lauterbrunnen Valley has got to be one of the most beautiful places in Switzerland.</p>
                </div>

                <div>
                    <h2>Our Mission</h2>
                    <p>The literal Swiss village of our dreams, Lauterbrunnen Valley has got to be one of the most beautiful places in Switzerland. Situated in a stunning valley amidst the Swiss Alps, the picturesque village is surrounded by rocky cliffs and 72 beautiful waterfalls, including the famous Trümmelbach Falls and Staubbach Falls.</p>
                </div>

                <div>
                    <h2>Our Vision</h2>
                    <p>The literal Swiss village of our dreams, Lauterbrunnen Valley has got to be one of the most beautiful places in Switzerland.</p>

                </div>
            </div>
            <Footer />
        </div>
    );
}
export default About;