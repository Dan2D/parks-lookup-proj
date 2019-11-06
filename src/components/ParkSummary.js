import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { setPark } from "../actions/parksDataActions";

const mapDispatchToProps = dispatch => {
    return {
        setPark: (parkCode) => {
            return dispatch(setPark(parkCode));
        }
    }
}

function ParkSummary({parkNum, parkName, parkDscrpt, parkCode, setPark}) {

    function handleParkClick() {
        setPark(parkCode);
    }

    return (
        <div className="expanding-div">
            <div className="park-title-container">
                <span className="park-title__num">
                    {parkNum + 1}
                </span>
                <h2 className="park-title__name">
                    {parkName}
                </h2>
            </div>
            <input type="checkbox" style={{display: "none"}} name={`btn-expand${parkNum + 1}`} id={`btn-expand${parkNum + 1}`} className='btn-expand' />
            <label htmlFor={`btn-expand${parkNum + 1}`} className="btn-expand-label"></label>
            <div className="expand-content">
                <p className="park-description">
                    {parkDscrpt}
                </p>
                <Link to={`/parks/${parkCode}`} className="btn btn--park-lnk" onClick={() => handleParkClick()}>
                    GO TO PARK
                    <img className="dropdown__btn" src={require("../assets/images/arrow-down.png")} alt=""/>    
                </Link>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(ParkSummary)
