import { css } from '@/styles/stitches.config'
export const typographyStyles = () =>
  css({
    fontFamily: `$roboto`,
    variants: {
      variant: {
        headline: {
          fontWeight: `bold`,
          fontSize: `$32`,
        },
        subtitle3: {
          fontWeight: `bold`,
          fontSize: `$16`,
        },
        subtitle2: {
          fontWeight: `bold`,
          fontSize: `$18`,
        },
        subtitle1: {
          fontWeight: `bold`,
          fontSize: `$24`,
        },
        body3: {
          fontWeight: `normal`,
          fontSize: `$14`,
        },
        body2: {
          fontWeight: `normal`,
          fontSize: `$16`,
        },
        body1: {
          fontWeight: `normal`,
          fontSize: `$18`,
        },
        caption: {
          fontWeight: `normal`,
          fontSize: `$12`,
        },
      },
    },
  })
