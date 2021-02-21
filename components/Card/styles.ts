import styled from '@emotion/styled'
import { colors, shadows } from 'styles/theme'

export const Container = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: ${shadows.DEFAULT};
  transition: 300ms all ease;

  &:hover {
    box-shadow: ${shadows.lg};
  }
`

export const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`

export const Fullname = styled.h3`
  font-weight: 400;
`

export const Slogan = styled.p`
  font-weight: 300;
  color: ${colors.gray};
`

export const Actions = styled.div`
  padding: 1rem 0;
`

export const Vote = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.5rem 1rem;
`

export const DisplayVotes = styled.span`
  margin: 0 1rem;
`
