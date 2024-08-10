import recipes from "../data/database.json";
import { useState } from "react";

function CreateARecipe(props) {

    const [newRecipe, setNewRecipe] = useState(recipes);

    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [img, setImg] = useState("");
    const [serving, setServing] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    const recipeIds = props.recipesToDisplay.map((element) => element.id);
    const maxId = Math.max(...recipeIds);
    const nextId = maxId + 1;

    const NewRecipeAdded = {
        id: nextId,
        name: name,
        calories: calories,
        img: img,
        serving: serving,
    }

    // Update the list with the new recipe
    setNewRecipe([NewRecipeAdded, ...newRecipe]);


    return (

        <section>
            <h2> Create your own recipe</h2>

            <form onSubmit={handleSubmit}>

                <label >
                    Name
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="enter the name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />

                    Calories
                    <input
                        type="number"
                        calories="calories"
                        required
                        placeholder="enter the calories"
                        value={calories}
                        onChange={(e) => { setCalories(e.target.value) }}
                    />

                    Image
                    <input
                        type="image"
                        image="image"
                        required
                        placeholder="enter picture"
                        value={img}
                        onChange={(e) => { setImg(e.target.value) }}
                    />

                    Serving
                    <input
                        type="text"
                        serving="serving"
                        required
                        placeholder="enter number of serving"
                        value={serving}
                        onChange={(e) => { setServing(e.target.value) }}
                    />

                </label>

                <p>
                    <button>Create</button>
                </p>
            </form>
        </section>
    )
}


export default CreateARecipe;