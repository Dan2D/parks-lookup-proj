import React from 'react';
import { connect } from 'react-redux';
import { getEvents } from "../actions/parksDataActions";
import Parser from 'react-html-parser';
import { formatDate } from "../utils/genHelpers";

import LoaderDots from "./Loaders/LoaderDots";

const mapDispatchToProps = dispatch => {
    return {
        getEvents: (parkCode) => {
            return dispatch(getEvents(parkCode));
        }
    }
}

function ParkEvents({parkCode, eventPark, events, getEvents, isLoading}) {
    
//TODO(Make into own component, getting a little messy)
    let eventsArr = [];
    if (Object.keys(events).length < 1){
        eventsArr.push(
            <div key="no-event" class="event__content">
                <p class="events__none">
                    There are currently no events listed for this park.
                </p>
            </div>
        )
    }
    else {
        Object.keys(events).forEach(key => {
            const EVENT_TITLE = events[key].title;
            const EVENT_CATEGORY = events[key].category;
            const EVENT_DSCRPT = events[key].description;
            const EVENT_DATE_START = events[key].datestart;
            const EVENT_DATE_END = events[key].dateend;
            const EVENT_TIME_START = events[key].times[0].timestart;
            const EVENT_TIME_END = events[key].times[0].timeend;
            const EVENT_FREE = events[key].isfree;
            const EVENT_ADMISSION = events[key].feeInfo;
            const EVENT_CONTACT_NAME = events[key].contactname;
            const EVENT_CONTACT_PHONE = events[key].contacttelephonenumber;
            const EVENT_CONTACT_EMAIL = events[key].contactemailaddress;
            eventsArr.push(
                <div key={key} class="event__content card">
                    <h5 class="event__title">
                        {EVENT_TITLE}
                    </h5>
                    <span class={`event__category event__category--${(EVENT_CATEGORY).replace(" ", "_")}`}>
                        {EVENT_CATEGORY && `Category: ${EVENT_CATEGORY}`}
                    </span>
                    <p class="event__txt">
                        {Parser(EVENT_DSCRPT)}
                    </p>    
                    <p class="event__dates">
                        <strong>Date</strong>: 
                        {` ${formatDate(EVENT_DATE_START)} - ${formatDate(EVENT_DATE_END)}`}
                    </p>
                    <p class="event__times">
                        <strong>Time</strong>: 
                        {` ${EVENT_TIME_START} - ${EVENT_TIME_END}`}
                    </p>
                    <p class="event__admission">
                        <strong>Admission</strong>: 
                        {` ${EVENT_TITLE.includes("Closed") ? "N/A" : EVENT_FREE ? "Free" : EVENT_ADMISSION}`}
                    </p>
                    <h5 class="event__contact-title">
                        Contact Info
                    </h5>
                    <p class="event__contact-center">
                        {EVENT_CONTACT_NAME}
                    </p>
                    <p class="event__contact-phone">
                        <strong>phone</strong>:
                        {` ${EVENT_CONTACT_PHONE}`}
                    </p>
                    <p class="event__contact-email">
                    <strong>email</strong>:
                    {` ${EVENT_CONTACT_EMAIL}`}
                    </p>
                </div>
            )
        });
    
    }
    
    function handleEventExpand() {
        if (parkCode === eventPark){
            return
        }
        getEvents(parkCode);
    }

    return (
        <div className='events-container'>
            <h2 class="park__section-title park__section-title--events">
                EVENTS
            </h2>
            <input type="checkbox" style={{display: "none"}} name={`btn-expand--events`} id={`btn-expand--events`} className='btn-expand btn-expand--events' />
            <label 
                htmlFor={`btn-expand--events`} 
                class="btn-expand-label btn-expand-label--events"
                onClick={() => handleEventExpand()}
                />
            {isLoading && <LoaderDots expand={true} />}
            {!isLoading && eventsArr}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.parksData.events.loading,
        events: state.parksData.events.byId,
        eventPark: state.parksData.events.parkCode
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkEvents)
