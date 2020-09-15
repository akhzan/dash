import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { PUBLIC_URL } from '../config/url'
import Login from '../pages/login'
import Home from '../pages/home'
import Table from '../pages/table'
import { MENUS } from '../config/menu'

const RouteConfig = (
  <Router basename={PUBLIC_URL}>
    <div>
      <Switch>
        <Route exact path={MENUS.LOGIN} component={Login} />
        <Route exact path={MENUS.HOME} component={Home} />
        <Route exact path={MENUS.TABLE} component={Table} />
      </Switch>
    </div>
  </Router>
)

export default RouteConfig
