export interface EntryType {
  id: string,
  date: string,
  text: string,
  picture?: string,
}

export interface JournalState {
  isLoading: boolean,
  entries: EntryType[]
}

export interface State {
  journal: JournalState
}
