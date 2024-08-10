import React from "react";
import NavBar from './components/Navbar'
import SideBar from './components/SideBar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import RecipeMenu from './components/RecipeMenu'
import PageNotFound from './components/PageNotFound'
import CreateARecipe from "./components/CreateARecipe";


import { Route, Routes, Link } from 'react-router-dom';

import './App.css'


function App() {


  return (
    <>
      <div>
      <NavBar /> <SideBar />
      </div>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe-menu" element={<RecipeMenu />}/>
        <Route path="/create-a-recipe" element={<CreateARecipe/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
      
      <CreateARecipe recipeToDisplay={props.recipesToDisplay}/>
      <RecipeMenu/>

      <Footer />


    </>
  )
}
export default App
