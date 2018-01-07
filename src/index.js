/* @flow */
/*******************************************
 * 
 * ---------------------
 * REACT APPLICATION
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import configureStore from './redux/store';
import './assets/scss/main.css';
import Router from './router';

/*******************************************
 * RENDER FUNCTION
/******************************************/
ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));
