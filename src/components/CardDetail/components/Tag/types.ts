import { colors } from '@/styles/colors'
export type TagProps = {
  value: string
  pokemonType: keyof typeof colors.types
}
