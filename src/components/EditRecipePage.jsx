import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import recipes from "../data/database.json";


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
        <div className="EditRecipePage">
            <h3> Edit the Recipe</h3>

            <form onSubmit={handleFormSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label>
                    Calories:
                    <input
                        type="number"
                        name="calories"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label>
                    Image:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </label>
                <br />

                <label>
                    Serving:
                    <input
                        type="number"
                        name="serving"
                        value={serving}
                        onChange={(e) => setServing(e.target.value)}
                        required
                    />
                </label>
                <br />

                <button type="submit">Update Recipe</button>

            </form>
            <button onClick={deleteRecipe}>Delete Recipe</button>

        </div>
    )
}

export default EditRecipePage;