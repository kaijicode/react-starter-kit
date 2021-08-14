export const FETCH_USERS_START = 'users/FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'users/FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'users/FETCH_USERS_ERROR';

export const fetchUsers = () => {
    return {
        type: FETCH_USERS_START,
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersError = () => {
    return {
        type: FETCH_USERS_ERROR,
    }
}
