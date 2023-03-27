import { useQuery, UseQueryOptions } from 'react-query'

import { api } from '@/api'
import { parseResponseData } from '@/api/parseResponse'
import { GetPokemonById } from '@/services/useGetSearchPokemonById/types'

import { createUseGetSearchPokemonByIdKey } from './keys'

export function useGetSearchPokemonById(
  id: string,
  options?: UseQueryOptions<GetPokemonById>,
) {
  return useQuery<GetPokemonById>(
    createUseGetSearchPokemonByIdKey(id),
    () => api.get<GetPokemonById>(`/pokemon/${id}`).then(parseResponseData),
    options,
  )
}
