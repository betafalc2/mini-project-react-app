import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './components/Home';
import About from './components/About';
import CreateARecipe from './components/CreateARecipe';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import RecipeMenu from './components/RecipeMenu';
import PageNotFound from './components/PageNotFound';
import EditRecipePage from './components/EditRecipePage'
import recipes from "./data/database.json";

import './App.css';

function App() {
  const [recipesToDisplay, setRecipesToDisplay] = useState(recipes);

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

    console.log ("receita criada!")

}

  return (
    <div className="app-container">
    <NavBar className="navbar" />
    <div className="layout-container">
      <SideBar className="sidebar" />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreateARecipe callbackToCreate={createRecipe}/>} />
          <Route path="/recipes" element={<RecipeMenu recipesArr={recipesToDisplay}/>} />
          <Route path="/recipes/edit/:recipeId" element={<EditRecipePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
    <Footer className="footer" />
  </div>
  );
}

export default App;
