import React from 'react';
import { connect } from 'react-redux';
import { checkIfEmpty, handleParkHover } from "../utils/genHelpers";

import CampCardSection from "./CampCardSection";
import ExpandBtn from "./ExpandBtn";
import LoaderDots from "./Loaders/LoaderDots";

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
        Object.keys(camps).forEach((key, ind)=> {
            const CAMP_NAME = camps[key].name;
            const CAMP_DSCRPT = camps[key].description;
            const CAMP_SITES = camps[key].campsites;
            const CAMP_AMENITIES = camps[key].amenities;
            const CAMP_ACCESSIBLE = camps[key].accessibility;
            const CAMP_DIRECTIONS_URL = camps[key].directionsUrl;
            campsArr.push(
                <div key={key} 
                     className='park-section-container camp__content'                
                     onMouseEnter={() => handleParkHover(ind + 1, 'enter')}
                     onMouseLeave={() => handleParkHover(ind + 1, 'leave')}>
                    <div className='camp-title-container'>
                        <span className='camp__num'>{ind + 1}</span>
                        <h2 className='camp__name'>
                            {CAMP_NAME}
                        </h2>
                    </div>
                    <ExpandBtn inputId={`--camp`} labelId={ind+1}/>
                    <p className='camp__dscrpt'>
                        {CAMP_DSCRPT}
                    </p>
                    
                    <div className='camp__specs'>
                    <CampCardSection title='campsites' data={CAMP_SITES} />
                    <CampCardSection title='amenities' data={CAMP_AMENITIES} />
                    <CampCardSection title="accessibility" data={CAMP_ACCESSIBLE} />
                    {/* <a className='camp__direction-url' href={CAMP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">Directions To Campsite</a> */}
                    </div>
                    <hr/>
                </div>
            )
        })
    }

    // function formatDescription(dscrpt) {
    //     dscrpt = (dscrpt).replace(new RegExp(/\.\s/ig,), '.\n\n');
    //     return dscrpt
    // }

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
