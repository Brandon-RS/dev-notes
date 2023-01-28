import journalApi from '@/api/journal.api'
import { Commit } from 'vuex'
import { EntryType } from '@/types'

export const loadEntries = async ({ commit }: { commit: Commit }) => {
  const { data } = await journalApi.get('/entries.json')
  const entries: EntryType[] = []
  for (const id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id]
    })
  }
  commit('setEntries', entries)
}

export const updateEntry = async (/* { commit } */) => {
  // TODO: description!
}

export const createEntry = async (/* { commit } */) => {
  // TODO: description!
}
