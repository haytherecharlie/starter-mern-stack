/* @flow */

/**********************************
  Import : node_modules
**********************************/
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/**********************************
  Import : Reducers
**********************************/
import * as userReducers from './user/reducers';

/**********************************
  Redux : Combine Reducers
**********************************/
const rootReducer = combineReducers({
    user: userReducers.user
});

/**********************************
  Redux : Configure Store
**********************************/
const middlewares = [];
const enhancers = [applyMiddleware(...middlewares)];
const initialState = {};
export const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(...enhancers)
);
