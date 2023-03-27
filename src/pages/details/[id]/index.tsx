import { useEffect, useMemo } from 'react'

import { useRouter } from 'next/router'

import { Box } from '@/components/Box'
import { Detail } from '@/components/CardDetail'
import { useGetSearchPokemonById } from '@/services/useGetSearchPokemonById'
import { useLoading } from '@/stores/useLoading/useLoading'
import { selectSetLoading } from '@/stores/useLoading/useLoading/selectors'

const DetailPge = () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading } = useGetSearchPokemonById(id as string, {
    enabled: !!id,
  })

  const setGlobalLoading = useLoading(selectSetLoading)

  useEffect(() => {
    setGlobalLoading(isLoading)
  }, [isLoading, setGlobalLoading])

  const renderDetails = useMemo(() => {
    if (data) {
      return <Detail {...data} />
    }
  }, [data])

  return <Box>{renderDetails}</Box>
}

export default DetailPge
