import { useMemo } from 'react'

import NextImage from 'next/image'

import { Box } from '@/components/Box'
import { Typography } from '@/components/Typography'

import { icons } from './constants'
import { AboutPros } from './types'

export const About = ({ title, type }: AboutPros) => {
  const renderHeader = useMemo(() => {
    return (
      <Box
        css={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        {type !== `moves` && (
          <Box
            css={{
              marginRight: `$spacing8`,
            }}
          >
            <NextImage width={16} height={16} src={icons[type]} alt={type} />
          </Box>
        )}

        <Box
          css={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <Typography
            variant={`body2`}
            css={{
              color: `$gray900`,
              textOverflow: `ellipsis`,
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    )
  }, [title, type])

  return (
    <Box
      css={{
        display: `grid`,
        rowGap: `$spacing12`,
      }}
    >
      {renderHeader}
      <Box
        css={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <Typography
          css={{
            textTransform: `capitalize`,
          }}
        >
          {type}
        </Typography>
      </Box>
    </Box>
  )
}
