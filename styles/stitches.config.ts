import { createStitches } from '@stitches/react'
import { grayColors, primaryColors, secondaryColors, warningColors } from './themeColors'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      ...primaryColors,
      ...secondaryColors,
      ...grayColors,
      ...warningColors,
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
})
