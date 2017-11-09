import {combineReducers} from 'redux';

import questions from './questionsReducer';
import supervisors from './supervisorsReducer';

const rootReducer = combineReducers({
    questions,
    supervisors
});

export default rootReducer;