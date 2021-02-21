/*  */
export interface TotalVotes {
  __typename: string
  totalCandidates: number
  totalVotes: number
  _id: string
}

export interface Candidate {
  __typename: string
  id: string
  age: number
  avatar: string
  firstname: string
  lastname: string
  votes: number
  slogan: string
}

/*  */
export type GetTotalVotes = { getTotalVotes: TotalVotes }
export type GetAllCandidates = { getAllCandidates: Candidate[] }
export type UpdateCandidateById = { updateCandidateById: Candidate }
