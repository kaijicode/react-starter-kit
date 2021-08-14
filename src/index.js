import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { App } from './App';
import {logger} from "./middleware/logger";
import { authReducer } from './pages/Auth/reducer';
import { authSaga } from './pages/Auth/sagas';
import { usersSaga } from './pages/Users/sagas';
import { usersReducer } from './pages/Users/reducer';


// Middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware];

// Reducers
const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer
});

// Store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

// Sagas
function* rootSaga() {
  yield all([
    authSaga(),
    usersSaga()
  ])
}
sagaMiddleware.run(rootSaga);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
