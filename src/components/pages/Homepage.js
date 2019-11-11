import React from 'react';

import Hero from "../Hero";




function Homepage({getStateParks, parks, ...props}) {

    return (
        <div className="main-content main-content--home">
            <Hero />
        </div>
    )
}


export default Homepage

