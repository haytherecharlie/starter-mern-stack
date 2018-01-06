/* @flow */

/**********************************
  Import : node_modules
**********************************/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/**********************************
  Import : Local Files
**********************************/
import {store} from './redux/store';
import './assets/scss/main.css';
import Router from './router';

/**********************************
  ReactDom : Render
**********************************/
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));
