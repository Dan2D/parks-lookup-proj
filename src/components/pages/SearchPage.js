import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

// import ParkSummary from "../ParkSummary";
import SummarySection from "../SummarySection";
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
