import * as React from 'react'

/* Styles */
import {
  ContainerPlaceholder,
  Actions,
  AvatarPlaceholder,
  FullnamePlaceholder,
  SloganPlaceholder,
  VotePlaceholder,
  DisplayVotesPlaceholder,
  Pane
} from './styles'

/******************* MAIN COMPONENT  ********************/
function Card() {
  return (
    <ContainerPlaceholder>
      <Pane>
        <AvatarPlaceholder />

        <FullnamePlaceholder />

        <SloganPlaceholder />
      </Pane>

      <Pane>
        <Actions>
          <VotePlaceholder />

          <DisplayVotesPlaceholder />

          <VotePlaceholder />
        </Actions>
      </Pane>
    </ContainerPlaceholder>
  )
}

export default Card
