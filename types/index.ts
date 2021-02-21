/*  */
export interface TotalVotes {
  __typename: string
  totalCandidates: number
  totalVotes: number
  _id: string
}

/*  */
export type GetTotalVotes = { getTotalVotes: TotalVotes }
