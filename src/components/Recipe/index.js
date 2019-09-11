import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Container, StyledTable, StyledTableHead, StyledTableData} from './style'
import {Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'

export default function Recipe({match}){
    const [recipe, setRecipe] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [recipeTotal, setRecipeTotal] = useState()

    useEffect(() => {
        axios
            .get('/api/recipes/' + match.params.recipeID)
            .then(response => {
                setRecipe(response.data)
                // setRecipeTotal = ({ingredients}) => {ingredients.price.reduce((total, price) => total + price)}
                setIngredients(response.data.ingredients.map(ingredient => {
                    return(
                        <tr key={ingredient.id}>
                            <StyledTableData>{ingredient.name}</StyledTableData>
                            <StyledTableData>${ingredient.price}</StyledTableData>
                            <StyledTableData>{ingredient.weight}</StyledTableData>
                            <StyledTableData>${(ingredient.price/ingredient.weight).toFixed(2)}</StyledTableData>
                            <StyledTableData>${(ingredient.price/5).toFixed(2)}</StyledTableData>
                        </tr>
                    )}))
            })
    }, [match.params.recipeID])

    return(
        <Container>
            <h1>{recipe.name}</h1>
            <Table> 
                <TableHead>
                    <TableRow>
                        <TableCell> Ingredient </TableCell>
                        <TableCell> Price </TableCell>
                        <TableCell> Amount </TableCell>
                        <TableCell> Price per Unit </TableCell>
                        <TableCell> Price per Amount </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ingredients} 
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>Recipe Total: </TableCell>
                        <TableCell>{recipeTotal}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            {/* <StyledTable> 
                <StyledTableHead>
                    <tr>
                        <th> Ingredient </th>
                        <th> Price </th>
                        <th> Amount </th>
                        <th> Price per Unit </th>
                        <th> Price per Amount </th>
                    </tr>
                </StyledTableHead>
                <tbody>
                    {ingredients} 
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Recipe Total: </td>
                        <td>{recipeTotal}</td>
                    </tr>
                </tbody>
            </StyledTable> */}
        </Container>
    )
}