import { call, put, takeLatest } from 'redux-saga/effects';

import { authService } from "./authService";
import { fetchUserSuccess, FETCH_USER_START, fetchUserError, LOG_IN } from './actions';


export function* fetchUser() {
    try {
        const user = yield call(authService.fetch);
        yield put(fetchUserSuccess(user));
    } catch (error) {
        yield put(fetchUserError());
    }
}

export function* logIn({ payload: { username, password }}) {
    try {
        console.log('login: ', username, password);
    } catch (error) {
        console.error(error);
    }
}

export function* authSaga() {
    yield takeLatest(LOG_IN, logIn);
    yield takeLatest(FETCH_USER_START, fetchUser);
}
