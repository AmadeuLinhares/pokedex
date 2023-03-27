import type { State } from './types'

export const selectSetLoading = (state: State) => state.setLoading
export const selectLoading = (state: State) => state.isLoading
