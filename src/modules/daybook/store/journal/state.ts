import type { JournalState } from '@/types'

export default (): JournalState => ({
  isLoading: true,
  entries: []
})
