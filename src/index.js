/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * React Application
 ******************************************/

/*******************************************
 * Node Modules
 ******************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/*******************************************
 * Local Imports
 ******************************************/
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import { store } from './lib/helpers/Redux';
import './assets/styles/base.scss';

/*******************************************
 * Render App To DOM
 ******************************************/
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
