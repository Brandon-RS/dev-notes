import type { AuthState } from '@/types'
import type { UserType } from '../auth'
import { statusEnum } from '@/helpers/generics'

interface paramType {
  user: UserType,
  idToken: string,
  refreshToken: string,
}

export const loginUser = (state: AuthState, { user, idToken, refreshToken }: paramType) => {
  if (idToken) {
    localStorage.setItem('idToken', idToken)
    state.idToken = idToken
  }
  if (refreshToken) {
    localStorage.setItem('refreshToken', refreshToken)
    state.refreshToken = refreshToken
  }
  state.user = user
  state.status = statusEnum.authenticated
}

export const logout = (state: AuthState) => {
  state.user = null
  state.idToken = null
  state.refreshToken == null
  state.status = statusEnum.not_authenticated

  localStorage.removeItem('idToken')
  localStorage.removeItem('refreshToken')
}
