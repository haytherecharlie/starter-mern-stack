/* @flow */
/*******************************************
 * © 2018 CBC
 * ---------------------
 * React Application
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import App from './components/pages/App';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import { store } from './lib/helpers/Redux';

/*******************************************
 * STYLED COMPONENTS
/******************************************/
import reboot from './assets/styles/reboot';
import fonts from './assets/styles/fonts';
import base from './assets/styles/base';
injectGlobal`${reboot}${fonts}${base}`;

/*******************************************
 * RENDER FUNCTION
/******************************************/
ReactDOM.render(
    <Provider store={store}>
        <App>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/wow" component={NotFound} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </App>
    </Provider>
, document.getElementById('root'));