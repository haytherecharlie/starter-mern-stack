
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * Redux Store
/******************************************/

/*******************************************
 * Node Modules
/******************************************/
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/*******************************************
 * INITIAL STATE
/******************************************/
const initialState = {
}

/*******************************************
 * ACTION TYPES
/******************************************/
const ACTION = 'ACTION'

/*******************************************
 * ACTIONS
/******************************************/
export const action = status => ({
	type: ACTION,
})

/*******************************************
 * REDUCERS
/******************************************/
export const reducers = (state = initialState, action) => {
	switch (action.type) {
		case ACTION:
			return { ...state }
		default:
			return state;
	}
};

/*******************************************
 * EXPORT STORE
/******************************************/
export const store = (initialState =>
    createStore(reducers, initialState, composeWithDevTools())
)();
