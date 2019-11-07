import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';


import SummarySection from "../SummarySection";
import MapContainer from "../MapContainer";
import Loader from "../Loaders/Loader";

// TODO(ADD STATE SELECT ON SEARCH PAGE TOO)
//CONTAINER COMPONENT
function SearchPage({stateName, stateAbb, parksResults, stateData, isLoading}) {
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        if (isLoading){
            setLoader(true);
        }
    }, [isLoading])

    let parksList = [];
    Object.keys(parksResults).forEach((key, ind) => {
        let park = parksResults[key];
        parksList.push(
            <SummarySection
                key={park.id} 
                num={ind + 1} 
                title={park.fullName} 
                dscrpt={park.description} 
                type='park'
                parkCode={park.parkCode}
            />
        )
    })

    return (
        <div className="search-page-container">
            <div className="search-results-container">
                {loader && <Loader isLoading={isLoading} />}
                {!isLoading && 
                    <>
                    <h1 className="state-title">{`${stateName} PARKS`}</h1>
                    {parksList}
                    </>
                }
            </div>
            <div id="mapid">
                {!isLoading && 
                <MapContainer parks={parksResults} statePos={[stateData[stateAbb].lat, stateData[stateAbb].lng]} zoom={stateData[stateAbb].zoom}/>}
                
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.parksData.parks.loading,
        stateName: state.appState.state,
        stateAbb: state.appState.stateAbb,
        stateData: state.parksData.states.byId,
        parksResults: state.parksData.parks.byId
    }
}

export default connect(mapStateToProps)(SearchPage)
