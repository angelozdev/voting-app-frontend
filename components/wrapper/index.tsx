import * as React from 'react'
import { screens } from 'styles/theme'

/* Styles */
import { Container } from './styles'

/* Types */
interface Props {
  children: React.ReactChild
  maxWidth: screens
  hasPadding?: boolean
}

function Wrapper({
  children,
  maxWidth = screens.lg,
  hasPadding = true
}: Props) {
  return <Container theme={{ maxWidth, hasPadding }}>{children}</Container>
}

export default Wrapper
