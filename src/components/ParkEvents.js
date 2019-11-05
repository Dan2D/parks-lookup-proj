import React from 'react';
import { connect } from 'react-redux';
import { getEvents } from "../actions/parksDataActions";
import { formatDate } from "../utils/genHelpers";

const mapDispatchToProps = dispatch => {
    return {
        getEvents: (parkCode) => {
            return dispatch(getEvents(parkCode));
        }
    }
}

function ParkEvents({parkCode, eventPark, events, getEvents}) {
//TODO(Make into own component, getting a little messy)
    let eventsArr = [];
    if (Object.keys(events).length < 1){
        eventsArr.push(
            <div class="event__content">
                <p class="events__none">
                    There are currently no events listed for this park.
                </p>
            </div>
        )
    }
    else {
        Object.keys(events).forEach(key => {
            eventsArr.push(
                <div key={key} class="event__content card">
                    <h5 class="event__title">
                        {events[key].title}
                    </h5>
                    <span class={`event__category event__category--${(events[key].category).replace(" ", "_")}`}>
                        {events[key].category && `Category: ${events[key].category}`}
                    </span>
                    <p class="event__txt">
                        {(events[key].description).slice(3,events[key].description.length-4)}
                    </p>
                    <p class="event__dates">
                        <strong>Date</strong>: 
                        {` ${formatDate(events[key].datestart)} - ${formatDate(events[key].dateend)}`}
                    </p>
                    <p class="event__times">
                        <strong>Time</strong>: 
                        {` ${events[key].times[0].timestart} - ${events[key].times[0].timeend}`}
                    </p>
                    <p class="event__admission">
                        <strong>Admission</strong>: 
                        {` ${events[key].title.includes("Closed") ? "N/A" : events[key].isfree ? "Free" : events[key].feeinfo}`}
                    </p>
                    <h5 class="event__contact-title">
                        Contact Info
                    </h5>
                    <p class="event__contact-center">
                        {events[key].contactname}
                    </p>
                    <p class="event__contact-phone">
                        <strong>phone</strong>:
                        {` ${events[key].contacttelephonenumber}`}
                    </p>
                    <p class="event__contact-email">
                    <strong>email</strong>:
                    {` ${events[key].contactemailaddress}`}
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
            {eventsArr}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        events: state.parksData.events.byId,
        eventPark: state.parksData.events.parkCode
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkEvents)
