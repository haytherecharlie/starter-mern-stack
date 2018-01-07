/* @flow */
/*******************************************
 * 
 * ---------------------
 * REACT ROUTER
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import * as userReducers from './user/reducers';

/*******************************************
 * VARIABLES 
/******************************************/
const rootReducer = combineReducers({
    user: userReducers.user
});

/*******************************************
 * CONFIGURE STORE FUNCTION
/******************************************/
const configureStore = (initialState = {}) => {

    // Middlewares
    const middlewares = [];

    // Enhancers
    const enhancers = [applyMiddleware(...middlewares)]

    // Create Store
    const store = createStore(rootReducer, initialState, composeWithDevTools(...enhancers))
    store.asyncReducers = {} // Async reducer registry

    // Return Store
    return store

}

/*******************************************
 * EXPORT
/******************************************/
export default configureStore;
