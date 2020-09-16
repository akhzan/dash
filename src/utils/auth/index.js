import decode from 'jwt-decode'

import { COOKIES, getCookie, removeCookie, setCookie } from '../cookies'

export const auth = {
  isAuthenticated: false,
  email: '',
  name: '',
  imageUrl: '',
  token: '',
  userId: '',
  permission: '',
  role: '',
  authenticate: (googleResponse, token) => {
    const data = decode(token)
    auth.isAuthenticated = true
    auth.email = googleResponse.profileObj.email
    auth.name = googleResponse.profileObj.name
    auth.imageUrl = googleResponse.profileObj.imageUrl
    auth.token = token
    auth.userId = data.user_id
    auth.permission = data.privilege
    auth.role = data.group
    setCookie(COOKIES.EMAIL, googleResponse.profileObj.email)
    setCookie(COOKIES.NAME, googleResponse.profileObj.name)
    setCookie(COOKIES.IMAGE, googleResponse.profileObj.imageUrl)
    setCookie(COOKIES.TOKEN, token)
  },
  signout: () => {
    auth.isAuthenticated = false
    auth.email = ''
    auth.name = ''
    auth.imageUrl = ''
    auth.token = ''
    auth.userId = ''
    auth.permission = ''
    auth.role = ''
    removeCookie(COOKIES.EMAIL)
    removeCookie(COOKIES.NAME)
    removeCookie(COOKIES.IMAGE)
    removeCookie(COOKIES.TOKEN)
  },
  getAuth: () => {
    const isAuthenticated = auth.isAuthenticated || getCookie(COOKIES.TOKEN)
    const email = auth.email || getCookie(COOKIES.EMAIL)
    const name = auth.name || getCookie(COOKIES.NAME)
    const imageUrl = auth.imageUrl || getCookie(COOKIES.IMAGE)
    const token = auth.token || getCookie(COOKIES.TOKEN)
    let permission = auth.permission
    let role = auth.role
    let userId = auth.userId
    if (!(permission && role && userId)) {
      const data = decode(token)
      userId = data.user_id
      permission = data.privilege
      role = data.group
    }
    auth.isAuthenticated = isAuthenticated
    auth.email = email
    auth.name = name
    auth.imageUrl = imageUrl
    auth.token = token
    auth.userId = userId
    auth.permission = permission
    auth.role = role
    return {
      isAuthenticated,
      email,
      name,
      imageUrl,
      token,
      permission,
      role,
      userId,
    }
  },
}
