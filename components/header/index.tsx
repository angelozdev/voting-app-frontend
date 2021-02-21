import * as React from 'react'

/* Components */
import { Wrapper } from 'components/'

/* Styles */
import {
  Container,
  ContainerTitle,
  Content,
  Title,
  NumberVotes,
  DisplayVotes
} from './styles'
import { Archive } from 'components/Icons'

/* Graphql */
import { useQuery } from '@apollo/client'
import { GET_TOTAL_VOTES } from 'graphql/queries'

/* Types */
import { GetTotalVotes } from 'types'
import Spinner from 'components/Spinner'
import { colors } from 'styles/theme'

function Header() {
  const { data } = useQuery<GetTotalVotes>(GET_TOTAL_VOTES)

  if (!data) return <Spinner />

  const {
    getTotalVotes: { totalVotes }
  } = data

  return (
    <Container>
      <Wrapper>
        <Content>
          <ContainerTitle>
            <Archive
              color={colors.primary}
              strokeWidth=".1rem"
              width="1.5rem"
              height="1.5rem"
            />
            <Title>Voting App</Title>
          </ContainerTitle>

          <NumberVotes>
            TOTAL VOTES: <DisplayVotes>{totalVotes}</DisplayVotes>
          </NumberVotes>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Header
