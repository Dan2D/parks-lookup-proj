import * as types from "../constants/types";

// TODO(ADD FAIL CONDITION)
let initialState = {};

const parksDataReducer = (state = initialState, action) => {
    switch(action.type){
       case types.GET_PARKS:
       case types.GET_CAMPGROUNDS:
       case types.GET_VCENTER:
       case types.GET_ALERTS:
       case types.GET_EVENTS:
       case types.GET_NEWS:
           return {
               ...state,
               [action.name]: {
                   ...state[action.name],
                   loading: true
               }
           }
       case types.GET_PARKS_SUCCESS:
       case types.GET_ALERTS_SUCCESS: 
           return {
                ...state,
                [action.name]: {
                    byId: action.payload,
                    allIds: action.allIds,
                    loading: false
                }
               }
        case types.GET_CAMPGROUNDS_SUCCESS:
        case types.GET_VCENTER_SUCCESS:
        case types.GET_EVENTS_SUCCESS:
        case types.GET_NEWS_SUCCESS:
            return {
                ...state,
                [action.name]: {
                    byId: action.payload,
                    allIds: action.allIds,
                    parkCode: action.parkCode,
                    loading: false
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