export interface EntryType {
  id: string,
  date: string,
  text: string,
  picture?: string,
}

export interface JournalType {
  isLoading: boolean,
  entries: EntryType[]
}
