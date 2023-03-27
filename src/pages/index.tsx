import { useCallback, useEffect, useMemo, useState } from 'react'

import Image from 'next/image'
import { useForm } from 'react-hook-form'

import { Box } from '@/components/Box'
import { Card } from '@/components/Card'
import { Input } from '@/components/Input'
import { Typography } from '@/components/Typography'
import { useGetPokemonList } from '@/services/useGetPokemonList'
import { useGetSearchPokemon } from '@/services/useGetSearchPokemon'
import { selectSetLoading, useLoading } from '@/stores/useLoading/useLoading'

// eslint-disable-next-line no-restricted-imports
import SearchIcon from '../../public/search.svg'

const Home = () => {
  const [pokemonKeyword, setPokemonKeyword] = useState<string>(``)

  const { data, isRefetching, isFetching, fetchNextPage, isLoading } =
    useGetPokemonList()
  const {
    data: searchData,
    isRefetching: isRefetchingSearch,
    isLoading: isLoadingSearchedPokemon,
  } = useGetSearchPokemon(pokemonKeyword, {
    enabled: !!pokemonKeyword,
  })

  const setGlobalLoading = useLoading(selectSetLoading)

  const loadingPage = useMemo(
    () =>
      isLoading ||
      isLoadingSearchedPokemon ||
      isRefetchingSearch ||
      isRefetching ||
      isFetching,
    [
      isFetching,
      isLoading,
      isLoadingSearchedPokemon,
      isRefetching,
      isRefetchingSearch,
    ],
  )

  useEffect(() => {
    setGlobalLoading(loadingPage)
  }, [loadingPage, setGlobalLoading])

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<{
    keyword: string
  }>()
  const onNextPage = useCallback(() => {
    fetchNextPage()
  }, [fetchNextPage])

  const pokemonList = useMemo(() => data?.pages?.flat() || [], [data?.pages])

  const searchPokemon = (keyword: { keyword: string }) => {
    setPokemonKeyword(keyword.keyword)
  }

  const clearFilter = useCallback(() => {
    reset()
    setPokemonKeyword(``)
  }, [reset])

  const renderPokemonList = useMemo(() => {
    if (pokemonKeyword) {
      if (searchData) {
        return (
          <Card
            name={searchData.species.name}
            url={searchData.species.url}
            key={searchData.species.name}
          />
        )
      }
      return (
        <Box
          css={{
            width: `100%`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            gridArea: `1/1/2/4`,
          }}
        >
          <Typography
            variant={`subtitle3`}
            css={{
              color: `$primary`,
            }}
          >
            Nenhum pokemon encontrado 😔
          </Typography>
        </Box>
      )
    }

    return pokemonList.map((pokemon) =>
      pokemon.results.map((val) => (
        <Card name={val.name} url={val.url} key={val.name} />
      )),
    )
  }, [pokemonKeyword, pokemonList, searchData])

  return (
    <Box
      css={{
        display: `grid`,
        backgroundColor: `$primary`,
        rowGap: `$spacing16`,
        px: `$spacing4`,
        py: `$spacing8`,
      }}
    >
      <form onSubmit={handleSubmit(searchPokemon)}>
        <Box
          css={{
            width: `100%`,
            display: `flex`,
          }}
        >
          <Box
            css={{
              width: `100%`,
            }}
          >
            <Input
              {...register(`keyword`, {
                required: {
                  message: `Campo obrigatório`,
                  value: true,
                },
              })}
              error={!!errors.keyword}
              messageError={errors.keyword?.message}
            />
          </Box>
          <Box
            css={{
              cursor: `pointer`,
              marginLeft: `$spacing8`,
            }}
          >
            <button type="submit">
              <Image
                src={SearchIcon.src}
                alt={`Search`}
                width={28}
                height={28}
              />
            </button>
          </Box>
          {!!pokemonKeyword && (
            <Box>
              <button type="button" onClick={clearFilter}>
                <Typography variant={`caption`} css={{ color: `$gray0` }}>
                  Limpar filtro
                </Typography>
              </button>
            </Box>
          )}
        </Box>
      </form>
      <Box
        css={{
          display: `grid`,
          gridTemplateColumns: `repeat( auto-fill, minmax(150px, 1fr) );`,
          gap: `$spacing12`,
          boxShadow: `inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25)`,
          backgroundColor: `White`,
          borderRadius: `$medium`,
          px: `$spacing12`,
          py: `$spacing24`,
        }}
      >
        {renderPokemonList}
      </Box>
      {!pokemonKeyword && (
        <Box
          css={{
            display: `flex`,
            justifyContent: `flex-end`,
            alignItems: `center`,
          }}
        >
          <Box
            css={{
              border: `solid 1px white`,
              borderRadius: `$medium`,
              py: `$spacing12`,
              px: `$spacing12`,
            }}
          >
            <button onClick={onNextPage}>
              <Typography
                css={{
                  textTransform: `uppercase`,
                  color: `$gray0`,
                }}
                variant={`subtitle3`}
              >
                next page
              </Typography>
            </button>
          </Box>
        </Box>
      )}
    </Box>
  )
}
export default Home
