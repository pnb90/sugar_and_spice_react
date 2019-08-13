import React, { useState, useEffect } from 'react'
import { Container } from './style'
import Navbar from 'components/Navbar'
import axios from 'axios'

export default function Home() { 
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios
            .get('/api/recipes')
            .then(response => setRecipes(response.data))
    }, [])

    let recipeTitles = recipes.map(recipe => {return(
        <h4 key={recipe.id}>{recipe.name}</h4>
    )})


    return(
        <Container>
            <Navbar />
            {recipeTitles}
        </Container>
    )
}