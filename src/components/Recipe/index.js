import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Recipe({match}){
    const [recipe, setRecipe] = useState([])
    const [ingredients, setIngredients] = useState([])
    
    useEffect(() => {
        axios
            .get('/api/recipes/' + match.params.recipeID)
            .then(response => {
                setRecipe(response.data)
                setIngredients(response.data.ingredients.map(ingredient => {return( <li key={ingredient.id}> {ingredient.name} </li>)}))
            })
    }, [match.params.recipeID])

    return(
        <div>
            <h1>{recipe.name}</h1>
            Ingredients: <ul> {ingredients} </ul>
        </div>
    )
}