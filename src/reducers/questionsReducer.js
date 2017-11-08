export default function questionsReducer(state = [], action) {
    switch(action.type){
        case 'CREATE_QUESTION':
            return [
                ...state,
                Object.assign({}, action.question)
            ];
        default:
            return state;
    }
}