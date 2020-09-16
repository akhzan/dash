import React, { useEffect, useState } from 'react'
import { notification } from 'antd'
import { useHistory, useLocation } from 'react-router-dom'

import LoginView from './index.view'
import { auth } from '../../utils/auth'
import { MENUS } from '../../config/menu'

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
    const { isAuthenticated } = auth.getAuth()
    if (isAuthenticated) history.replace(from)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpired, isLogout])
  const onSuccess = (response) => {
    setLoading(true)
    setTimeout(() => {
      auth.authenticate(response)
      setLoading(false)
      history.replace(from)
    }, 1000)
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
