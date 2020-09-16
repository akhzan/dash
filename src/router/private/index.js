import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { MENUS } from '../../config/menu'
import { auth } from '../../utils/auth'

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = auth.getAuth()
  console.log(auth.getAuth(), isAuthenticated)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: MENUS.LOGIN, state: { from: location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
