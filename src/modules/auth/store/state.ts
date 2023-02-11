import type { AuthState } from '@/types'
import { statusEnum } from '@/helpers/generics'

export default (): AuthState => ({
  status: statusEnum.authenticating,
  user: null,
  idToken: null,
  refreshToken: null,
})
