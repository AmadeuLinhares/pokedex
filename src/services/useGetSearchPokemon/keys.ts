import { QueryKey } from 'react-query'

export const createUseGetSearchPokemonByNameKey = (
  keyWord: string,
): QueryKey => [`searchPokemonByName`, keyWord]
