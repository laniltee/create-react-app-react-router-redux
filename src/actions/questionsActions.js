import * as types from '../actions/actionTypes';

export function createQuestion(question) {
    return {
        type: types.CREATE_QUESTION,
        question
    };
}