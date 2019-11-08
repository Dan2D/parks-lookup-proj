import React from 'react';
import { connect } from 'react-redux';
import { handleParkHover } from "../utils/genHelpers";

import SummarySection from "./SummarySection";
import LoaderDots from "./Loaders/LoaderDots";
// TODO(ADD ONMOUSEENTER/MOUSELEAVE FOR SUMMARY SECTION AND FUNCTION TO CHANGE MARKER CLASS)
function ParkVCenters({vc, isLoading}) {
    let vcArr = [];
    Object.keys(vc).forEach((key, ind)=> {
        const VC_TITLE = vc[key].name;
        const VC_DSCRPT = vc[key].description;
        const VC_URL = vc[key].url;
        vcArr.push(
            <SummarySection key={key} 
                            num={ind + 1} 
                            title={VC_TITLE} 
                            dscrpt={VC_DSCRPT} 
                            url={VC_URL}                 
                            onMouseEnter={() => handleParkHover(ind + 1, 'enter')}
                            onMouseLeave={() => handleParkHover(ind + 1, 'leave')}/>
        )
    })

    return (
        <section className='park-vc-container'>
            <h3>
                VISITOR CENTERS
            </h3>
            {isLoading && <LoaderDots />}
            {!isLoading && vcArr}
        </section>
    )
}

const mapStateToProps = state => {
    return {
        vc: state.parksData.visitorCenters.byId,
        isLoading: state.parksData.visitorCenters.loading
    }
}

export default connect(mapStateToProps, null)(ParkVCenters)
