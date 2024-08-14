import recipes from "../data/database.json";
import { useState } from "react";
import './CreateARecipe.css'

function CreateARecipe(props) {
    const [recipesToDisplay, setRecipesToDisplay] = useState(recipes);


    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [img, setImg] = useState("");
    const [serving, setServing] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImg(reader.result); 
            };
            reader.readAsDataURL(file); 
        }
    };

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

   
    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecipeAdded = {
            name: name,
            calories: calories,
            img: img,
            serving: serving,
        }

        setRecipesToDisplay(newRecipeAdded);

        setName("");
        setCalories("");
        setImg("");
        setServing("");
    }

 
    return (

        <section className="create-recipe-container">
            

            <form onSubmit={handleSubmit} className="create-recipe-form">
            <h2> Create your own recipe</h2>

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
                    <br/>

                    Calories
                    <input
                        type="number"
                        calories="calories"
                        required
                        placeholder="enter the calories"
                        value={calories}
                        onChange={(e) => { setCalories(e.target.value) }}
                    />
                    <br/>

                    Image
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                
                    />
                    <br/>
                    Serving
                    <input
                        type="number"
                        serving="serving"
                        required
                        placeholder="enter number of servings"
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