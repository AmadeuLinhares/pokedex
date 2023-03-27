import { ReactNode } from 'react'

import { css, styled } from '@/styles/stitches.config'

const SitchesBox = styled(`div`, css({}))

type BoxProps = React.ComponentProps<typeof SitchesBox> & {
  children: ReactNode
}

export const Box = ({ children, ...rest }: BoxProps) => {
  return <SitchesBox {...rest}>{children}</SitchesBox>
}
