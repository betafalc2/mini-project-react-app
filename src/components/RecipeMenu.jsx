import React from "react";
import recipes from "../data/database.json";
import { useState } from "react";
import './RecipeMenu.css';
import CreateARecipe from "./CreateARecipe";

function RecipeMenu() {
    const [recipesToDisplay, setRecipesToDisplay] = useState(recipes);

    // Estado para controlar o status de cozimento de cada receita
    const [cookedStatus, setCookedStatus] = useState(
        recipes.reduce((acc, recipe) => {
            acc[recipe.id] = false; // Inicializa todas como "Not Cooked"
            return acc;
        }, {})
    );

    const createRecipe = (recipeArr) => {
        const recipeIds = recipesToDisplay.map((recipe) => recipe.id);
        const maxId = Math.max(...recipeIds);
        const nextId = maxId + 1;

        const newRecipe = {
            ...recipeArr,
            id: nextId
        }

        const newList = [newRecipe, ...recipesToDisplay]
        setRecipesToDisplay(newList);  
    
    }


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

            <CreateARecipe callbackToCreate={createRecipe} />

            {recipesToDisplay.map((recipeDetails) => (

                <div key={recipeDetails.id} className="recipe-item">
                    <img src={recipeDetails.image} alt={recipeDetails.name} />
                    <div>

                        <h3>Name: {recipeDetails.name}</h3>
                        <p>Calories: {recipeDetails.calories}</p>
                        <p>Serving: {recipeDetails.serving}</p>

                        <p>Status: {cookedStatus[recipeDetails.id] ? "Cooked" : "Not Cooked"}</p>
                        <button onClick={() => toggleCookedStatus(recipeDetails.id)}>
                            {cookedStatus[recipeDetails.id] ? "Mark as Not Cooked" : "Mark as Cooked"}
                        </button>

                        <button onClick={() => deleteRecipe(recipeDetails.id)}>Delete</button>

                    </div>
                </div>
            ))}
        </section>
    );

}

export default RecipeMenu;
