import React from "react";
import recipes from "../data/database.json";
import { useState } from "react";
import './RecipeMenu.css';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function RecipeMenu() {
    const [recipesToDisplay, setRecipesToDisplay] = useState(recipes);
    const { recipeId } = useParams();

    
    // Estado para controlar o status de cozimento de cada receita
    const [cookedStatus, setCookedStatus] = useState(
        recipes.reduce((acc, recipe) => {
            acc[recipe.id] = false; // Inicializa todas como "Not Cooked"
            return acc;
        }, {})
    );


    // Função para deletar uma receita
    const deleteRecipe = (recipeId) => {
        const newRecipeList = recipesToDisplay.filter((element) => {
            return recipeId !== element.id;
        });
        setRecipesToDisplay(newRecipeList);

        // Também remover o status de cozimento ao deletar
        setCookedStatus((prevState) => {
            const newState = { ...prevState };
            delete newState[recipeId];
            return newState;
        });
    };

    // Função para alternar o status de cozimento
    const toggleCookedStatus = (recipeId) => {
        setCookedStatus((prevState) => ({
            ...prevState,
            [recipeId]: !prevState[recipeId],
        }));
    };

    return (
        <section className="recipe-list" >


            {recipesToDisplay.map((recipeDetails) => (

                <div key={recipeDetails.id} className="recipe-item">
                    <img src={recipeDetails.image} alt={recipeDetails.name} />
                    <div>

                        <h3>{recipeDetails.name}</h3>
                        <p>Calories: {recipeDetails.calories}</p>
                        <p>Servings: {recipeDetails.serving}</p>

                        <button onClick={() => toggleCookedStatus(recipeDetails.id)}>
                            {cookedStatus[recipeDetails.id] ? " Not Cooked" : "Cooked"}
                        </button>

                        <button onClick={() => deleteRecipe(recipeDetails.id)}>Delete</button>

                        <Link to={`/recipes/edit/${recipeId}`}>
                            <button>Edit</button></Link>

                    </div>
                </div>
            ))}
        </section>
    );

}

export default RecipeMenu;
