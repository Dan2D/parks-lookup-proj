import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav-container">
            <div className="logo-container">
                <img className="parks-logo" src={require("../assets/images/park-logo.png")} alt="national park logo" />
                <h1 className="site-name">
                    WILDERNESS<br/>WATCH
                </h1>
            </div>
            <div className="nav-lnks-container">
                <Link to="/parks" className="nav-lnk">PARKS</Link>
                <a href="#" className="nav-lnk">ABOUT</a>
                <a href="#" className="nav-lnk">CONTACT</a>
            </div>
        </nav>
    )
}

export default Nav
