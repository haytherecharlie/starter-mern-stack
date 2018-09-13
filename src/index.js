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
import { injectGlobal } from 'styled-components';

/*******************************************
 * Local Imports
 ******************************************/
import App from './components/pages/App';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import { store } from './lib/helpers/Redux';
import { reboot, fonts, base } from './assets/styles/base';

/*******************************************
 * Styled Components
 ******************************************/
injectGlobal`${reboot}${fonts}${base}`;

/*******************************************
 * Render App To DOM
 ******************************************/
ReactDOM.render(
    <Provider store={store}>
        <App>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </App>
    </Provider>
, document.getElementById('root'));