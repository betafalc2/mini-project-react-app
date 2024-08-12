import recipes from "../data/database.json";
import { useState } from "react";

function CreateARecipe(props) {

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
   

    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.callbackToCreate(newRecipeAdded);

        const newRecipeAdded = {
            id: nextId,
            name: name,
            calories: calories,
            img: img,
            serving: serving,
        }


        setName("");
        setCalories("");
        setImg("");
        setServing("");
    }

   

 
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
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                
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