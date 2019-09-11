import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Table, TableBody, TableCell, TableHead, TableRow, Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'


export default function Form() {
    const [recipeName, setRecipeName] = useState("")
    const [ingredient, setIngredient] = useState("")
    const [ingredientList, setIngredientList] = useState([])
    const [amount, setAmount] = useState("")
    const [measurement, setMeasurement] = useState("")
    const [error, setError] = useState("")

    const ingredientRow = 
        <TableRow>
            <TableCell>
                <input
                    type="text" 
                    name = "Ingredient"
                    value = {ingredient}
                    onChange = {event => setIngredient(event.target.value)}
                    placeholder = "sugar"
                    required
                /> 

            </TableCell>
            <TableCell>
                <input 
                    type="text" 
                    name = "amount"
                    value = {amount}
                    onChange = {event => setAmount(event.target.value)}
                    placeholder = "2"
                    required
                />
            </TableCell>
            <TableCell>
                <input 
                    type="text" 
                    name = "measurement"
                    value = {measurement}
                    onChange = {event => setMeasurement(event.target.value)}
                    placeholder = "tablespoons"
                    required
                />
            </TableCell>
        </TableRow>

    const ingredientes = ingredientList.map(({ingredientRow}) => ingredientRow  )

    const addIngredient = () => {
        setIngredientList(oldIngredients => [...oldIngredients, {ingredientRow}])
    }

    const removeIngredient = () => {
        console.log(ingredientList)
        // setIngredientList(ingredientList.filter(ingredient, ingredient.id != (ingredientList.length - 1)))
    }

    const handleSubmit = () => {
        axios.post("/api/recipes", {
            name: recipeName
        })
        .then(response => {
            console.log(response);
            console.log(response.data);
          })
        .catch(error => {
            setError(error.response.data)
            console.log(error)
        })
    }

    return(
        <form onSubmit = {handleSubmit}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <input 
                            type="text" 
                            name = "recipeName"
                            value = {recipeName}
                            onChange = {event => setRecipeName(event.target.value)}
                            placeholder = "Recipe Name"
                        />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <label> Ingredient </label>
                        </TableCell>
                        <TableCell>
                            <label> Amount </label>
                        </TableCell>
                        <TableCell>
                            <label> Measurement </label>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ingredientes}
                </TableBody>
            </Table>
                <Fab onClick = {addIngredient}><AddIcon /></Fab>
                <Fab onClick = {removeIngredient}><RemoveIcon /></Fab>
                <Fab variant="extended" type="submit" onClick={handleSubmit}> Submit </Fab>
        </form>
    )
}