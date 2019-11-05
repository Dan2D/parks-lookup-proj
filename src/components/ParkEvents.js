import React from 'react';
import { connect } from 'react-redux';
import { getEvents } from "../actions/parksDataActions";

const mapDispatchToProps = dispatch => {
    return {
        getEvents: (parkCode) => {
            return dispatch(getEvents(parkCode));
        }
    }
}

function ParkEvents({parkCode, events, getEvents}) {
// TODO(ADD Dates, Times, Price, Contact Info)
    let eventsArr = [];
    Object.keys(events).forEach(key => {
        eventsArr.push(
            <div key={key} class="event__content">
                <h5 class="event__title">
                    {events[key].title}
                </h5>
                <span class={`event__category event__category--${(events[key].category).replace(" ", "_")}`}>
                    {events[key].category && `Category: ${events[key].category}`}
                </span>
                <p class="event__txt">
                    {(events[key].description).slice(3,events[key].description.length-4)}
                </p>
                <a href={events[key].url} class="event__lnk" target="_blank">More Info</a>
            </div>
        )
    });

    function handleEventExpand() {
        getEvents(parkCode);
    }

    return (
        <div className='events-container'>
                <h3 class="park__section-title park__section-title--events">
                    EVENTS
                </h3>
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
        events: state.parksData.events.byId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkEvents)
