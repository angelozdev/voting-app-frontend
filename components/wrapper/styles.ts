import styled from '@emotion/styled'
import { screens } from 'styles/theme'

/* Types */
interface Theme {
  maxWidth: screens
  hasPadding: boolean
}

export const Container = styled.div`
  max-width: ${({ theme }: { theme: Theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => (theme.hasPadding ? '0 1rem' : '0')};
`
