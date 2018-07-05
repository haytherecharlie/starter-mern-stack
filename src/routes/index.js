/* @flow */
/*******************************************
 * © 2018 Charlie Hay
 * ---------------------
 * REACT ROUTER
/******************************************/

/*******************************************
 * NODE_MODULES
/******************************************/
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/*******************************************
 * LOCAL IMPORTS
/******************************************/
import Home from '../views/Home';
import NotFound from '../views/NotFound';

/*******************************************
 * REACT COMPONENT
/******************************************/
export default class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="*" component={NotFound} />
            </Switch>
        )
    }
}
