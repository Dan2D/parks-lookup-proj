import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getParkData } from "../actions/parksDataActions";

const mapDispatchToProps = dispatch => {
    return {
        getParkData: (parkCode, dataType) => {
            return dispatch(getParkData(parkCode, dataType));
        }
    }
}

function ParkNav({parkCode, getParkData}) {

    function handleParkNavClick(dataType) {
        getParkData(parkCode, dataType);
    }

    return (
        <nav className="park-nav-container">
            <Link to={`/parks=${parkCode}/campgrounds`} className='park-nav__lnk park-nav__lnk--camps' onClick={() => handleParkNavClick('campgrounds')}>
                CAMPGROUNDS
            </Link>
            <Link to={`/parks=${parkCode}/visitorscenters`} className='park-nav__lnk park-nav__lnk--vcenters' onClick={() => handleParkNavClick('visitorcenters')}>
                VISITOR'S CENTERS
            </Link>
            {/* <Link to={`/parks=${parkCode}/events`} className='park-nav__lnk park-nav__lnk--events' onClick={() => handleParkNavClick('events')}>
                EVENTS
            </Link>
            <Link to={`/parks=${parkCode}/news`} className='park-nav__lnk park-nav__lnk--news' onClick={() => handleParkNavClick('news')}>
                NEWS
            </Link> */}
        </nav>
    )
}

export default connect(null, mapDispatchToProps)(ParkNav)
