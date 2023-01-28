import { JournalState, EntryType } from '@/types'

export const setEntries = (state: JournalState, entries: EntryType[]) => {
  state.entries = [...state.entries, ...entries]
  state.isLoading = false
}

export const updateEntry = (state: JournalState, entry: EntryType) => {
  const idx = state.entries.map(e => e.id).indexOf(entry.id)
  state.entries[idx] = entry
}

export const addEntry = (state: JournalState, entry: EntryType) => {
  state.entries.unshift(entry)
}
