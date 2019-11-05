import * as types from "../constants/types";
import {setIds, getAllIds} from "../utils/apiHelpers";
import * as apiConst from "../constants/apiConstants";
import axios from 'axios';

const PARKS_API_KEY = process.env.PARKS_API_KEY;

export const setState = (state, stateFull) => dispatch => {
    dispatch({type: types.SET_STATE, payload: stateFull, stateAbbrev: state});
    dispatch(getStateParks(state));
}

export const getStateParks = state => dispatch => {
    dispatch({type: types.GET_PARKS});
   return axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=mm2kgLr5MJWCd3o5f2XFKmepJ2bbgeHyaX3ilTfa`)
    .then(res => {
        let idObj = setIds(res.data.data, "park");
        let allIds = getAllIds(idObj);
        dispatch({
            type: types.GET_PARKS_SUCCESS,
            payload: idObj,
            allIds,
            name: 'parks'
        })
    })
    .catch(err => dispatch({type: types.GET_PARKS_FAIL, payload: err.message}))
}

export const getCampgrounds = parkCode => dispatch => {
    dispatch({type: types.GET_CAMPGROUNDS});
    axios.get(`https://developer.nps.gov/api/v1/campgrounds?parkCode=${parkCode}&api_key=mm2kgLr5MJWCd3o5f2XFKmepJ2bbgeHyaX3ilTfa`)
    .then(res => {
        console.log(res.data.data);
    })
}

export const getParkData = (parkCode, dataType) => dispatch => {
    axios.get(`https://developer.nps.gov/api/v1/${dataType}?parkCode=${parkCode}&api_key=mm2kgLr5MJWCd3o5f2XFKmepJ2bbgeHyaX3ilTfa`)
    .then(res => {
        console.log(res.data.data);
    })
}

export const setPark = parkId => dispatch => {
    dispatch({type: types.SET_PARK, payload: parkId});
    dispatch(getAlerts(parkId));
}

export const getAlerts = parkCode => dispatch => {
    dispatch({type: types.GET_ALERTS});
    axios.get(`https://developer.nps.gov/api/v1/alerts?parkCode=${parkCode}&api_key=mm2kgLr5MJWCd3o5f2XFKmepJ2bbgeHyaX3ilTfa`)
    .then(res => {
        let idObj = setIds(res.data.data, "id");
        let allIds = getAllIds(idObj);
        dispatch({
            type: types.GET_ALERTS_SUCCESS,
            payload: idObj,
            allIds,
            name: 'alerts'
        })
    })
    .catch(err => dispatch({type: types.GET_ALERTS_FAIL, payload: err.message}));
}

export const getEvents = parkCode => dispatch => {
    console.log("EVENTS", parkCode)
    dispatch({type: types.GET_EVENTS});
    axios.get(`https://developer.nps.gov/api/v1/events?parkCode=${parkCode}&api_key=mm2kgLr5MJWCd3o5f2XFKmepJ2bbgeHyaX3ilTfa`)
    .then(res => {
        let idObj = setIds(res.data.data, "id");
        let allIds = getAllIds(idObj);
        console.log(idObj, allIds)
        dispatch({
            type: types.GET_EVENTS_SUCCESS,
            payload: idObj,
            allIds,
            name: 'events',
            parkCode
        })
    })
    .catch(err => dispatch({type: types.GET_EVENTS_FAIL, payload: err.message}))
}

export const getNews = parkCode => dispatch => {
    console.log("NEWS", parkCode)
    dispatch({type: types.GET_NEWS});
    axios.get(`https://developer.nps.gov/api/v1/newsreleases?parkCode=${parkCode}&api_key=mm2kgLr5MJWCd3o5f2XFKmepJ2bbgeHyaX3ilTfa`)
    .then(res => {
        let idObj = setIds(res.data.data, "id");
        let allIds = getAllIds(idObj);
        console.log(idObj, allIds)
        dispatch({
            type: types.GET_NEWS_SUCCESS,
            payload: idObj,
            allIds,
            name: 'news',
            parkCode
        })
    })
    .catch(err => dispatch({type: types.GET_NEWS_FAIL, payload: err.message}))
}