import React, { useState, useEffect } from 'react'
import { Container, StyledLink } from './style'
import Navbar from 'components/Navbar'
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
                <StyledLink href={"/recipes/" + recipe.id}>
                    <Card
                        key={recipe.id}
                        name={recipe.name}
                    />
                </StyledLink>
    )})

    return(
        <div>
            <Navbar />
            <Container>
                {recipeTitles}
            </Container>   
        </div>
    )
}