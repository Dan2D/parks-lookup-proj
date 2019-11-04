import React from 'react';
import {Link} from 'react-router-dom';

function ParkSummary({parkNum, parkName, parkDscrpt, parkCode}) {

    return (
        <div class="expanding-div">
            <div class="park-title-container">
                <span class="park-title__num">
                    {parkNum + 1}
                </span>
                <h2 class="park-title__name">
                    {parkName}
                </h2>
            </div>
            <input type="checkbox" style={{display: "none"}} name={`btn-expand${parkNum + 1}`} id={`btn-expand${parkNum + 1}`} className='btn-expand' />
            <label htmlFor={`btn-expand${parkNum + 1}`} class="btn-expand-label"></label>
            <div class="expand-content">
                <p class="park-description">
                    {parkDscrpt}
                </p>
                <Link to={`/parks=${parkCode}`} class="btn btn--park-lnk">
                    GO TO PARK
                    <img class="dropdown__btn" src={require("../assets/images/arrow-down.png")} alt=""/>    
                </Link>
            </div>
        </div>
    )
}

export default ParkSummary
