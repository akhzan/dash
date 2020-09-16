import React from 'react'
import { Button } from 'antd'
import GoogleLogin from 'react-google-login'

import AuthView from '../../layout/auth/index.view'
import { GOOGLE_LOGIN_CLIENT_ID } from '../../config/env'
import Logo from '../../assets/logo.svg'
import GoogleLogo from '../../assets/g-logo.png'

const LoginView = ({ onSuccess, onFailure, loading }) => (
  <AuthView>
    <div className="w-3/5">
      <img className="w-16 pt-6 pb-6" src={Logo} alt="" />
      <div className="text-3xl font-bold mb-6">Sign in to your account</div>
      <GoogleLogin
        clientId={GOOGLE_LOGIN_CLIENT_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        fetchBasicProfile
        render={(renderProps) => (
          <Button
            loading={loading}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            icon={
              <img className="w-6 float-left mr-2" src={GoogleLogo} alt="" />
            }>
            Sign in with Google
          </Button>
        )}
      />
    </div>
  </AuthView>
)

export default LoginView
