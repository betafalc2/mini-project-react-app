import React from "react";
import recipes from "../data/database.json";
import { useState } from "react";
import './RecipeMenu.css';
import { Link } from "react-router-dom";


function RecipeMenu(props) {
    

    // Estado para controlar o status de cozimento de cada receita


    return (
        <section className="recipe-list" >

            {props.recipesArr.map((recipeDetails) => {
                
                return(
                    <div key={recipeDetails.id} className="recipe-item">
                    <img src={recipeDetails.image} alt={recipeDetails.name} />
                    <div>

                        <h3>{recipeDetails.name}</h3>
                        <p>Calories: {recipeDetails.calories}</p>
                        <p>Servings: {recipeDetails.servings}</p>

                        <button onClick={props.callbackToDelete}>Delete</button>

                        <Link to={`/recipes/edit/${recipeDetails.id}`}>
                            <button>Edit</button>
                        </Link>

                    </div>
                </div>
                )
            })}
        </section>
    );

}

export default RecipeMenu;
