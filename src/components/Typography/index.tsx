import { styled } from '@/styles/stitches.config'

import { typographyStyles } from './styles'

const TypographyStitches = styled(`p`, typographyStyles())
type TypographyProps = React.ComponentProps<typeof TypographyStitches> & {
  children: string
}
export const Typography = ({ children, ...rest }: TypographyProps) => {
  return <TypographyStitches {...rest}>{children}</TypographyStitches>
}
