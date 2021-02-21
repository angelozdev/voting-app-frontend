import React from 'react'

/* Styles */
import { Container } from './styles'

function Spinner() {
  return (
    <Container>
      <div className="lds-dual-ring"></div>
    </Container>
  )
}

export default Spinner
