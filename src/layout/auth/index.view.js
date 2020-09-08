import React from 'react'

import LoginImage from '../../assets/auth_bg.jpg'

const AuthView = ({ children }) => (
  <div className="flex h-screen">
    <div className="w-3/5">
      <img className="w-full h-screen object-cover" src={LoginImage} alt="" />
    </div>
    <div className="w-2/5 flex justify-center items-center">{children}</div>
  </div>
)

export default AuthView
