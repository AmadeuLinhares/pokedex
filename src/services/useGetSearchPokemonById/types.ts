import { colors } from '@/styles/colors'
export type PokemonType = {
  slot: number
  type: {
    name: keyof typeof colors.types
    url: string
  }
}
export type PokemonMoves = {
  move: {
    name: string
    url: string
  }
}

export type GetPokemonById = {
  name: string
  height: number
  weight: number
  id: number
  types: PokemonType[]
  moves: PokemonMoves[]
}
