import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

function ParksSummaryPage({states}) {
    let parksList = [];
    Object.keys(states).forEach((key) => {
        let linkList = [];
            Object.keys(states[key].parks).forEach((parkKey) => {
                linkList.push(
                    <Link to={`/state/${key}/parks/${states[key].parks[parkKey].parkCode}`} className='parks-summary__lnk'>
                        {states[key].parks[parkKey].name}
                    </Link>
                )
            })
            parksList.push(
            <div className='parks-summary__state-divider'>
                <h3 className='parks-summary__name'>{states[key].name}</h3>
                {linkList}
            </div>
            )
    })
    return (
        <div className='parks-summary-container'>
            {parksList}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        states: state.parksData.states.byId
    }
}

export default connect(mapStateToProps)(ParksSummaryPage)
