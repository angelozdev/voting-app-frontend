import { css } from '@emotion/react'
import { colors, fonts } from './theme'

const global = css`
  body {
    font-family: ${fonts.inter};
    background-color: ${colors.white};
  }
`

export default global
