import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {setState, getEvents, getNews, getCampgrounds, getVCenters, setPark } from "../../actions/parksDataActions";
import { formatCoord, handleSearchScroll } from "../../utils/genHelpers";

import ParkNav from "../ParkNav";
import ParkCamps from "../ParkCamps";
import ParkVC from "../ParkVCenters";
import ParkAlerts from "../ParkAlerts";
import ParkEvents from "../ParkEvents";
import ParkNews from "../ParkNews";
import MapContainer from "../MapContainer";
import Loader from "../Loaders/Loader";

const mapDispatchToProps = dispatch => {
    return {
        setState: (state, stateFull) => {
            return dispatch(setState(state, stateFull));
        },
        setPark: (parkCode) => {
            return dispatch(setPark(parkCode));
        },
        getEvents: (parkCode) => {
            return dispatch(getEvents(parkCode));
        },
        getNews: (parkCode) => {
            return dispatch(getNews(parkCode));
        },
        getCampgrounds: (parkCode) => {
            return dispatch(getCampgrounds(parkCode));
        },
        getVCenters: (parkCode) => {
            return dispatch(getVCenters(parkCode));
        }
    }
}

function ParkPage({isLoading, parks,  camps, vCenters, parkContent, alerts, stateData, setState, setPark, getEvents, getNews, getCampgrounds, getVCenters, ...props}) {
    let parkCode = props.match.params.parkId;
    let state = props.match.params.stateId;
    const [content, setContent] = useState("general");
    const PARKS_LENGTH = Object.keys(parks).length;
 
    useEffect(() => {
        if(PARKS_LENGTH < 1) {
            setState(state, stateData[state].name);
            setPark(parkCode);
        }
        props.eventPark !== parkCode && getEvents(parkCode);
        props.newsPark !== parkCode && getNews(parkCode);
        props.campsPark !== parkCode && getCampgrounds(parkCode);
        props.vcPark !== parkCode && getVCenters(parkCode);
        if (props.match.params.content){
            let content = props.match.params.content;
            content === 'campgrounds' ? setContent('camps') : setContent('vc');
        }
        window.addEventListener('scroll', () => handleSearchScroll());
        return window.removeEventListener('scroll', () => handleSearchScroll());
    }, [props.match.params])

 
    if (PARKS_LENGTH < 1){
        return <Loader isLoading={PARKS_LENGTH < 1}/>
    }
    
    let mapContent = content !== 'camps' ? vCenters : camps;
    const PARK_STATES = parks[parkCode].states;
    const PARK_NAME = parks[parkCode].fullName;
    const PARK_DSCRPT = parks[parkCode].description;
    const PARK_WEATHER_TXT = parks[parkCode].weatherInfo;

    function handleNavClick(navContent) {
        setContent(navContent);
    }

    return (
        <div className="park-page-container">
            <ParkNav parkCode={parkCode} state={state} onClick={(navContent) => handleNavClick(navContent)}/>
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
                    {content === 'camps' && <ParkCamps parkCode={parkCode} />}
                    {content === 'vc' && <ParkVC parkCode={parkCode} />}
                </div>
                <div className='map-section-container'>
                    <div className='map-container'>
                        
                        <MapContainer 
                            showMap={true}
                            markers={mapContent} 
                            pos={formatCoord(parks[parkCode].latLong)} 
                            zoom={8}
                        /> 
                    </div>  
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    const PARK_DATA = state.parksData;
    const APP = state.appState;
    return {
        stateData: PARK_DATA.states.byId,
        isLoading: PARK_DATA.parks.loading,
        parkContent: APP.content,
        parkCode: APP.park,
        parks: PARK_DATA.parks.byId,
        alerts: PARK_DATA.alerts.byId,
        camps: PARK_DATA.campgrounds.byId,
        vCenters: PARK_DATA.visitorCenters.byId,
        eventPark: PARK_DATA.events.parkCode,
        newsPark: PARK_DATA.news.parkCode,
        campsPark: PARK_DATA.campgrounds.parkCode,
        vcPark: PARK_DATA.visitorCenters.parkCode
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkPage)
