/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Routes | Dynamic Routing
 ******************************************/

import React, { useEffect } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import Home from '../../components/pages/Home/Home'

function Routes({ location: { pathname } }) {
  useEffect(() => window.notification.listening && window.notification.hide(), [pathname])

  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default withRouter(Routes)
