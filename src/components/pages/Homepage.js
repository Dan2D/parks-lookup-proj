import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getParks} from "../../actions/parksDataActions";

import Hero from "../Hero";

// const mapDispatchToProps = dispatch => {
//     return {
//       getParks: (state) => {
//         dispatch(getParks(state));
//       },
//     }
//   }


function Homepage(props) {
    return (
        <div className="main-content main-content--home">
            <Hero />
        </div>
    )
}

export default Homepage
