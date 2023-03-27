import { Box } from '@/components/Box'
import { Typography } from '@/components/Typography'

import { TagProps } from './types'
export const Tag = ({ pokemonType, value }: TagProps) => {
  return (
    <Box
      css={{
        py: `$spacing2`,
        px: `$spacing8`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        backgroundColor: `$${pokemonType}`,
        borderRadius: `$pill`,
      }}
    >
      <Typography
        variant={`subtitle3`}
        css={{
          color: `$gray0`,
          textTransform: `capitalize`,
        }}
      >
        {value}
      </Typography>
    </Box>
  )
}
