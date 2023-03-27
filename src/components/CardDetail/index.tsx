/* eslint-disable no-restricted-imports */
import { useMemo } from 'react'

import Image from 'next/image'

import { Box } from '@/components/Box'
import { About } from '@/components/CardDetail/components/About'
import { Tag } from '@/components/CardDetail/components/Tag'
import { Typography } from '@/components/Typography'
import { GetPokemonById } from '@/services/useGetSearchPokemonById/types'

import Pokeball from '../../../public/pokeball.svg'

export const Detail = ({
  height,
  name,
  types,
  weight,
  id,
  moves,
}: GetPokemonById) => {
  const pokemonType = useMemo(() => {
    return types[0].type.name || `dragon`
  }, [types])

  const listOfMoves = useMemo(() => {
    return moves.map((val) => val.move.name)
  }, [moves])

  const renderPokemonAvatar = () => {
    return (
      <Box
        css={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          top: `12%`,
          left: 0,
          right: 0,
          position: `absolute`,
        }}
      >
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="pokemon name"
          width={200}
          height={200}
        />
      </Box>
    )
  }

  return (
    <Box
      css={{
        position: `relative`,
        backgroundColor: `$${pokemonType}`,
        px: `$spacing4`,
        height: `100vh`,
      }}
    >
      {/* ================== Header ================== */}

      <Box
        css={{
          display: `flex`,
          justifyContent: `flex-start`,
          flexDirection: `column`,
          alignItems: `center`,
          backgroundColor: `$${pokemonType}`,
          px: `$spacing12`,
          backgroundImage: `url(${Pokeball.src})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `contain`,
          backgroundPosition: `right`,
          height: `30vh`,
        }}
      >
        <Box
          css={{
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            width: `100%`,
            paddingTop: `$spacing16`,
          }}
        >
          <Typography
            variant={`subtitle2`}
            css={{ color: `$gray0`, textAlign: `center` }}
          >
            {name}
          </Typography>

          <Typography
            variant={`subtitle2`}
            css={{ color: `$gray0`, textAlign: `center` }}
          >
            {`#${id}`}
          </Typography>
        </Box>
      </Box>
      {/* ================== Header ================== */}
      {/* ================== Container Image ================== */}
      {renderPokemonAvatar()}
      {/* ================== Container Image ================== */}
      {/* ================== POKEMON SKILLS ================== */}
      <Box
        css={{
          backgroundColor: `white`,
          borderTopLeftRadius: `$medium`,
          borderTopRightRadius: `$medium`,
          paddingTop: `$spacing64`,
          height: `70vh`,
        }}
      >
        <Box
          css={{
            display: `grid`,
            rowGap: `$spacing16`,
            gridAutoRows: `min-content`,
          }}
        >
          {/* Pokemon type */}

          <Box
            css={{
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              flexWrap: `wrap`,
            }}
          >
            <Box
              css={{
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                flexWrap: `wrap`,
              }}
            >
              {types?.map((type) => (
                <Box
                  key={type.slot}
                  css={{
                    margin: `$spacing2`,
                  }}
                >
                  <Tag value={type.type.name} pokemonType={type.type.name} />
                </Box>
              ))}
            </Box>
          </Box>
          {/* About */}

          <Box
            css={{
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
            }}
          >
            <Typography
              variant={`subtitle2`}
              css={{ color: `$${pokemonType}` }}
            >
              Sobre
            </Typography>
          </Box>

          <Box
            css={{
              display: `grid`,
              gridTemplateColumns: `repeat(3, auto)`,
            }}
          >
            <Box
              css={{
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
              }}
            >
              <About title={`${weight} kg`} type="weight" />
            </Box>
            <Box
              css={{
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
              }}
            >
              <About title={`${height}m`} type="height" />
            </Box>
            <Box
              css={{
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
              }}
            >
              <About title={listOfMoves[0] ?? `--`} type="moves" />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* ================== POKEMON SKILLS ================== */}
    </Box>
  )
}
