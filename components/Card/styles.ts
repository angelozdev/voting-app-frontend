import styled from '@emotion/styled'
import { loading } from 'styles/keyframes'
import { animations, colors, shadows } from 'styles/theme'

export const Container = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: ${shadows.DEFAULT};
  transition: 300ms all ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const DisplayVotes = styled.span`
  margin: 0 1rem;
`
export const Pane = styled.div``

/* PLACEHOLDERS */

export const ContainerPlaceholder = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: ${shadows.DEFAULT};
  transition: 300ms all ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const AvatarPlaceholder = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${colors.lightgray};
  border-radius: 50%;
  margin: 0 auto;
  animation: ${loading} ${animations.DEFAULT};
`
export const FullnamePlaceholder = styled.div`
  width: 70%;
  height: 1.5rem;
  background-color: ${colors.lightgray};
  margin: 0 auto;
  margin-top: 1rem;
  animation: ${loading} ${animations.DEFAULT};
  animation-delay: 100ms;
`

export const SloganPlaceholder = styled.div`
  width: 95%;
  height: 6rem;
  background-color: ${colors.lightgray};
  margin: 0 auto;
  margin-top: 1rem;
  animation: ${loading} ${animations.DEFAULT};
  animation-delay: 200ms;
`

export const VotePlaceholder = styled.span`
  background-color: ${colors.lightgray};
  width: 2rem;
  height: 2rem;
  display: inline-block;
  animation: ${loading} ${animations.DEFAULT};
  animation-delay: 300ms;
`

export const DisplayVotesPlaceholder = styled.span`
  display: inline-block;
  background-color: ${colors.lightgray};
  border-radius: 50%;
  margin: 0 1rem;
  width: 2rem;
  height: 2rem;
  animation: ${loading} ${animations.DEFAULT};
  animation-delay: 300ms;
`
