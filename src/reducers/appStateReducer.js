import * as types from "../constants/types";


let initialState = {};

const appStateReducer = (state = initialState, action) => {
    switch(action.type){
       case types.SET_STATE:
           return {
               ...state,
                   state: action.payload,
                   stateAbb: action.stateAbbrev
           }
        case types.SET_PARK:
            return {
                ...state,
                park: action.payload,
                content: "general"
            }
        case types.GET_CAMPGROUNDS:
        return {
            ...state,
            content: "camps"
        }
        case types.GET_PARKS_FAIL:
        case types.GET_ALERTS_FAIL:
        case types.GET_EVENTS_FAIL:
        case types.GET_NEWS_FAIL:
            return {
                ...state,
                appState: {
                    ...state.appState,
                    err: action.payload
                }
                
            }
        default:
            return state
    }
} 

export default appStateReducer