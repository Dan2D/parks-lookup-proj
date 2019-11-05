import React from 'react';
import ParkSummary from "../ParkSummary";
import { connect } from 'react-redux';

//CONTAINER COMPONENT
function SearchPage({stateName, parksResults, appState}) {
    let parksList = [];
    Object.keys(parksResults).forEach((key, ind) => {
        let park = parksResults[key];
        parksList.push(
            <ParkSummary 
                key={park.id} 
                parkNum={ind} 
                parkName={park.fullName} 
                parkDscrpt={park.description} 
                parkCode={park.parkCode}
            />
        )
    })

    if (appState.loading){
        return <div>Loading...</div>
    } 
    return (
        <div>
            <div class="search-results-container">
                <h1 class="state-title">{`${stateName} PARKS`}</h1>
                {parksList}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        appState: state.appState,
        stateName: state.appState.state,
        parksResults: state.parksData.parks.byId
    }
}

export default connect(mapStateToProps)(SearchPage)
