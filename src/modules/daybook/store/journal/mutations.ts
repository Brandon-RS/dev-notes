import type { JournalState, EntryType } from '@/types'

export const setEntries = (state: JournalState, entries: EntryType[]) => {
  state.entries = [...entries]
  state.isLoading = false
}

export const updateEntry = (state: JournalState, entry: EntryType) => {
  const idx = state.entries.map(e => e.id).indexOf(entry.id)
  state.entries[idx] = entry
}

export const addEntry = (state: JournalState, entry: EntryType) => {
  state.entries.unshift(entry)
}

export const removeEntry = (state: JournalState, id: string) => {
  const idx = state.entries.map(e => e.id).indexOf(id)
  state.entries.splice(idx, 1)
}

export const clearEntries = (state: JournalState) => {
  state.entries = []
}
