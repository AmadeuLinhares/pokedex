export type PokemonList = {
  name: string
  url: string
}

export type CriptoData = {
  count: number
  next: string
  previous: string
  results: PokemonList[]
}
