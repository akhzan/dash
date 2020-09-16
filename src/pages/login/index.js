import React, { useState } from 'react'
import { notification } from 'antd'

import LoginView from './index.view'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const onSuccess = (response) => {
    setLoading(true)
    setTimeout(() => {
      console.log(response)
      setLoading(false)
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
