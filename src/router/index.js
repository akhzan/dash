import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { PUBLIC_URL } from '../config/url'
import Login from '../pages/login'
import Home from '../pages/home'

const RouteConfig = (
  <Router basename={PUBLIC_URL}>
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
)

export default RouteConfig
