import React, {useState} from 'react';
import {connect} from 'react-redux';

import ParkNav from "../ParkNav";
import ParkAlerts from "../ParkAlerts";
import ParkEvents from "../ParkEvents";
import ParkNews from "../ParkNews";

function ParkPage({parks, parkCode, alerts}) {
    const [campgrounds, setCampgrounds] = useState(false);

    return (
        <div className="park-page-container">
            <ParkNav parkCode={parkCode} />
            <div className="park-container">
                <div className="park-content-container">
                    <h1 className="park__name">
                        {parks[parkCode].fullName}
                    </h1>
                    <span className="park__states">
                        {`States: ${parks[parkCode].states}`}
                    </span>
                    <p className="park__dscrpt">
                        {parks[parkCode].description}
                    </p>
                    {parks[parkCode].weatherInfo && 
                        <>
                            <h2 className="park__section-title park__section-title--weather">
                                WEATHER
                            </h2>
                            <p className="park__section-txt">
                                {parks[parkCode].weatherInfo}
                            </p>
                        </>
                    }
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
