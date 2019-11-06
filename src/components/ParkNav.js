import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCampgrounds } from "../actions/parksDataActions";

const mapDispatchToProps = dispatch => {
    return {
        getCampgrounds: (parkCode) => {
            return dispatch(getCampgrounds(parkCode));
        }
    }
}

function ParkNav({parkCode, getCampgrounds, onClick}) {

    return (
        <nav className="park-nav-container">
            <Link to={`/parks/${parkCode}&query=campgrounds`} className='park-nav__lnk park-nav__lnk--camps' onClick={() => console.log("HELLO")}>
                CAMPGROUNDS
            </Link>
            <Link to={`/parks/${parkCode}/visitorscenters`} className='park-nav__lnk park-nav__lnk--vcenters' onClick={() => onClick('vcenters')}>
                VISITOR'S CENTERS
            </Link>
        </nav>
    )
}

export default connect(null, mapDispatchToProps)(ParkNav)
