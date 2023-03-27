import Image from 'next/image'

import { Box } from '@/components/Box'

// eslint-disable-next-line no-restricted-imports
import loading from '../../../public/loading.gif'
export const Loading = () => {
  return (
    <Box
      css={{
        position: `fixed`,
        width: `100vw`,
        height: `100vh`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        zIndex: 9,
        background: `rgba(238, 223, 233, 1)`,
      }}
    >
      <Box>
        <Image src={loading.src} alt="loading" width={300} height={200} />
      </Box>
    </Box>
  )
}
