import * as types from "../constants/types";


let initialState = {};

const parksDataReducer = (state = initialState, action) => {
    switch(action.type){
       case types.GET_PARKS_SUCCESS:
           return {
                ...state,
                parks: {
                    byId: action.payload,
                    allIds: action.allIds
                }
               }
        case types.GET_PARKS_FAIL:
            return {
                ...state,
                parks: null,
            }
        default:
            return state
    }
} 

export default parksDataReducer