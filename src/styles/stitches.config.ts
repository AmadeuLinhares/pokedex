import { ScaleValue, createStitches } from '@stitches/react'

import { colors } from '@/styles/colors'
import { fontSize } from '@/styles/fontSize'
import { radii } from '@/styles/radii'
import { space } from '@/styles/space'

export const { styled, css, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      ...colors.gray,
      ...colors.types,
      ...colors.red,
    },
    space: {
      ...space,
    },
    fontSizes: {
      ...fontSize,
    },
    fonts: {
      roboto: `Roboto, sans-serif`,
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      ...radii,
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  utils: {
    mx: (value: ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
})

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    // height: `100%`,
    fontFamily: `$roboto`,
    boxSizing: `border-box`,
    '&:focus': {
      outline: `none`,
      border: `none`,
    },
  },
  body: {
    height: `100vh`,
  },
  button: {
    cursor: `pointer`,
    background: `none`,
    border: `none`,
    outline: `none`,
  },
  input: {
    '&:focus': {
      outline: `none`,
    },
  },
})
