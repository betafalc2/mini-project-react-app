import recipes from "../data/database.json"
import { useState } from "react";
import './RecipeMenu.module.css';

function RecipeMenu() {

    const [recipesToDisplay, setRecipesToDisplay] = useState(recipes);


     
        const deleteRecipe = (recipeId) => {
            const newRecipeList = recipesToDisplay.filter((element) => {
                return recipeId !== element.id
            });
            setRecipesToDisplay(newRecipeList);
        };

        return (


            <section className="RecipeList">

                <h1>List of Recipes</h1>
                <h2>Number of Recipes: {recipesToDisplay.length}</h2>

                {recipesToDisplay.map((recipeDetails) => {
                    return (
                        <div key={recipesToDisplay.id} className="recipe-item">
                            <h3>Name: {recipeDetails.name}</h3>
                            <img src={recipeDetails.image} alt="recipe" />
                            <p>Calories: {recipeDetails.calories} </p>
                            <p>Serving: {recipeDetails.servings} </p>
                            <button onClick={() => deleteRecipe(recipeDetails.id)}>Delete</button>
                           
                        </div>
                    )

                })
                }



            </section>




        )

    }

    export default RecipeMenu;