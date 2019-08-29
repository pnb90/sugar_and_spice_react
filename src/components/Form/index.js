import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Form() {
    const [state, setState] = useState({
        recipeName: "",
        ingredient: "",
        ingredients: [],
        amount: "",
        measurement: "",
        error: ""
    })
    const [recipeName, setRecipeName] = useState("")
    const [ingredient, setIngredient] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [amount, setAmount] = useState()
    const [measurement, setMeasurement] = useState()
    const [error, setError] = useState()

    useEffect(()=>{
        axios
            .get("/api/ingredients")
            .then(response => setIngredients(response.data))
    }, [])

    const ingredientOptions = ingredients.map((ingredientOption) => {
        return(
            <option key={ingredientOption.id}> {ingredientOption.name} </option>
        )
    })
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

        // axios.post("/api/recipes_ingredients", {
        //     recipe_id:
        //     ingredient_id:
        //     weight:
        // })
        // .then(response => {
        //     console.log(response);
        //     console.log(response.data);
        //   })
        // .catch(error => {
        //     setError(error.response.data)
        //     console.log(error)
        // })

        // axios.post("/api/ingredients", {
        //     name: {ingredient}
        //     price
        //     weight
        // })
        // .then(response => {
        //     console.log(response);
        //     console.log(response.data);
        //   })
        // .catch(error => {
        //     setError(error.response.data)
        //     console.log(error)
        // })      
    }

    return(
        <form onSubmit = {handleSubmit}>
            <div>
                <label> Recipe Name </label>
                <input 
                    type="text" 
                    value = {recipeName}
                    onChange = {event => setRecipeName(event.target.value)}
                    placeholder = "Cookies"
                />
            </div>
            <div>
                <label> Ingredient </label>
                <select> 
                    <option></option> 
                    {ingredientOptions}
                </select>
                  {/* <input 
                    type="text" 
                    value = {ingredient}
                    onChange = {event => setIngredient(event.target.value)}
                    required
                    placeholder = "Sugar"
                /> */}
            </div>
            <div>
                <label> Amount </label>
                <input 
                    type="text" 
                    value = {amount}
                    onChange = {event => setAmount(event.target.value)}
                    placeholder = "2"
                    required
                />
            </div>
            <div>
                <label> Measurement </label>
                <input 
                    type="text" 
                    value = {measurement}
                    onChange = {event => setMeasurement(event.target.value)}
                    placeholder = "tablespoons"
                    required
                />
            </div>
            <button type="submit"> Submit </button>
        </form>
    )
}