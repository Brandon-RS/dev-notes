import { createStore } from 'vuex'
import { State } from '@/types'
import journal from '@/modules/daybook/store/journal'
import auth from '@/modules/auth/store'

const store = createStore<State>({
  modules: {
    journal,
    auth,
  }
})

export default store
