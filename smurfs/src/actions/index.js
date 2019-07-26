import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_START = "DD_SMURF_START";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START});
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res, "res data")
            dispatch({ type: FETCH_DATA_SUCCESS,
            payload: res.data
            });
        })
        .catch((error) => {
            dispatch({
                type: FETCH_DATA_FAILURE,
                payload: error
            })
        })
export const addSmurfs = () => dispatch => {
    dispatch({type: ADD_SMURF_START});
    axios
        .post("http://localhost:3333/smurfs")
        .then(res=> {
            dispatch({
                type: ADD_SMURF_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => dispatch({ 
            type: ADD_SMURF_FAILURE, 
            payload: error
    }))
}
}