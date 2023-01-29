import { AuthState } from '@/types'

export const currentState = (state: AuthState) => {
  return state.status
}

export const getUsername = (state: AuthState) => {
  return state.user?.name || ''
}
