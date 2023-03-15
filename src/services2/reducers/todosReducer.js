import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from '../constraints/todosConstraints';

const inistalState = {
    isLoading: false,
    todos: [],
    error: ''
};

export const todosReducer = (state = inistalState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                isLoading: false,
                error: null
            };
        case GET_TODOS_FAILED:
            return {
                ...state,
                error: action.payload,
                todos: [],
                isLoading: false
            };
        default:
            return state;
    }
};
