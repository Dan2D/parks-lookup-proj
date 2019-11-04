import * as types from "../constants/types";
import {setIds, getAllIds} from "../utils/apiHelpers";
// import * as apiConst from "../constants/apiConstants";
import axios from 'axios';

const PARKS_API_KEY = process.env.PARKS_API_KEY;

export const setState = (state, stateFull) => dispatch => {
    console.log(stateFull, state)
    dispatch({type: types.SET_STATE, payload: stateFull, stateAbbrev: state});
    dispatch(getParks(state));
}

export const getParks = state => dispatch => {
    console.log(state);
    dispatch({type: types.GET_PARKS});
   return axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=mm2kgLr5MJWCd3o5f2XFKmepJ2bbgeHyaX3ilTfa`)
    .then(res => {
        let idObj = setIds(res.data.data);
        let allIds = getAllIds(idObj);
        dispatch({
            type: types.GET_PARKS_SUCCESS,
            payload: idObj,
            allIds
        })
    })
    .catch(err => dispatch({type: types.GET_PARKS_FAIL, payload: err.message}))
}

