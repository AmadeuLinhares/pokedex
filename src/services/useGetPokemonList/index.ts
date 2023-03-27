import { AxiosError } from 'axios'
import { useInfiniteQuery } from 'react-query'

import { api } from '@/api'
import { parseResponseData } from '@/api/parseResponse'
import { createUseGetPokemonKey } from '@/services/useGetPokemonList/keys'
import { CriptoData } from '@/services/useGetPokemonList/types'

import { pageSize } from './constants'

export function useGetPokemonList() {
  return useInfiniteQuery<CriptoData, AxiosError<Error>>(
    createUseGetPokemonKey(),
    ({ pageParam = 1 }) =>
      api
        .get<CriptoData>(`/pokemon?offset=${pageParam}&limit=${pageSize}`)
        .then(parseResponseData),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.results.length >= pageSize
          ? lastPage.results.length + allPages.length
          : undefined
      },
      enabled: true,
    },
  )
}
