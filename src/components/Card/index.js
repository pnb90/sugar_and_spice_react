import React from 'react'
import { Container, RecipeName } from './style'

export default function Card(props) {
  return(
    <Container>
      <RecipeName> 
        {props.name}
      </RecipeName>
    </Container>
  )
}
