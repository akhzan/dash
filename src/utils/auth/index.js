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
    setCookie(COOKIES.USERID, data.user_id)
    setCookie(COOKIES.PERMISSION, data.privilege)
    setCookie(COOKIES.ROLE, data.group)
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
    removeCookie(COOKIES.USERID)
    removeCookie(COOKIES.PERMISSION)
    removeCookie(COOKIES.ROLE)
  },
  getAuth: () => {
    const isAuthenticated = auth.isAuthenticated || getCookie(COOKIES.TOKEN)
    const email = auth.email || getCookie(COOKIES.EMAIL)
    const name = auth.name || getCookie(COOKIES.NAME)
    const imageUrl = auth.imageUrl || getCookie(COOKIES.IMAGE)
    const token = auth.token || getCookie(COOKIES.TOKEN)
    const permission = auth.permission || getCookie(COOKIES.PERMISSION)
    const role = auth.role || getCookie(COOKIES.ROLE)
    return { isAuthenticated, email, name, imageUrl, token, permission, role }
  },
}
