/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Routes | Dynamic Routing
 ******************************************/

import React, { useEffect } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'

function Routes({ location: { pathname } }) {
  useEffect(() => window.notification.listening && window.notification.hide(), [pathname])

  return (
    <Switch>
      <Route exact path="/" component={} />
    </Switch>
  )
}

export default withRouter(Routes)
