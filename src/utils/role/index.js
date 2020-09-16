import { auth } from '../auth'

export const ACCESS_RIGHTS = {
  USER: 'user',
}

export const hasAccess = (accessRightItem) => {
  const { permission } = auth.getRole()
  return permission.includes(accessRightItem)
}
