import * as types from "../constants/types";


let initialState = {};

const appStateReducer = (state = initialState, action) => {
    switch(action.type){
       case types.SET_STATE:
           return {
               ...state,
                   state: action.payload
           }
       case types.GET_PARKS:
           return {
               ...state,
               appState: {
                ...state.appState,
                   loading: true
               }
           }
        case types.GET_PARKS_SUCCESS:
            return {
                ...state,
                appState: {
                    ...state.appState,
                    loading: false
                }
            }
        case types.GET_PARKS_FAIL:
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