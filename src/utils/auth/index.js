import decode from 'jwt-decode'

import { COOKIES, getCookie, removeCookie, setCookie } from '../cookies'

export const auth = {
  email: '',
  name: '',
  imageUrl: '',
  token: '',
  userId: '',
  permission: '',
  role: '',
  authenticate: (googleResponse, token) => {
    const data = decode(token)
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
  getIsAuthenticated: () => !!auth.getToken(),
  getToken: () => {
    const token = auth.token || getCookie(COOKIES.TOKEN)
    auth.token = token
    if (!token) auth.signout()
    return token
  },
  getRole: () => {
    let permission = auth.permission
    let role = auth.role
    let userId = auth.userId
    if (!role) {
      const token = auth.token || getCookie(COOKIES.TOKEN)
      const data = token ? decode(token) : {}
      userId = data.user_id || ''
      permission = data.privilege || ''
      role = data.group || ''
    }
    auth.userId = userId
    auth.permission = permission
    auth.role = role
    return { userId, permission, role }
  },
  getInfo: () => {
    const email = auth.email || getCookie(COOKIES.EMAIL)
    const name = auth.name || getCookie(COOKIES.NAME)
    const imageUrl = auth.imageUrl || getCookie(COOKIES.IMAGE)
    auth.email = email
    auth.name = name
    auth.imageUrl = imageUrl
    return { email, name, imageUrl }
  },
}
