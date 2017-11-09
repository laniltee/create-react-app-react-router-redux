import * as types from './actionTypes';

export function loadSupervisorsSuccess(supervisors){
  return {
    type: types.LOAD_SUPERVISORS_SUCCESS,
    supervisors
  }
}

export function loadSupervisors(){

}

