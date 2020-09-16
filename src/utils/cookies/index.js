import Cookies from 'js-cookie'

export const setCookie = (name, value) => {
  Cookies.set(name, value)
}

export const getCookie = (name) => Cookies.get(name)

export const removeCookie = (name) => {
  Cookies.remove(name)
}

export const COOKIES = {
  TOKEN: '_dashToken',
  EMAIL: '_dashEmail',
  NAME: '_dashName',
  IMAGE: '_dashImage',
  USERID: '_dashUserID',
  PERMISSION: '_dashPermission',
  ROLE: '_dashRole',
}
