import React from 'react';
import { connect } from 'react-redux';
import Parser from 'react-html-parser';
import Loader from "./Loaders/LoaderDots";

//TODO(Check on loader to see if is actually loading)
// TODO(ADD EXPAND TO ALERT BOXES AND START OUT MINIFIED)
function ParkAlerts({alerts, isLoading}) {
    let alertsArr = [];
    if (Object.keys(alerts).length < 1){
       alertsArr.push(
            <p key="no-alert" className="alert__none">
                There are currently no alerts for this park.
            </p>
        )
    }
    else {
        Object.keys(alerts).forEach(key => {
            const ALERT_TITLE = alerts[key].title;
            const ALERT_CATEGORY = alerts[key].category;
            const ALERT_DSCRPT = alerts[key].description;
            const ALERT_URL = alerts[key].url;
            alertsArr.push(
                <div key={key} className="alert__content">
                    <h5 className="alert__title">
                        {ALERT_TITLE}
                    </h5>
                    <span className={`alert__category alert__category--${(ALERT_CATEGORY).replace(" ", "_")}`}>
                        {ALERT_CATEGORY && `Category: ${ALERT_CATEGORY}`}
                    </span>
                    <p className="alert__txt">
                        {Parser(ALERT_DSCRPT)}
                    </p>
                    <a href={ALERT_URL} className="alert__lnk" target="_blank" rel="noopener noreferrer">
                        More Info
                    </a>
                </div>
            )
        });
    }



    return (
        <div className='alert-container'>
            <h2 className="park__section-title park__section-title--alerts">
                ALERTS
            </h2>
            {isLoading && <Loader isLoading={isLoading} />}
            {!isLoading && alertsArr}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.parksData.alerts.loading
    }
}

export default connect(mapStateToProps, null)(ParkAlerts)