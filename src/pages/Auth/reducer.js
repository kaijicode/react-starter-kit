import { FETCH_USER_SUCCESS } from './actions';


export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
