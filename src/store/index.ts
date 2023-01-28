import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal'
import { State } from '@/types'

const store = createStore<State>({
  modules: {
    journal,
  }
})

export default store
