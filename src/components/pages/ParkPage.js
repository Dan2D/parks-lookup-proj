import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { getEvents, getNews, getCampgrounds } from "../../actions/parksDataActions";

import ParkNav from "../ParkNav";
import ParkCamps from "../ParkCamps";
import ParkAlerts from "../ParkAlerts";
import ParkEvents from "../ParkEvents";
import ParkNews from "../ParkNews";

const mapDispatchToProps = dispatch => {
    return {
        getEvents: (parkCode) => {
            return dispatch(getEvents(parkCode));
        },
        getNews: (parkCode) => {
            return dispatch(getNews(parkCode));
        },
        getCampgrounds: (parkCode) => {
            return dispatch(getCampgrounds(parkCode));
        }
    }
}
//GETTING ALL PARK CONTENT AT ONCE, BUT ONLY REVEAL WHEN USER CLICKS, NO LOAD TIME!
//ALSO MAKE SURE ONLY GET DATA WHEN PARKCODE DOESN'T MATCH
function ParkPage({parks, parkCode, parkContent, alerts, getEvents, getNews, getCampgrounds, ...props}) {
    const PARK_STATES = parks[parkCode].states;
    const PARK_NAME = parks[parkCode].fullName;
    const PARK_DSCRPT = parks[parkCode].description;
    const PARK_WEATHER_TXT = parks[parkCode].weatherInfo;
    const [content, setContent] = useState("general");

    useEffect(() => {
        props.eventPark !== parkCode && getEvents(parkCode);
        props.newsPark !== parkCode && getNews(parkCode);
        props.campsPark !== parkCode && getCampgrounds(parkCode);
        if (props.match.params.parkId.includes("campgrounds")){
            setContent("camps")
        }
        else if (props.match.params.parkId.includes("vcenters")){
            setContent("vcenters");
        }
    }, [props.match.params.parkId])

    function handleNavClick(navContent) {
        setContent(navContent);
    }

    return (
        <div className="park-page-container">
            <ParkNav parkCode={parkCode} onClick={(navContent) => handleNavClick(navContent)}/>
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
                    {content === "general" &&
                        <> 
                            <ParkAlerts alerts={alerts} />
                            <ParkEvents parkCode={parkCode}/>
                            <ParkNews parkCode={parkCode} />
                        </>
                    }
                    {content === "camps" && <ParkCamps parkCode={parkCode} />}
                </div>
                <div className="map-container">

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const PARK_DATA = state.parksData;
    const APP = state.appState;
    return {
        parkContent: APP.content,
        parkCode: APP.park,
        parks: PARK_DATA.parks.byId,
        alerts: PARK_DATA.alerts.byId,
        eventPark: PARK_DATA.events.parkCode,
        newsPark: PARK_DATA.news.parkCode,
        campsPark: PARK_DATA.campgrounds.parkCode
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkPage)
