import { UserType } from './modules/auth/auth'
export interface EntryType {
  id: string,
  date: string | number,
  text: string,
  picture?: string,
}

export interface JournalState {
  isLoading: boolean,
  entries: EntryType[]
}

export interface AuthState {
  status: enum,
  user: UserType | null,
  idToken: string | null,
  refreshToken: string | null,
}

export interface State {
  journal: JournalState,
  auth: AuthState,
}
