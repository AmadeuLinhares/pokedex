import { create } from 'zustand'

import { State } from './types'

export const useLoading = create<State>((set) => ({
  isLoading: false,
  setLoading: (loading) => set((state) => ({ ...state, isLoading: loading })),
}))

export * from './selectors'
