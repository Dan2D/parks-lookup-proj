import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { handleSearchScroll } from "../../utils/genHelpers";


import SummarySection from "../SummarySection";
import MapContainer from "../MapContainer";
import Searchbar from "../searchbar/Searchbar";
import LoaderDots from "../Loaders/LoaderDots";
import Loader from "../Loaders/Loader";

// TODO(LINK PARK SUMMARY LINKS TO MAP ICONS, CLICK ON ONE AND FOCUSES ON MAP OR OPENS SUMMARY)
//CONTAINER COMPONENT
function SearchPage({stateName, stateAbb, parksResults, stateData, isLoading}) {
    const [loader, setLoader] = useState(false);
    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        if (isLoading){setLoader(true);}
        else {setShowMap(true);}
        window.addEventListener('scroll', () => handleSearchScroll());
        return window.removeEventListener('scroll', () => handleSearchScroll());
    }, [isLoading]);

    function handleParkHover(parkNum, event) {
        let marker = document.querySelector(`span.marker-${parkNum}`).parentElement;
        let tooltip = document.querySelector(`div.tooltip-${parkNum}`);
        if (event === 'enter') {   
            marker.classList.add('num-icon--hover');
            tooltip.style.display = 'block';
        }
        else {
           marker.classList.remove("num-icon--hover");
           tooltip.style.display = 'none';
        }
    }

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
                onMouseEnter={() => handleParkHover(ind + 1, 'enter')}
                onMouseLeave={() => handleParkHover(ind + 1, 'leave')}
            />
        )
    })

    return (
        <div className="search-page-container">
            {loader && <Loader isLoading={isLoading} />}
            <div className="search-results-container">
                {(isLoading && showMap) && <><h1>GETTING PARKS...</h1><LoaderDots /></>}
                {!isLoading && 
                    <>
                    <h1 className="state-title">{`${stateName} PARKS`}</h1>
                    {parksList}
                    </>
                }
            </div>
            {showMap &&
                <div className='map-section-container'>
                    <div className='map-container'>
                        {!isLoading && 
                            <MapContainer 
                            parks={parksResults} 
                            statePos={[stateData[stateAbb].lat, stateData[stateAbb].lng]} 
                            zoom={stateData[stateAbb].zoom}
                            />
                        }
                    </div>  
                    <Searchbar dropdown={false}/>
                </div>
            }
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
