import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PrivateRoute from './private'
import { PUBLIC_URL } from '../config/url'
import Login from '../pages/login'
import Home from '../pages/home'
import Table from '../pages/table'
import { MENUS } from '../config/menu'

const RouteConfig = (
  <Router basename={PUBLIC_URL}>
    <Switch>
      <Route exact path={MENUS.LOGIN} component={Login} />
      <PrivateRoute exact path={MENUS.HOME}>
        <Home />
      </PrivateRoute>
      <PrivateRoute exact path={MENUS.TABLE}>
        <Table />
      </PrivateRoute>
    </Switch>
  </Router>
)

export default RouteConfig
