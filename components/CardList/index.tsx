import * as React from 'react'

/* Components */
import Spinner from 'components/Spinner'
import { Card, Wrapper } from 'components'

/* Styles */
import { Container, Grid } from './styles'

/* Graphql */
import { useQuery } from '@apollo/client'
import { GET_ALL_CANDIDATES } from 'graphql/queries'

/* Types */
import { GetAllCandidates } from 'types'

function CardList() {
  const { data } = useQuery<GetAllCandidates>(GET_ALL_CANDIDATES)

  if (!data) return <Spinner />

  const { getAllCandidates } = data

  return (
    <Container>
      <Wrapper>
        <Grid>
          {getAllCandidates.map((user) => (
            <Card key={user.id} {...user} />
          ))}
        </Grid>
      </Wrapper>
    </Container>
  )
}

export default CardList
