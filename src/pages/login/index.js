import React from 'react'
import LoginView from './index.view'

const Login = () => {
  const onFinish = (values) => {
    console.log(values)
  }
  return <LoginView onFinish={onFinish} />
}

export default Login
