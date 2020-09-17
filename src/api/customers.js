import { METHODS, apiCall } from './config'

const subUrl = 'v1/backend/customer'

export const customersApi = {
  get: (params) => apiCall(METHODS.GET, subUrl, '', params),
}
