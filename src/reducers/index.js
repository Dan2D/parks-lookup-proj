import {combineReducers} from 'redux';
import appStateReducer from "./appStateReducer";
import parksDataReducer from "./parksDataReducer";
// import all your reducers here

export const rootReducer = combineReducers({appState: appStateReducer, parksData: parksDataReducer});