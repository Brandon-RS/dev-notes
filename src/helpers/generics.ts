import type { EntryType } from '@/types'

export const blankEntry: EntryType = {
  id: '',
  date: new Date().getTime(),
  text: '',
  picture: '',
}

export enum statusEnum {
  authenticating = 'authenticating',
  authenticated = 'authenticated',
  not_authenticated = 'not_authenticated',
}
