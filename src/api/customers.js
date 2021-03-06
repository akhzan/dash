import { METHODS, apiCall } from './config'

const url = 'v1/backend/customer'

export const customersApi = {
  get: ({ page, search, status }) =>
    apiCall(METHODS.GET, url, { search_by: search, status, page }),
}
