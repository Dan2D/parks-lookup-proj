import * as types from "../constants/types";
import {setIds, getAllIds} from "../utils/apiHelpers";
import * as apiConst from "../constants/apiConstants";
import axios from 'axios';
// TODO(COMBINE ALL DATA ACTIONS INTO ONE)
const PARKS_API_KEY = process.env.PARKS_API_KEY;

export const setState = (state, stateFull) => dispatch => {
    dispatch({type: types.SET_STATE, payload: stateFull, stateAbbrev: state});
    dispatch(getStateParks(state));
}

export const setPark = parkId => dispatch => {
    dispatch({type: types.SET_PARK, payload: parkId});
    dispatch(getAlerts(parkId));
}

export const getStateParks = state => dispatch => {
    dispatch({type: types.GET_PARKS, name: 'parks'});
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
    dispatch({type: types.GET_CAMPGROUNDS, name: 'campgrounds'});
    axios.get(`https://developer.nps.gov/api/v1/campgrounds?parkCode=${parkCode}&api_key=mm2kgLr5MJWCd3o5f2XFKmepJ2bbgeHyaX3ilTfa`)
    .then(res => {
        let idObj = setIds(res.data.data, "id");
        let allIds = getAllIds(idObj);
        dispatch({
            type: types.GET_CAMPGROUNDS_SUCCESS,
            payload: idObj,
            allIds,
            name: 'campgrounds',
            parkCode
        })
    })
    .catch(err => dispatch({type: types.GET_ALERTS_FAIL, payload: err.message}));
}

export const getVCenters = parkCode => dispatch => {
    dispatch({type: types.GET_VCENTER, name: 'visitorCenters'});
    axios.get(`https://developer.nps.gov/api/v1/visitorcenters?parkCode=${parkCode}&api_key=mm2kgLr5MJWCd3o5f2XFKmepJ2bbgeHyaX3ilTfa`)
    .then(res => {
        let idObj = setIds(res.data.data, "id");
        let allIds = getAllIds(idObj);
        dispatch({
            type: types.GET_VCENTER_SUCCESS,
            payload: idObj,
            allIds,
            name: 'visitorCenters',
            parkCode
        })
    })
    .catch(err => dispatch({type: types.GET_VCENTER_FAIL, payload: err.message}));
}

export const getAlerts = parkCode => dispatch => {
    dispatch({type: types.GET_ALERTS, name: 'alerts'});
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
    dispatch({type: types.GET_EVENTS, name: 'events'});
    axios.get(`https://developer.nps.gov/api/v1/events?parkCode=${parkCode}&api_key=mm2kgLr5MJWCd3o5f2XFKmepJ2bbgeHyaX3ilTfa`)
    .then(res => {
        let idObj = setIds(res.data.data, "id");
        let allIds = getAllIds(idObj);
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
    dispatch({type: types.GET_NEWS, name: 'news'});
    axios.get(`https://developer.nps.gov/api/v1/newsreleases?parkCode=${parkCode}&api_key=mm2kgLr5MJWCd3o5f2XFKmepJ2bbgeHyaX3ilTfa`)
    .then(res => {
        let idObj = setIds(res.data.data, "id");
        let allIds = getAllIds(idObj);
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