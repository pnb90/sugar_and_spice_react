import React, { useState, useEffect } from 'react'
import { Container, StyledLink, CardLink, RecipeName } from './style'
import Card from 'components/Card'
import axios from 'axios'

export default function Home() { 
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios
            .get('/api/recipes')
            .then(response => setRecipes(response.data))
    }, [])

    let recipeTitles = recipes.map(recipe => {
        return(
                <Card
                    key={recipe.id}
                    recipeID={recipe.id}
                    name={recipe.name}
                />
    )})

    return(
        <Container>
            <Card 
                recipeID="new"
                name="Add New Recipe"
            />
            {recipeTitles}
            {recipeTitles}
            {recipeTitles}
            {recipeTitles}
        </Container>   
    )
}