import React from 'react'
import { CardLink, RecipeName, StyledImg } from './style'

export default function Card(props) {
  return(
    <CardLink href={"/recipes/" + props.recipeID}>
      <RecipeName> 
        {props.name}
      </RecipeName>
      <StyledImg src="https://d1dxs113ar9ebd.cloudfront.net/225batonrouge/2018/12/225_FeatureImageTemplate-3.jpg?q=70&crop=faces&fit=crop&w=1200&h=550"/>
    </CardLink>
  )
}
