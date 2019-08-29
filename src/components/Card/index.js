import React from 'react'
import { CardLink, RecipeName } from './style'

export default function Card(props) {
  return(
    <CardLink href={"/recipes/" + props.recipeID}>
      <RecipeName> 
        {props.name}
      </RecipeName>
    </CardLink>
  )
}
