import React from 'react';
import ParkSummary from "../ParkSummary";

function SearchPage({stateName, parkResults}) {
//TODO(Setup store, won't render with undefined parkresults prop)

    // const parkList = parkResults.map((park, ind) => {
    //     return (
    //         <ParkSummary 
    //             key={park.id} 
    //             parkNum={ind} 
    //             parkName={park.name} 
    //             parkDscrpt={park.dscrpt} 
    //             parkLnk={park.lnk}
    //         />
    //     )
    // })


    return (
        <div>
            <div class="search-results-container">
                <h1 class="state-title">{`${("washington").toUpperCase()} PARKS`}</h1>
                {/* {parkList} */}
                <ParkSummary />
            </div>
        </div>
    )
}

export default SearchPage
