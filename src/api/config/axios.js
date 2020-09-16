import axios from 'axios'

import { preRequestInterceptor, errorInterceptor } from './interceptors'
import { METHODS } from './index'
import { API_URL } from '../../config/env'

const instance = axios.create()
instance.interceptors.request.use(preRequestInterceptor, (err) =>
  Promise.reject(err),
)
instance.interceptors.response.use((response) => response, errorInterceptor)

export const call = (
  method,
  url,
  subUrl = '',
  data = {},
  additionalConfig = {},
  additionalHeaders = {},
) => {
  const config = {
    baseURL: API_URL,
    method,
    url: `${url}${subUrl}`,
    headers: {
      'Content-Type': 'application/json',
      ...additionalHeaders,
    },
    ...additionalConfig,
  }
  if (method === METHODS.GET) {
    Object.keys(data).forEach((key) => {
      if (data[key] === null || data[key] === '') {
        delete data[key]
      }
    })
    config.params = data
  } else {
    config.data = data
  }
  return instance.request(config)
}
