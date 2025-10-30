import React from "react"




export default function Form() {
    const [ingredients,setIngredients] = React.useState(['chiken','potato'])

    //afficher la liste dans un JSX elements : 
    const ingredientsListItems = ingredients.map(ingredient => {
        return(
            <li key ={ingredient}>
                {ingredient}
            </li>
        )
    })


    //We use this fucntion if we want to use onSubmit={handelsubmit} in the form
        // function handelsubmit(event){
        //     event.preventDefault()
        //     //getting the data from the form and update the state : 

        //     //new instance from FormData object
        //     const formDataa = new FormData(event.currentTarget)

        //     //getting the data : 
        //     const newIngredient = formDataa.get("ingredient") // get the data from the input that have the name 'ingredient'
          
        //     //update the new Array : 
        //     setIngredients(prevIngredients => [...prevIngredients,newIngredient])

        // }

    //we use this function when we want to use action={}
    function actionSubmit(formData){

      const newIngredient = formData.get("ingredient")
      setIngredients(prevIngredients => [...prevIngredients,newIngredient])
      console.log(Object.fromEntries(formData))


    }

  return (
    <main>
      {/* <form onSubmit={handelsubmit} className="add-ingredient-form" > */}
      <form action={actionSubmit} className="add-ingredient-form" >
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

