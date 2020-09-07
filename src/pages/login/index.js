import React from 'react'
import { Button } from 'antd'

import LoginImage from '../../assets/moran-eEyWZtjNvMc-unsplash.jpg'

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-3/5">
        <img className="w-full h-screen object-cover" src={LoginImage} alt="" />
      </div>
      <div className="w-2/5 p-12 flex justify-center items-center">
        <div className="w-full">
          <div className="text-3xl font-bold mb-10">Log in to your account</div>
          <Button type="primary">Log In</Button>
        </div>
      </div>
    </div>
  )
}

export default Login
