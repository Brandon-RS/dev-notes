import store from '@/store'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

type rln = RouteLocationNormalized
type ngn = NavigationGuardNext

export const isAuthenticatedGuard = async (to: rln, from: rln, next: ngn) => {

  const { ok } = await store.dispatch('auth/checkAuthentication')

  if (ok) next()
  else next({ name: 'login' })
}
