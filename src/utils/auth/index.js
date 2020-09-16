export const auth = {
  isAuthenticated: false,
  email: '',
  name: '',
  imageUrl: '',
  authenticate: (googleResponse) => {
    auth.isAuthenticated = true
    auth.email = googleResponse.profileObj.email
    auth.name = googleResponse.profileObj.name
    auth.imageUrl = googleResponse.profileObj.imageUrl
  },
  signout: () => {
    auth.isAuthenticated = false
    auth.email = ''
    auth.name = ''
    auth.imageUrl = ''
  },
  getAuth: () => {
    const isAuthenticated = auth.isAuthenticated
    const email = auth.email
    const name = auth.name
    const imageUrl = auth.imageUrl
    return { isAuthenticated, email, name, imageUrl }
  },
}
