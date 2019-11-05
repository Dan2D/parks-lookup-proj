import React from 'react';
import { connect } from 'react-redux';
import Loader from "./Loaders/LoaderDots";

function ParkAlerts({alerts, isLoading}) {
    let alertsArr = [];
    if (Object.keys(alerts).length < 1){
       alertsArr.push(
            <p key="no-alert" class="alert__none">
                There are currently no alerts for this park.
            </p>
        )
    }
    else {
        Object.keys(alerts).forEach(key => {
            alertsArr.push(
                <div key={key} class="alert__content">
                    <h5 class="alert__title">
                        {alerts[key].title}
                    </h5>
                    <span class={`alert__category alert__category--${(alerts[key].category).replace(" ", "_")}`}>
                        {alerts[key].category && `Category: ${alerts[key].category}`}
                    </span>
                    <p class="alert__txt">
                        {alerts[key].description}
                    </p>
                    <a href={alerts[key].url} class="alert__lnk" target="_blank">More Info</a>
                </div>
            )
        });
    }



    return (
        <div className='alert-container'>
            <h2 class="park__section-title park__section-title--alerts">
                ALERTS
            </h2>
            <Loader isLoading={isLoading} />
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