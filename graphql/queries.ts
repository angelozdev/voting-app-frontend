import { gql } from '@apollo/client'

export const GET_TOTAL_VOTES = gql`
  query getTotalVotes {
    getTotalVotes {
      totalCandidates
      totalVotes
    }
  }
`
