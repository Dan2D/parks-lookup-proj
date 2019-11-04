import React from 'react'

function ParkSummary({parkNum, parkName, parkDscrpt, parkLnk}) {
    return (
        <div class="expanding-div">
            <span class="park-num">
                {/* {parkNum} */}
                1.
            </span>
            <h2 class="park-name">
                {/* {parkName} */}
                EBEY'S LANDING NATIONAL HISTORICAL RESERVE
            </h2>
            <input type="checkbox" name="btn-expand" id="btn-expand" />
            <label htmlFor="btn-expand" class="btn-expand-label"></label>
            <div class="expand-content">
                <p class="park-description">
                    {/* {parkDscrpt} */}
                    This stunning landscape at the gateway to Puget Sound, 
                    with its rich farmland and promising seaport, lured the 
                    earliest American pioneers north of the Columbia River 
                    to Ebey’s Landing. Today Ebey’s Landing National Historical 
                    Reserve preserves the historical, agricultural and cultural 
                    traditions of both Native and Euro-American – while offering 
                    spectacular opportunities for recreation.
                </p>
                <a href={parkLnk} class="btn btn--park-lnk">
                    GO TO PARK
                    <img class="dropdown__btn" src={require("../assets/images/arrow-down.png")} alt=""/>    
                </a>
            </div>
        </div>
    )
}

export default ParkSummary
