import React from 'react'
import { Link } from 'react-router-dom'

import Img from '../../assets/undraw_road_sign_mfpo.svg'
import { MENUS } from '../../config/menu'

const NotFound = () => (
  <div className="w-full h-screen flex flex-col justify-center items-center">
    <img className="w-1/3" src={Img} alt="" />
    <p className="mt-16 mb-4 text-3xl">
      The page you&apos;re looking for is not found
    </p>
    <Link to={MENUS.HOME}>Back to Home</Link>
  </div>
)

export default NotFound
