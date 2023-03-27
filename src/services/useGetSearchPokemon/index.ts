import { useQuery, UseQueryOptions } from 'react-query'

import { api } from '@/api'
import { parseResponseData } from '@/api/parseResponse'
import { GetPokemonByName } from '@/services/useGetSearchPokemon/types'

import { createUseGetSearchPokemonByNameKey } from './keys'

export function useGetSearchPokemon(
  keyWord: string,
  options?: UseQueryOptions<GetPokemonByName>,
) {
  return useQuery<GetPokemonByName>(
    createUseGetSearchPokemonByNameKey(keyWord),
    () =>
      api.get<GetPokemonByName>(`/pokemon/${keyWord}`).then(parseResponseData),
    options,
  )
}
