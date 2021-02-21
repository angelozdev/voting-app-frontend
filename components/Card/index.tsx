import * as React from 'react'

/* Components */
import { ChevronDown, ChevronUp } from 'components/Icons'

/* Styles */
import {
  Container,
  Actions,
  Avatar,
  Fullname,
  Slogan,
  Vote,
  DisplayVotes
} from './styles'
import { colors } from 'styles/theme'

/* Types */
import { Candidate, GetAllCandidates, UpdateCandidateById } from 'types'

/* Graphql */
import { UPDATE_CANDIDATE_BY_ID } from 'graphql/mutations'
import { MutationUpdaterFn, useMutation } from '@apollo/client'
import { GET_ALL_CANDIDATES } from 'graphql/queries'

/******************* MAIN COMPONENT  ********************/
function Card({ firstname, lastname, slogan, avatar, votes, id }: Candidate) {
  const [updateCandidateById, { loading }] = useMutation<UpdateCandidateById>(
    UPDATE_CANDIDATE_BY_ID
  )

  // Helpers funcions
  const updateCache: MutationUpdaterFn<UpdateCandidateById> = (
    cache,
    { data: { updateCandidateById: candidate } }
  ) => {
    const { getAllCandidates } = cache.readQuery<GetAllCandidates>({
      query: GET_ALL_CANDIDATES
    })

    cache.writeQuery<GetAllCandidates>({
      query: GET_ALL_CANDIDATES,
      data: {
        getAllCandidates: [
          ...getAllCandidates.filter((user) => user.id !== candidate.id),
          candidate
        ]
      }
    })
  }

  const onHandleVoteUp = () => {
    if (votes < 20) {
      updateCandidateById({
        variables: {
          id,
          input: {
            votes: votes + 1
          }
        },
        update: updateCache
      })
    }
  }

  const onHandleVoteDown = () => {
    if (votes > 1) {
      updateCandidateById({
        variables: {
          id,
          input: {
            votes: votes - 1
          }
        },
        update: updateCache
      })
    }
  }

  return (
    <Container>
      <Avatar width="150" height="150" src={avatar} />

      <Fullname>
        {firstname} {lastname}
      </Fullname>

      <Slogan>{slogan}</Slogan>

      <Actions>
        <Vote disabled={loading} onClick={onHandleVoteUp}>
          {loading ? (
            '...'
          ) : (
            <ChevronUp color="green" width="1rem" height="1rem" />
          )}
        </Vote>

        <DisplayVotes>{votes}</DisplayVotes>

        <Vote onClick={onHandleVoteDown} disabled={loading}>
          {loading ? (
            '...'
          ) : (
            <ChevronDown color={colors.primary} width="1rem" height="1rem" />
          )}
        </Vote>
      </Actions>
    </Container>
  )
}

export default Card
