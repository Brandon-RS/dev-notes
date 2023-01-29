enum statusEnum {
  authenticating = 'authenticating',
  authenticated = 'authenticated',
  not_authenticated = 'not_authenticated',
}

export default () => ({
  status: statusEnum.authenticated,
  user: null,
  idToken: null,
  refreshToken: null,
})
