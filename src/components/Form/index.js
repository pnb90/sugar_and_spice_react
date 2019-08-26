import React, {useState} from 'react'


export default function Form() {
    const [recipeName, setRecipeName] = useState("")
    const [ingredient, setIngredient] = useState("")
    const [amount, setAmount] = useState()
    const [measurement, setMeasurement] = useState()


    return(
        <form>
            <div>
                <label> Recipe Name </label>
                <input 
                    type="text" 
                    value = {recipeName}
                    onChange = {event => setRecipeName(event.target.value)}
                    placeholder = "Cookies"
                    required
                />
            </div>
            <div>
                <label> Ingredient </label>
                  <input 
                    type="text" 
                    value = {ingredient}
                    onChange = {event => setIngredient(event.target.value)}
                    required
                    placeholder = "Sugar"

                />
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