import React, {useState} from 'react';
import {connect} from 'react-redux';

import ParkNav from "../ParkNav";
import ParkAlerts from "../ParkAlerts";
import ParkEvents from "../ParkEvents";
import ParkNews from "../ParkNews";

function ParkPage({parks, parkCode, alerts}) {
    const [campgrounds, setCampgrounds] = useState(false);
    const PARK_STATES = parks[parkCode].states;
    const PARK_NAME = parks[parkCode].fullName;
    const PARK_DSCRPT = parks[parkCode].description;
    const PARK_WEATHER_TXT = parks[parkCode].weatherInfo;

    return (
        <div className="park-page-container">
            <ParkNav parkCode={parkCode} />
            <div className="park-container">
                <div className="park-content-container">
                    <h1 className="park__name">
                        {PARK_NAME}
                    </h1>
                    <span className="park__states">
                        {`States: ${PARK_STATES}`}
                    </span>
                    <p className="park__dscrpt">
                        {PARK_DSCRPT}
                    </p>
                    <section className="park__section park__section--weather">
                        <h2 className="park__section-title">
                            WEATHER
                        </h2>
                        <p className="park__section-txt">
                            {PARK_WEATHER_TXT}
                        </p>
                    </section>
                    <ParkAlerts alerts={alerts} />
                    <ParkEvents parkCode={parkCode}/>
                    <ParkNews parkCode={parkCode} />
                </div>
                <div className="map-container">

                </div>
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
