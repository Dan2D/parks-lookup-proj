import React from 'react';
import { connect } from 'react-redux';
import { handleParkHover } from "../../utils/genHelpers";

import SummarySection from "../SummarySection";
import LoaderDots from "../Loaders/LoaderDots";

function ParkVCenters({vc, isLoading}) {
    let vcArr = [];
    Object.keys(vc).forEach((key, ind)=> {
        const VC_TITLE = vc[key].name;
        const VC_DSCRPT = vc[key].description;
        const VC_URL = vc[key].url;
        vcArr.push(
            <SummarySection 
            key={key} 
            num={ind + 1} 
            title={VC_TITLE} 
            dscrpt={VC_DSCRPT} 
            url={VC_URL}                 
            onMouseEnter={() => handleParkHover(ind + 1, 'enter')}
            onMouseLeave={() => handleParkHover(ind + 1, 'leave')}
            />
        )
    })

    return (
        <section className='park-vc-container'>
            <h2 className='park__section-title'>
                VISITOR CENTERS
            </h2>
            <span className="sub-note"><i>Note: Some visitor centers coordinates may be missing (Additions coming soon...)</i></span>
            {isLoading && <LoaderDots />}
            {!isLoading && vcArr.length > 0 ? vcArr : <p>There are no visitor centers at this park.</p>}
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
