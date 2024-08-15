import React from "react";
import recipes from "../data/database.json";
import { useState } from "react";
import './RecipeMenu.css';
import { Link } from "react-router-dom";


function RecipeMenu({ recipesArr, callbackToDelete }) {
    console.log("RecipeMenu received recipes:", recipesArr);

    return (
        <section className="recipe-list">
            {recipesArr.map((recipeDetails) => (
                <div key={recipeDetails.id} className="recipe-item">
                    <img src={recipeDetails.image} alt={recipeDetails.name} />
                    <div>
                        <h3>{recipeDetails.name}</h3>
                        <p>Calories: {recipeDetails.calories}</p>
                        <p>Servings: {recipeDetails.servings}</p>
                        <button onClick={() => callbackToDelete(recipeDetails.id)}>Delete</button>
                        <Link to={`/recipes/edit/${recipeDetails.id}`}>
                            <button>Edit</button>
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default RecipeMenu;
