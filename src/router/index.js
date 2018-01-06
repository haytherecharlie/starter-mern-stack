import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NoMatch from '../components/NoMatch';

class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route component={NoMatch} />
            </Switch>
        )
    }
}

export default Router;
