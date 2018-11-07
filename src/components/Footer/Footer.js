import React from "react";
import "./Footer.css";
import logo from "./warriors.png";

// Footer
const Footer = props => (

    <div id="footer" className="container-fluid">

        <div className="row justify-content-center">
            <div className="col-auto">
                <div className="footerWrapper">
                    <a id="footerContent" href="https://jhwillia7.github.io/jhwillia7.github.io/" target="blank">
                        <h4 id="name">John Williams <img id="logo" src={logo} alt="NBA Logo" />
                    </h4>
                    </a>
                </div>
            </div>
        </div>

    </div>

)

export default Footer;