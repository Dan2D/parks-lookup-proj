import React from 'react';
import { connect } from 'react-redux';
import { checkIfEmpty } from "../utils/genHelpers";

import CampCardSection from "./CampCardSection";
import LoaderDots from "./Loaders/LoaderDots";

//TODO(SHOW SUMMARY OF CAMPSITE W/ #, NAME, DSCRPT, TOTAL SITES. THEN USER CAN EXPAND TO SEE MORE DETAIL)
function ParkCamps({camps, isLoading}) {

    let campsArr = [];
    if (checkIfEmpty(camps)){
        campsArr.push(
            <p className="camps__none">
                There are no campsites available at this park.
            </p>
        )
    }
    else {
        Object.keys(camps).forEach(key => {
            const CAMP_NAME = camps[key].name;
            const CAMP_DSCRPT = camps[key].description;
            const CAMP_SITES = camps[key].campsites;
            const CAMP_AMENITIES = camps[key].amenities;
            const CAMP_ACCESSIBLE = camps[key].accessibility;
            const CAMP_DIRECTIONS_URL = camps[key].directionsUrl;
            campsArr.push(
                <div key={key} className='camp_content'>
                    <h2 className='camp__name'>
                        {CAMP_NAME}
                    </h2>
                    <p className='camp__dscrpt'>
                        {CAMP_DSCRPT}
                    </p>
                    <CampCardSection title="campsites" data={CAMP_SITES} />
                    <CampCardSection title="amenities" data={CAMP_AMENITIES} />
                    {/* <a className='camp__direction-url' href={CAMP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">Directions To Campsite</a> */}
                </div>
            )
        })
    }

    return (
        <div className="camp-full-container">
            <h2 className="camps__title">
                CAMPGROUNDS
            </h2>
            {isLoading && <LoaderDots />}
            {!isLoading && campsArr}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.parksData.campgrounds.loading,
        camps: state.parksData.campgrounds.byId
    }
}

export default connect(mapStateToProps, null)(ParkCamps)
