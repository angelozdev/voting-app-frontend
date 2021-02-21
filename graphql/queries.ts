import { gql } from '@apollo/client'

export const GET_TOTAL_VOTES = gql`
  query getTotalVotes {
    getTotalVotes {
      totalCandidates
      totalVotes
    }
  }
`

export const GET_ALL_CANDIDATES = gql`
  query getAllCandidates {
    getAllCandidates {
      id
      firstname
      votes
      lastname
      age
      avatar
      slogan
    }
  }
`
