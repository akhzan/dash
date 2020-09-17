import { METHODS, apiCall } from './config'

const subUrl = 'v1/backend/customer'

export const customersApi = {
  get: ({ search }) => apiCall(METHODS.GET, subUrl, '', { search_by: search }),
}
