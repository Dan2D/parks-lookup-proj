import React from 'react';
import Searchbar from "./searchbar/Searchbar";

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-txt">CHOOSE A DESTINATION</h1>
                <Searchbar dropdown={true} />
            </div>
        </div>
    )
}

export default Hero
