import React from 'react';
import { connect } from 'react-redux';
import Parser from 'react-html-parser';
import { formatDate } from "../utils/genHelpers";

import ExpandBtn from "./ExpandBtn";
import LoaderDots from "./Loaders/LoaderDots";

function ParkEvents({parkCode, eventPark, events, isLoading}) {
    
//TODO(Make into own component, getting a little messy)
    let eventsArr = [];
    if (Object.keys(events).length < 1){
        eventsArr.push(
            <div key="no-event" className="event__content">
                <p className="events__none">
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
                <div key={key} className="event__content card">
                    <h5 className="event__title">
                        {EVENT_TITLE}
                    </h5>
                    <span className={`event__category event__category--${(EVENT_CATEGORY).replace(" ", "_")}`}>
                        {EVENT_CATEGORY && `Category: ${EVENT_CATEGORY}`}
                    </span>
                    <p className="event__txt">
                        {Parser(EVENT_DSCRPT)}
                    </p>    
                    <p className="event__dates">
                        <strong>Date</strong>: 
                        {` ${formatDate(EVENT_DATE_START)} - ${formatDate(EVENT_DATE_END)}`}
                    </p>
                    <p className="event__times">
                        <strong>Time</strong>: 
                        {` ${EVENT_TIME_START} - ${EVENT_TIME_END}`}
                    </p>
                    <p className="event__admission">
                        <strong>Admission</strong>: 
                        {` ${EVENT_TITLE.includes("Closed") ? "N/A" : EVENT_FREE ? "Free" : EVENT_ADMISSION}`}
                    </p>
                    <h5 className="event__contact-title">
                        Contact Info
                    </h5>
                    <p className="event__contact-center">
                        {EVENT_CONTACT_NAME}
                    </p>
                    <p className="event__contact-phone">
                        <strong>phone</strong>:
                        {` ${EVENT_CONTACT_PHONE}`}
                    </p>
                    <p className="event__contact-email">
                    <strong>email</strong>:
                    {` ${EVENT_CONTACT_EMAIL}`}
                    </p>
                </div>
            )
        });
    
    }
    return (
        <div className='events-container'>
            <h2 className="park__section-title park__section-title--events">
                EVENTS
            </h2>
            <ExpandBtn inputId='--events' labelId={1}/>
            {isLoading && <LoaderDots isLoading={isLoading} expand={true} />}
            {!isLoading && eventsArr}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.parksData.events.loading,
        events: state.parksData.events.byId,
    }
}

export default connect(mapStateToProps, null)(ParkEvents)
