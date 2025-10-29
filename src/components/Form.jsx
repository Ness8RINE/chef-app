import React from "react"
// import { useState } from "react"

/*
React.useState("Yes") : 
    The current state value
    A function that lets you update that value

The array destructuring
    const [a, b] = [1, 2];
    means “assign a = 1 and b = 2”.

const [result, func] = React.useState("Yes");
    result will contain the current state value, initially "Yes".
    func will be the function to update that value.
 */

export default function Form() {
    const ingredients =['potato','tomato','komako']

    //afficher la liste dans un JSX elements : 
    const ingredientsListItems = ingredients.map(ingredient => {
        return(
            <li key ={ingredient}>
                {ingredient}
            </li>
        )
    })
     
    function handelsubmit(event){
        event.preventDefault()
        //getting the data from the form
        //new instance from FormData object
        const formDataa = new FormData(event.currentTarget)
        //getting the data : 
        const newIngredient = formDataa.get("ingredient")
        console.log(newIngredient)
        //adding the new ingredient to the array 
        ingredients.push(newIngredient)
        console.log(ingredients)
    }

  return (
    <main>
      <form onSubmit={handelsubmit} className="add-ingredient-form" >
        <input
          type="text"
          placeholder="e.g egg"
          aria-label=" Add ingredient"
          name ="ingredient"
        />
        <button >+ Add ingredient</button>
       
      </form>

      <h2>List of Ingredients</h2>  
      <ul>
        {ingredientsListItems}
      </ul>
    </main>
  );
}

