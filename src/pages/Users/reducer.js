import { FETCH_USERS_ERROR, FETCH_USERS_START, FETCH_USERS_SUCCESS } from './actions';

const initialState = {
    users: [],
    isLoading: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_START: {
            return { ...state, isLoading: true };
        }

        case FETCH_USERS_ERROR: {
            return { ...state, isLoading: false };
        }

        case FETCH_USERS_SUCCESS: {
            return { ...state, users: action.payload, isLoading: false };
        }

        default:
            return state;
    }
}
