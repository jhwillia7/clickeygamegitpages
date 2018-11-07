import React from "react";
import "./Header.css";
import nbalogo from "./nbalogo.png";
import warriors from "./warriors.png";

// Header
const Header = props => (

    <div id="header" className="container-fluid">

        <span className="headerSection" id="headerLeft">
            <img id="warriors" src={warriors} alt="warriors" />
        </span>

        <span className="headerSection" id="headerMiddle">
            <h4 id="instructions">Click on an image to earn points, but don't click on any of them more than once!</h4>
        </span>

        <span className="headerSection" id="headerRight">
            <img id="nbalogo2" src={nbalogo} alt="nbalogo" />
        </span>

    </div>

)

export default Header;