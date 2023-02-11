import { computed } from 'vue'
import { useStore } from 'vuex'
import type { UserType } from '../auth'

export const useAuth = () => {

  const store = useStore()

  const createUser = async (user: UserType) => {
    const resp = await store.dispatch('auth/createUser', user)
    return resp
  }

  const loginUser = async (user: UserType) => {
    const resp = await store.dispatch('auth/signInUser', user)
    return resp
  }

  const checkAuthStatus = async () => {
    const resp = await store.dispatch('auth/checkAuthentication')
    return resp
  }

  return {
    checkAuthStatus,
    createUser,
    loginUser,
    authStatus: computed(() => store.getters['auth/currentState']),
    username: computed(() => store.getters['auth/getUsername']),
    logout: () => {
      store.commit('auth/logout')
      store.commit('journal/clearEntries')
    }
  }
}
