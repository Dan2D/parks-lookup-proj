import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCampgrounds } from "../../actions/parksDataActions";

const mapDispatchToProps = dispatch => {
    return {
        getCampgrounds: (parkCode) => {
            return dispatch(getCampgrounds(parkCode));
        }
    }
}

function ParkNav({parkCode, state}) {

    return (
        <nav className="park-nav-container">
            <Link to={`/state/${state}/parks/${parkCode}/campgrounds`} className='park-nav__lnk park-nav__lnk--camps'>
                CAMPGROUNDS
            </Link>
            <Link to={`/state/${state}/parks/${parkCode}/visitorscenters`} className='park-nav__lnk park-nav__lnk--vcenters'>
                VISITOR'S CENTERS
            </Link>
        </nav>
    )
}

export default connect(null, mapDispatchToProps)(ParkNav)
