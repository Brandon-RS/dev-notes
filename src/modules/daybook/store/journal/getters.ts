import { EntryType, JournalType } from '@/types'

export const getEntriesByTerm = ({ entries }: { entries: EntryType[] }) => (text: string) => {
  if (text.length === 0) {
    return entries
  }
  return entries.filter(entry => entry.text.toLowerCase().includes(text.toLowerCase()))
}

export const getEntryByID = (state: JournalType) => (id: string) => {
  const entry = state.entries.find(entry => entry.id === id)
  if (!entry) return
  return { ...entry }
}
