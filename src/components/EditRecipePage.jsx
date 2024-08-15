import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import recipes from "../data/database.json";
import './EditRecipePage.css'


function EditRecipePage() {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [img, setImg] = useState("");
    const [serving, setServing] = useState("");

    const { recipeId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const recipeToEdit = recipes.find(recipe => recipe.id === parseInt(recipeId));
        if (recipeToEdit) {
            setName(recipeToEdit.name);
            setCalories(recipeToEdit.calories);
            setImg(recipeToEdit.image);
            setServing(recipeToEdit.serving);
        }
    }, [recipeId]);

    const handleFileChange = (e) => {
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
            serving: serving
        };

        // Atualiza a lista de receitas
        const updatedRecipes = recipes.map(recipe => recipe.id === updatedRecipes.id ? updatedRecipe : recipe);

        // Redireciona o usuario apos salvar as alteracoes
        navigate(`/recipes/${recipeId}`);

    };


    const deleteRecipe = () => {
        const updatedRecipes = recipes.filter(recipe => recipe.id !== parseInt(recipeId));

        // Redireciona apos deletar
        navigate("/recipes");
    }

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
                        name="serving"
                        value={serving}
                        onChange={(e) => setServing(e.target.value)}
                        required
                    />
                </label>

                <button type="submit">Update Recipe</button>
                <button onClick={deleteRecipe} className="delete-recipe-button">Delete Recipe</button>

            </form>


        </div>
    )
}

export default EditRecipePage;