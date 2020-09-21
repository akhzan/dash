import { METHODS, apiCall } from './config'

const url = 'v1/backend/customer'

export const customersApi = {
  get: ({ search }) => apiCall(METHODS.GET, url, { search_by: search }),
}
