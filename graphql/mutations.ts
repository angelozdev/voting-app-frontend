import { gql } from '@apollo/client'

export const UPDATE_CANDIDATE_BY_ID = gql`
  mutation updateCandidateById($id: String!, $input: UpdateCandidateFields!) {
    updateCandidateById(id: $id, input: $input) {
      firstname
      votes
    }
  }
`
