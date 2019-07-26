import { FETCH_DATA_FAILURE, 
FETCH_DATA_SUCCESS, 
FETCH_DATA_START, 
ADD_SMURF_SUCCESS, 
ADD_SMURF_START, 
ADD_SMURF_FAILURE } from "../actions";

const initialState = {
    characters: [],
    fetching: false,
    error: '',
}

export const smurfCharReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                fetching: true,
                error: '',
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: '',
                // my axios call
                characters: action.payload
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        case ADD_SMURF_START:
            return{
                ...state,
                fetching: true,
                error: '',
            }
        case ADD_SMURF_SUCCESS:
        return{
            ...state,
            fetching: false,
            error: '',
            smurfs: action.payload,
        }
        case ADD_SMURF_FAILURE:
        return{
            ...state,
            error: action.paylaod
        }
            default:
                return state;
    }
};