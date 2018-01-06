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
import configureStore from './redux/store';
import './assets/scss/main.css';
import Router from './router';

/**********************************
  ReactDom : Render
**********************************/
ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
