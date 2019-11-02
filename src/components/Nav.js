import React from 'react'

function Nav() {
    return (
        <nav class="nav-container">
            <div class="logo-container">
                <img src={require("../assets/images/park-logo.png")} alt="national park logo" class="parks-logo"/>
                <h1 class="site-name">
                    WILDERNESS<br/>WATCH
                </h1>
            </div>
            <div class="nav-lnks-container">
                <a href="#" class="nav-lnk">PARKS</a>
                <a href="#" class="nav-lnk">ABOUT</a>
                <a href="#" class="nav-lnk">CONTACT</a>
            </div>
        </nav>
    )
}

export default Nav
