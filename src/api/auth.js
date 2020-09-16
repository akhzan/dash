import { METHODS, apiCall } from './config'

const subUrl = 'v1/public/user/'

export const authApi = {
  login: (tokenId, username) =>
    apiCall(METHODS.POST, subUrl, 'signin', { id_token: tokenId, username }),
}
