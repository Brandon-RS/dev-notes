import { JournalState, EntryType } from '@/types'

export const setEntries = (state: JournalState, entries: EntryType[]) => {
  state.entries = [...state.entries, ...entries]
  state.isLoading = false
}

export const updateEntry = (/* state */) => {
  // TODO: description!
}

export const addEntry = (/* state */) => {
  // TODO: description!
}
