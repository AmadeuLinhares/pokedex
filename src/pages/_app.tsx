import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Box } from '@/components/Box'
import { Header } from '@/components/Header'
import { Loading } from '@/components/Loading'
import { selectLoading, useLoading } from '@/stores/useLoading/useLoading'
import { globalStyle } from '@/styles/stitches.config'

const App = ({ Component, pageProps }: AppProps) => {
  const isLoading = useLoading(selectLoading)
  const queryClientConfig = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: Infinity,
        cacheTime: 1 * 60 * 1000, // 1 minute
        // Keep it off and enable where you want.
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
      },
    },
  })
  globalStyle()
  return (
    <QueryClientProvider client={queryClientConfig}>
      {isLoading && <Loading />}
      <Box
        css={{
          backgroundColor: `$primary`,
        }}
      >
        <Header />
      </Box>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default App
