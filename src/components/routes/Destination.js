import React from "react";
import "./DestinationStyle.css";
import DestImage1 from '../../images/4.jpg';
import DestImage2 from '../../images/5.jpg';
import DestImage3 from '../../images/9.jpg';
import DestImage4 from '../../images/11.jpg';


function Destination() {
    return (
    <>
        <div className="destination">
            <h1 id="title">Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot,within a time frame.</p>

            <div className="dest-1">
                <div className="para">
                    <h1>Taal Volcano,Batangas</h1>
                    <p>The literal Swiss village of our dreams, Lauterbrunnen Valley has got to be one of the most beautiful places in Switzerland. Situated in a stunning valley amidst the Swiss Alps, the picturesque village is surrounded by rocky cliffs and 72 beautiful waterfalls, including the famous Trümmelbach Falls and Staubbach Falls.
                        The literal Swiss village of our dreams, Lauterbrunnen Valley has got to be one of the most beautiful places in Switzerland.Situated in a stunning valley amidst the Swiss Alps, the picturesque village is surrounded by rocky cliffs and 72 beautiful waterfalls, including the famous Trümmelbach Falls and Staubbach Falls.
                    </p>
                </div>

                <div className="images">
                    <img className="img1" src={DestImage1} />
                    <img className="img2" src={DestImage2} />
                </div>
            </div>
        </div>

        <div className="destination">
            <div className="dest-2" id="dest-2">
                <div className="para">
                    <h1>Mt.Daguldul,Batangas</h1>
                    <p>The literal Swiss village of our dreams, Lauterbrunnen Valley has got to be one of the most beautiful places in Switzerland. Situated in a stunning valley amidst the Swiss Alps, the picturesque village is surrounded by rocky cliffs and 72 beautiful waterfalls, including the famous Trümmelbach Falls and Staubbach Falls.
                        The literal Swiss village of our dreams, Lauterbrunnen Valley has got to be one of the most beautiful places in Switzerland.Situated in a stunning valley amidst the Swiss Alps, the picturesque village is surrounded by rocky cliffs and 72 beautiful waterfalls, including the famous Trümmelbach Falls and Staubbach Falls.
                    </p>
                </div>

                <div className="images">
                    <img className="img1" src={DestImage3} />
                    <img className="img2" src={DestImage4} />
                </div>
            </div>
        </div>
    </>

        
    );
}
export default Destination;