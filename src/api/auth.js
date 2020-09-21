import { METHODS, apiCall } from './config'

const url = 'v1/public/user'

export const authApi = {
  login: (tokenId, username) =>
    apiCall(METHODS.POST, `{${url}/signin}`, { id_token: tokenId, username }),
}
