import { InputHTMLAttributes, forwardRef } from 'react'

import { Box } from '@/components/Box'
import { Typography } from '@/components/Typography'
import { styled } from '@/styles/stitches.config'

import { inputStyles } from './styles'
const InputStitches = styled(`input`, inputStyles())

type InputProps = React.ComponentProps<typeof InputStitches> &
  InputHTMLAttributes<HTMLInputElement> & {
    error?: boolean
    messageError?: string
  }

export const Input = forwardRef<
  React.ElementRef<typeof InputStitches>,
  InputProps
>(({ error, messageError, ...rest }, ref) => {
  return (
    <Box>
      <InputStitches {...rest} ref={ref} />
      {error && !!messageError && (
        <Box
          css={{
            paddingTop: `$spacing8`,
            paddingLeft: `$spacing4`,
          }}
        >
          <Typography
            variant={`body3`}
            css={{
              color: `$gray0`,
            }}
          >
            {messageError}
          </Typography>
        </Box>
      )}
    </Box>
  )
})
