/* @flow */
/*******************************************
 * 
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
import Landing from '../containers/Landing';
import NoMatch from '../containers/NoMatch';

/*******************************************
 * REACT COMPONENT
/******************************************/
class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="*" component={NoMatch} />
            </Switch>
        )
    }
}

/*******************************************
 * EXPORT
/******************************************/
export default Router;
