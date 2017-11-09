import * as types from '../actions/actionTypes';

export default function supervisorsReducer(state = [], action){
    switch(action.types){
        case types.LOAD_SUPERVISORS_SUCCESS:
            return action.supervisors;
        default:
            return state;
    }
}