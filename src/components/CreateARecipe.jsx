
import { useState } from "react";
import './CreateARecipe.css'

function CreateARecipe(props) {
    
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [img, setImg] = useState("");
    const [servings, setServings] = useState("");

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

   
    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecipeAdded = {
            name: name,
            calories: calories,
            img: img,
            servings: servings,
        }

        props.callbackToCreate(newRecipeAdded);

        setName("");
        setCalories("");
        setImg("");
        setServings("");
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

                    Servings
                    <input
                        type="number"
                        serving="serving"
                        required
                        placeholder="enter number of servings"
                        value={servings}
                        onChange={(e) => { setServings(e.target.value) }}
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