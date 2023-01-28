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

export const updateEntry = async ({ commit }: { commit: Commit }, entry: EntryType) => {
  const { id, ...newEntry } = entry
  await journalApi.put(`/entries/${id}.json`, newEntry)
  commit('updateEntry', { ...entry })
}

export const createEntry = async ({ commit }: { commit: Commit }, entry: EntryType) => {
  const { id, ...newEntry } = entry
  const { data } = await journalApi.post(`/entries.json`, newEntry)
  commit('addEntry', {
    id: data.name,
    ...newEntry
  })
  return data.name
}
