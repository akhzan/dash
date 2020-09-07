import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { PUBLIC_URL } from '../config/url'
import Login from '../pages/login'

const RouteConfig = (
  <Router basename={PUBLIC_URL}>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  </Router>
)

export default RouteConfig
