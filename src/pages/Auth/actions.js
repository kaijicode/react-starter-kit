export const FETCH_USER_START = 'auth/FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'auth/FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'auth/FETCH_USER_ERROR';
export const LOG_IN = 'auth/LOG_IN';

export const fetchUser = () => {
    return {
        type: FETCH_USER_START,
    }
}

export const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}

export const fetchUserError = () => {
    return {
        type: FETCH_USER_ERROR,
    }
}

export const logIn = (username, password) => {
    return {
        type: LOG_IN,
        payload: { username, password }
    }
}
