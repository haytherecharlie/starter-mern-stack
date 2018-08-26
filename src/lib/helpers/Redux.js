/* @flow */
/*******************************************
 * © 2018 CBC
 * ---------------------
 * Redux Store
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/*******************************************
 * INITIAL STATE
/******************************************/
const initialState = {
	sidebar: "closed",
}

/*******************************************
 * ACTIONS
/******************************************/
export const toggleSidebar = status => ({
	type: 'TOGGLE_SIDEBAR',
	status
})

/*******************************************
 * REDUCERS
/******************************************/
export const reducers = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_SIDEBAR':
			return { ...state, sidebar: action.status }
		default:
			return state;
	}
};

/*******************************************
 * EXPORT STORE
/******************************************/
export const store = ((initialState) => createStore(reducers, initialState, composeWithDevTools()))();
