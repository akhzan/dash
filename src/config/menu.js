import { PUBLIC_URL } from './url'

export const MENUS = {
  HOME: '/',
  LOGIN: '/login',
  TABLE: '/table',
}

export const MENU_KEYS = {
  HOME: 'home',
  LOGIN: 'login',
  TABLE: 'table',
}

export const getActiveMenu = (pathname = '') => {
  const pathnameParsed = pathname.replace(PUBLIC_URL, '').split('/')
  const activeMenu = pathnameParsed.length > 1 ? pathnameParsed[1] : ''
  return activeMenu || 'home'
}
