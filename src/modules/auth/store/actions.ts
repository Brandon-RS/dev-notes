/* eslint-disable @typescript-eslint/no-explicit-any */
import { Commit } from 'vuex'
import { UserType } from '../auth'
import authApi from '@/api/authApi'

interface commitType {
  commit: Commit
}

export const createUser = async ({ commit }: commitType, user: UserType) => {
  const { name, email, password } = user
  try {
    const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })
    const { idToken, refreshToken } = data

    await authApi.post(':update', { displayName: name, idToken })
    delete user.password
    commit('loginUser', { user, idToken, refreshToken })

    return { ok: true }
  } catch (error: any) {
    return {
      ok: false,
      message: error.response.data.error.message
    }
  }
}

export const signInUser = async ({ commit }: commitType, user: UserType) => {
  const { email, password } = user
  try {
    const { data } = await authApi.post(':signInWithPassword', { email, password, returnSecureToken: true })
    const { displayName, idToken, refreshToken } = data

    user.name = displayName
    delete user.password
    commit('loginUser', { user, idToken, refreshToken })

    return { ok: true }
  } catch (error: any) {
    return { ok: false, message: error.response.data.error.message }
  }
}

export const checkAuthentication = async ({ commit }: commitType) => {

  const idToken = localStorage.getItem('idToken')
  const refreshToken = localStorage.getItem('refreshToken')

  if (!idToken) {
    commit('logout')
    return { ok: false, message: 'Token missing' }
  }

  try {

    const { data } = await authApi.post(':lookup', { idToken })
    const { displayName: name, email } = data.users[0]
    const user = {
      name,
      email,
    }

    commit('loginUser', { user, idToken, refreshToken })
    return { ok: true }

  } catch (error: any) {
    commit('logout')
    return { ok: false, message: error.response.data.error.message }
  }

}
