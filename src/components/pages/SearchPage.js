import React, {useState, useEffect} from 'react';
import ParkSummary from "../ParkSummary";
import { connect } from 'react-redux';

import Loader from "../Loaders/Loader";

//CONTAINER COMPONENT
function SearchPage({stateName, parksResults, isLoading}) {
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
            <ParkSummary 
                key={park.id} 
                parkNum={ind} 
                parkName={park.fullName} 
                parkDscrpt={park.description} 
                parkCode={park.parkCode}
            />
        )
    })

    return (
            <div className="search-results-container">
                {loader && <Loader isLoading={isLoading} />}
                {!isLoading && 
                    <>
                    <h1 className="state-title">{`${stateName} PARKS`}</h1>
                    {parksList}
                    </>
                }
            </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.parksData.parks.loading,
        stateName: state.appState.state,
        parksResults: state.parksData.parks.byId
    }
}

export default connect(mapStateToProps)(SearchPage)
