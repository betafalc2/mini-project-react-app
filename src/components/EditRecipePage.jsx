import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import recipes from "../data/database.json";
import './EditRecipePage.css'


function EditRecipePage({ recipesArr, callbackToUpdate }) {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [img, setImg] = useState("");
    const [servings, setServings] = useState("");

    const { recipeId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const recipeToEdit = recipesArr.find((recipe) => {
            return recipe.id === recipeId;
        })

        if (recipeToEdit) {
            setName(recipeToEdit.name);
            setCalories(recipeToEdit.calories);
            setImg(recipeToEdit.image);
            setServings(recipeToEdit.servings);
        }

    }, [recipeId, recipesArr]);

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const updatedRecipe = {
            id: parseInt(recipeId),
            name: name,
            calories: calories,
            image: img,
            servings: servings
        };
        console.log("Updated Recipe:", updatedRecipe);

        callbackToUpdate(updatedRecipe);

        navigate('/recipes/');

    };

    return (
        <div className="edit-recipe-container">

            <form onSubmit={handleFormSubmit} className="edit-recipe-form">
                <h2> Edit your Recipe</h2>

                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <br />

                    Calories
                    <input
                        type="number"
                        name="calories"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        required
                    />

                    <br />

                    Image
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    <br />

                    Servings
                    <input
                        type="number"
                        name="servings"
                        value={servings}
                        onChange={(e) => setServings(e.target.value)}
                        required
                    />
                </label>

                <button type="submit">Update Recipe</button>

            </form>


        </div>
    )
}

export default EditRecipePage;