import { useCallback, useMemo } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { Box } from '@/components/Box'
import { Typography } from '@/components/Typography'
type CardProps = {
  name: string
  url: string
}
export const Card = ({ name, url }: CardProps) => {
  const router = useRouter()
  const getPokemonId = useMemo(() => {
    const numberInUrl = url.match(/\d+/g)
    if (numberInUrl?.length) {
      return numberInUrl[1]
    }
  }, [url])

  const navigateToDetail = useCallback(() => {
    router.push(`details/${getPokemonId}`)
  }, [getPokemonId, router])

  return (
    <Box
      css={{
        boxShadow: `0px 1px 3px 1px rgba(0, 0, 0, 0.2)`,
        borderRadius: `$small`,
        backgroundColor: `$gray0`,
        width: `auto`,
        height: `auto`,
      }}
      onClick={navigateToDetail}
    >
      <Box
        css={{
          display: `flex`,
          justifyContent: `flex-end`,
          alignItems: `center`,
          padding: `$spacing8`,
        }}
      >
        {/* PokemonId */}
        <Typography
          css={{
            color: `$gray700`,
          }}
        >
          {`#${getPokemonId}`}
        </Typography>
      </Box>
      <Box
        css={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          marginBottom: `-$spacing16`,
        }}
      >
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getPokemonId}.svg`}
          alt="pokemon name"
          width={72}
          height={72}
        />
      </Box>
      <Box
        css={{
          borderTopLeftRadius: `$medium`,
          borderTopRightRadius: `$medium`,
          backgroundColor: `$gray200`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          py: `$spacing32`,
        }}
      >
        {/* Footer */}
        <Typography
          css={{
            color: `$gray900`,
          }}
          variant={`subtitle1`}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  )
}
