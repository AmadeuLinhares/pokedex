import { QueryKey } from 'react-query'

export const createUseGetSearchPokemonByIdKey = (id: string): QueryKey => [
  `searchPokemonById`,
  id,
]
