import React, {useState} from 'react';
import {connect} from 'react-redux';

import ParkNav from "../ParkNav";
import ParkAlerts from "../ParkAlerts";
import ParkEvents from "../ParkEvents";

function ParkPage({parks, parkCode, alerts}) {
    const [campgrounds, setCampgrounds] = useState(false);

    return (
        <div className="park-page-container">
            <ParkNav parkCode={parkCode} />
            <div class="park-content-container">
                <h1 class="park__name">
                    {parks[parkCode].fullName}
                </h1>
                <span class="park__states">
                    {`States: ${parks[parkCode].states}`}
                </span>
                <p class="park__dscrpt">
                    {parks[parkCode].description}
                </p>
                {parks[parkCode].weatherInfo && 
                    <>
                        <h2 class="park__section-title park__section-title--weather">
                            WEATHER
                        </h2>
                        <p class="park__section-txt">
                            {parks[parkCode].weatherInfo}
                        </p>
                    </>
                }
                <ParkAlerts alerts={alerts} />
                <ParkEvents parkCode={parkCode}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        parkCode: state.appState.park,
        parks: state.parksData.parks.byId,
        alerts: state.parksData.alerts.byId
    }
}

export default connect(mapStateToProps, null)(ParkPage)
