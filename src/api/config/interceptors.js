import { notification } from 'antd'

import { getCookie, COOKIES } from '../../utils/cookies'
import { MENUS } from '../../config/menu'
import { PUBLIC_URL } from '../../config/url'
import { auth } from '../../utils/auth'

const getConfig = (config) => {
  const token = getCookie(COOKIES.TOKEN)
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      ...config.headers,
    }
  }
  return config
}

export const preRequestInterceptor = (config) => getConfig(config)

export const errorInterceptor = (err) => {
  const { response } = err
  if (response) {
    const { url } = response.config
    if (response.status === 401 && url.includes('user/signin')) {
      notification.error({
        message: 'Error',
        description:
          'Username or password may be incorrect, please login again',
      })
      auth.signout()
    } else if (response.status === 401) {
      notification.error({
        message: 'Error',
        description: 'Token expired, please login again',
      })
      window.setTimeout(() => {
        auth.signout()
        window.location.href = `${PUBLIC_URL}${MENUS.LOGIN}?isExpired=true`
      }, 1500)
    } else if (response.status === 403) {
      notification.error({
        message: 'Error',
        description: 'Unauthorized Action!',
      })
    } else if (response.status === 500) {
      notification.error({
        message: 'Error',
        description: response.data.error || 'Something went wrong!',
      })
    } else if (response.status === 422) {
      let description = response.data
        ? response.data.message || response.data.error
        : 'Request can not be processed'
      description = description.split('_').join(' ')
      notification.error({
        message: 'Error',
        description,
      })
    } else {
      const description = response.data
        ? response.data.message || response.data.error
        : 'Unknown error'
      notification.error({
        message: 'Error',
        description,
      })
    }
  } else {
    notification.error({
      message: 'Network Error',
      description:
        'This could be server network issue or dropped internet connection',
    })
  }
  return Promise.reject(err)
}
