import { useStore } from 'vuex'
import { UserType } from '../auth'

export const useAuth = () => {

  const store = useStore()

  const createUser = async (user: UserType) => {
    console.log(user, store.state)
    // TODO: store.dispatch('auth/someFUnc', user)
  }

  return {
    createUser,
  }

}
