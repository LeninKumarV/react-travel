import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <h2>Trippy</h2>
                <div>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>Project</h3>
                    <a href="#">Changelog</a>
                    <a href="#">Status</a>
                    <a href="#">License</a>
                    <a href="#">All Versions</a>
                </div>

                <div>
                    <h3>Community</h3>
                    <a href="#">GitHub</a>
                    <a href="#">Issues</a>
                    <a href="#">Project</a>
                    <a href="#">Twitter</a>
                </div>

                <div>
                    <h3>Help</h3>
                    <a href="#">Support</a>
                    <a href="#">Troubleshooting</a>
                    <a href="#">Contact Us</a>
                </div>

                <div>
                    <h3>Others</h3>
                    <a href="#">Teams Of Service</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">License</a> 
                </div>
            </div>
        </div>
    );
}
export default Footer;