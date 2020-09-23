import React, { useEffect, useState } from 'react'
import { notification } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'

import LoginView from './index.view'
import { auth } from '../../utils/auth'
import { MENUS } from '../../config/menu'
import { authApi } from '../../api/auth'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: MENUS.HOME } }
  const query = new URLSearchParams(location.search)
  const isExpired = query.get('isExpired')
  const isLogout = query.get('isLogout')
  useEffect(() => {
    if (isExpired || isLogout) return
    const isAuthenticated = auth.getIsAuthenticated()
    if (isAuthenticated) history.replace(from)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpired, isLogout])
  const onSuccess = (response) => {
    setLoading(true)
    authApi
      .login(response.tokenId, response.profileObj.email)
      .then((res) => {
        const { token } = res.data.data
        auth.authenticate(response, token)
        setLoading(false)
        history.replace(from)
      })
      .catch(() => setLoading(false))
  }
  const onFailure = () => {
    notification.error({
      message: 'Sign In Failed',
      description: 'Something is wrong. Please sign in again.',
      duration: 3,
    })
  }
  return (
    <LoginView onSuccess={onSuccess} onFailure={onFailure} loading={loading} />
  )
}

export default Login
