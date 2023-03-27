import Image from 'next/image'

import { Box } from '@/components/Box'
import { Typography } from '@/components/Typography'

// eslint-disable-next-line no-restricted-imports
import Logo from '../../../public/logo.png'

export const Header = () => {
  return (
    <Box
      css={{
        display: `flex`,
        justifyContent: `flex-start`,
        alignItems: `center`,
        px: `$spacing12`,
        py: `$spacing24`,
      }}
    >
      <Box>
        <Image src={Logo.src} alt="logo" width={24} height={24} />
      </Box>
      <Box
        css={{
          marginLeft: `$spacing16`,
        }}
      >
        <Typography variant={`headline`} css={{ color: `$gray0` }}>
          Pokédex
        </Typography>
      </Box>
    </Box>
  )
}
