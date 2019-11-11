import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { handleSearchScroll, handleParkHover } from "../../utils/genHelpers";
import { setState } from "../../actions/parksDataActions";


import SummarySection from "../SummarySection";
import MapContainer from "../MapContainer";
import Searchbar from "../searchbar/Searchbar";
import LoaderDots from "../Loaders/LoaderDots";
import Loader from "../Loaders/Loader";

const mapDispatchToProps = dispatch => {
    return {
        setState: (state, stateFull) => {
            return dispatch(setState(state, stateFull));
        }
    }
}

//CONTAINER COMPONENT
function SearchPage({setState, parksResults, stateName, stateData, parksLoading, ...props}) {
    const [showLoader, setShowLoader] = useState(false);
    const [showMap, setShowMap] = useState(false);
    const PARKS = Object.keys(parksResults);
    const PARKS_LENGTH = PARKS.length;
    let stateAbb = props.match.params.stateId;
    let stateFull = stateData[stateAbb].name;

    useEffect(() => {
        (PARKS_LENGTH < 1 && stateName == null) && setState(stateAbb, stateFull);
        if (parksLoading){setShowLoader(true); setShowMap(false);}
        else {setShowMap(true);}
        window.addEventListener('scroll', () => handleSearchScroll());
        return window.removeEventListener('scroll', () => handleSearchScroll());
    }, [parksLoading, stateAbb]);

    let parksList = [];
    PARKS.forEach((key, ind) => {
        let park = parksResults[key];
        parksList.push(
            <SummarySection
                key={park.id} 
                num={ind + 1} 
                title={park.fullName} 
                dscrpt={park.description} 
                type='park'
                state={stateAbb}
                parkCode={park.parkCode}
                onMouseEnter={() => handleParkHover(ind + 1, 'enter')}
                onMouseLeave={() => handleParkHover(ind + 1, 'leave')}
            />
        )
    })

    return (
        <div className="search-page-container">
            { showLoader && <Loader isLoading={parksLoading}/> }
            <div className="search-results-container">
                {(parksLoading) && <><h1>GETTING PARKS...</h1><LoaderDots /></>}
                {!parksLoading && 
                    <>
                    <h1 className="state-title">{`${stateFull} PARKS`}</h1>
                    {parksList}
                    </>
                }
            </div>
                <div className='map-section-container'>
                    <MapContainer 
                    showMap={showMap}
                    markers={parksResults} 
                    pos={[stateData[stateAbb].lat, stateData[stateAbb].lng]} 
                    zoom={stateData[stateAbb].zoom}
                    />
                    <Searchbar dropdown={false} stateAbb={stateAbb}/>
                </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stateName: state.appState.state,
        parksLoading: state.parksData.parks.loading,
        stateData: state.parksData.states.byId,
        parksResults: state.parksData.parks.byId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
