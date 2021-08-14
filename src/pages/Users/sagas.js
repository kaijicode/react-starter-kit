import { call, put, takeLatest } from 'redux-saga/effects';

import { usersService } from "./usersService";
import { FETCH_USERS_START, fetchUsersError, fetchUsersSuccess } from './actions';


export function* fetchUsers() {
    try {
        const user = yield call(usersService.fetch);
        yield put(fetchUsersSuccess(user));
    } catch (error) {
        yield put(fetchUsersError());
    }
}


export function* usersSaga() {
    yield takeLatest(FETCH_USERS_START, fetchUsers);
}
