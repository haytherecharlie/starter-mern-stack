/* @flow */
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * Routes
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import Login from '../views/Login';
import NotFound from '../views/NotFound';

/*******************************************
 * REACT COMPONENT
/******************************************/
export default class Routes extends React.PureComponent {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="*" component={NotFound} />
            </Switch>
        )
    }
}
