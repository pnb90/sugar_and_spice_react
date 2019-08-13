import React from 'react'
import { Container } from './style'
import Navbar from 'components/Navbar'
import axios from 'axios'

export default function Home() { 
    
    const recipeBook = () => {
        axios
            .get('localhost:3000/api/recipes')
    }

    return(
        <Container>
            <Navbar />
        </Container>
    )
}