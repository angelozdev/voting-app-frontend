import * as React from 'react'

/* Components */
import Spinner from 'components/Spinner'
import { Card, CardPlaceholder, Wrapper } from 'components'

/* Styles */
import { Container, Grid } from './styles'

/* Graphql */
import { useQuery } from '@apollo/client'
import { GET_ALL_CANDIDATES } from 'graphql/queries'

/* Types */
import { GetAllCandidates } from 'types'

function CardList() {
  const { data } = useQuery<GetAllCandidates>(GET_ALL_CANDIDATES)
  let content: React.ReactNode

  if (!data) {
    const voidArray = Array(6).fill('')
    content = React.Children.toArray(voidArray.map(() => <CardPlaceholder />))
  } else {
    const { getAllCandidates } = data
    content = getAllCandidates.map((user) => <Card key={user.id} {...user} />)
  }

  return (
    <Container>
      <Wrapper>
        <Grid>{content}</Grid>
      </Wrapper>
    </Container>
  )
}

export default CardList
